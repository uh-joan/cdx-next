async function getConfig() {
  const {
    default: {
      utils: { getProjects },
    },
  } = await import('@commitlint/config-nx-scopes');

  return {
    rules: {
      'scope-enum': async (ctx) => [
        2,
        'always',
        [
          'workspace',
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
