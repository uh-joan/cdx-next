const { Workspaces } = require('nx/src/config/workspaces');

const customScopes = ['authentication'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  utils: { getProjects },
  rules: {
    'scope-enum': (ctx) =>
      getProjects(ctx).then((packages) => [
        2,
        'always',
        [...packages, ...customScopes],
      ]),
    'header-max-length': [2, 'always', 130],
  },
};

function getProjects(context) {
  return Promise.resolve()
    .then(() => {
      const ctx = context || {};
      const cwd = ctx.cwd || process.cwd();
      const ws = new Workspaces(cwd);
      const workspace = ws.readWorkspaceConfiguration();
      return Object.entries(workspace.projects || {}).map(
        ([name, project]) => ({
          name,
          ...project,
        }),
      );
    })
    .then((projects) => {
      return projects
        .filter((project) => project.targets)
        .map((project) => project.name)
        .map((name) => (name.charAt(0) === '@' ? name.split('/')[1] : name));
    });
}
