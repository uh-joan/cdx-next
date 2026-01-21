async function getConfig() {
  const {
    default: {
      utils: { getProjects },
    },
  } = await import('@commitlint/config-nx-scopes');

  const deletedProjects = [
    'rcx-branding',
    'notification',
    'rcx-analytics',
    'branding',
    'ngx-notification',
    'rcx-demo',
    'rcx-demo-app',
    'rcx-reference-app',
    'theme-popperjs',
    'theme-badge',
    'theme-button-toggle',
    'theme-expansion-panel',
    'theme-material-components-web',
    'theme-react-mui',
    'theme-highcharts',
    'demo',
  ];

  return {
    rules: {
      'scope-enum': async (ctx) => [
        2,
        'always',
        [
          'workspace',
          ...deletedProjects,
          ...(await getProjects(
            ctx,
            ({ name, projectType }) =>
              !name.includes('e2e') &&
              (projectType == 'application' || projectType == 'library'),
          )),
        ],
      ],
    },
    // . . .
  };
}

module.exports = getConfig();
