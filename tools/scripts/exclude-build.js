const { execSync } = require('child_process');

try {
  // Get projects with the specific tag. --json keeps the format stable across
  // Nx versions (Nx 23 prints a JSON array when not attached to a terminal).
  const excludedProjects = JSON.parse(
    execSync('nx show projects -p tag:exclude-from-build --json', {
      encoding: 'utf-8',
    }),
  ).join(',');

  console.log(`Excluding projects: ${excludedProjects}`);

  // Run nx run-many with exclusions
  const command = `nx run-many --all --exclude=${excludedProjects} --target=build --skip-nx-cache`;
  execSync(command, { stdio: 'inherit', shell: true });
} catch (error) {
  console.error('Error fetching excluded projects:', error);
  process.exit(1);
}
