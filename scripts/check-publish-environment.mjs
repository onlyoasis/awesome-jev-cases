import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

// Infrastructure checks only. Editorial decisions remain with Codex.
const catalog = '/Users/lzc/Projects/research/awesome-jev-cases';
const website = '/Users/lzc/Projects/web/typesafe-jev';
const volume = '/Volumes/ExternalProjects';
const governor = '/Users/lzc/Projects/automation/storage-governor/storage_governor.py';
const env = {
  ...process.env,
  WRANGLER_WRITE_LOGS: 'false',
  XDG_CACHE_HOME: `${volume}/DevCaches/xdg`,
  npm_config_cache: `${volume}/DevCaches/npm`,
  GIT_TERMINAL_PROMPT: '0',
  GIT_SSH_COMMAND: 'ssh -o BatchMode=yes -o ConnectTimeout=10',
};
const report = {
  checkedAt: new Date().toISOString(),
  executor: {
    sandbox: process.env.CODEX_SANDBOX ?? 'not-set',
    networkDisabled: process.env.CODEX_SANDBOX_NETWORK_DISABLED === '1',
  },
  checks: {},
};

function run(command, args, cwd = catalog) {
  return execFileSync(command, args, {
    cwd, env, encoding: 'utf8', timeout: 30_000,
    maxBuffer: 2 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function check(name, fn) {
  try {
    report.checks[name] = { ok: true, ...fn() };
  } catch (error) {
    // Do not print command output: provider errors can contain account details.
    report.checks[name] = {
      ok: false,
      failure: error.safeMessage ?? 'Command or response validation failed',
      exitCode: typeof error.status === 'number' ? error.status : null,
      code: error.code ?? null,
    };
  }
}

function requireCondition(condition, message) {
  if (!condition) {
    const error = new Error(message);
    error.safeMessage = message;
    throw error;
  }
}

for (const [name, parent] of [
  ['worktreeStorage', `${volume}/Workspaces/codex`],
  ['evidenceStorage', `${volume}/DevCaches/awesome-jev-cases`],
]) {
  check(name, () => {
    const raw = run('/usr/bin/python3', [
      governor, '--mode', 'preflight', '--destination', parent,
      '--expected-write-gib', '1.5',
    ]);
    const data = JSON.parse(raw);
    requireCondition(data.approved === true && data.ok === true,
      'Volume UUID, writable mount, or 60 GiB capacity preflight failed');
    requireCondition(fs.statSync(parent).dev === fs.statSync(volume).dev,
      'Storage parent resolves outside the registered volume');
    let scratch;
    try {
      scratch = fs.mkdtempSync(path.join(parent, '.jev-preflight-'));
      const file = path.join(scratch, 'probe.txt');
      fs.writeFileSync(file, 'jev publication environment probe\n', { flag: 'wx' });
      requireCondition(fs.readFileSync(file, 'utf8') ===
        'jev publication environment probe\n', 'Scratch write/read failed');
    } finally {
      if (scratch) fs.rmSync(scratch, { recursive: true });
    }
    return { peakBudgetGiB: 1.5, minimumFreeGiB: data.minimum_free_gib,
      projectedFreeGiB: data.projected_free_gib };
  });
}

for (const [name, cwd, repo] of [
  ['catalogGitHub', catalog, 'awesome-jev-cases'],
  ['websiteGitHub', website, 'typesafe-jev'],
]) {
  check(name, () => {
    const data = JSON.parse(run('gh', [
      'api', `repos/onlyoasis/${repo}/git/ref/heads/main`,
    ], cwd));
    requireCondition(/^[a-f0-9]{40}$/.test(data.object?.sha ?? ''),
      'GitHub main ref response is invalid');
    const remote = run('git', ['ls-remote', 'origin', 'refs/heads/main'], cwd);
    requireCondition(remote.split(/\s+/)[0] === data.object.sha,
      'GitHub API and SSH main refs differ');
    const local = run('git', ['rev-parse', 'origin/main'], cwd).trim();
    requireCondition(local === data.object.sha,
      'origin/main is stale; fetch origin main and rerun this check');
    run('git', ['push', '--dry-run', 'origin',
      'refs/remotes/origin/main:refs/heads/main'], cwd);
    return { main: data.object.sha, sshReadback: true, pushDryRun: true };
  });
}

check('cloudflare', () => {
  const data = JSON.parse(run('npx', ['--no-install', 'wrangler',
    'deployments', 'list', '--json'], website));
  requireCondition(Array.isArray(data) && data.length > 0,
    'Cloudflare deployment response is invalid');
  const latest = data.reduce((a, b) => a.created_on > b.created_on ? a : b);
  requireCondition(Array.isArray(latest.versions) && latest.versions.length > 0,
    'Cloudflare traffic versions are missing');
  return { latestVersions: latest.versions.map(v => ({
    versionId: v.version_id, percentage: v.percentage,
  })) };
});

const checks = report.checks;
report.canPublishCatalog = checks.worktreeStorage.ok &&
  checks.evidenceStorage.ok && checks.catalogGitHub.ok;
report.canDeployWebsite = report.canPublishCatalog &&
  checks.websiteGitHub.ok && checks.cloudflare.ok;
report.ok = Object.values(checks).every(c => c.ok);
report.host = os.platform();
console.log(JSON.stringify(report, null, 2));
process.exitCode = report.ok ? 0 : 1;
