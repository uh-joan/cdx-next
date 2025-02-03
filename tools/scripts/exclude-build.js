const { execSync } = require('child_process');

try {
  // Get projects with the specific tag
  const excludedProjects = execSync(
    'nx show projects -p tag:exclude-from-build',
    { encoding: 'utf-8' },
  )
    .split('\n') // Convert to array
    .map((p) => p.trim()) // Trim whitespace
    .filter((p) => p) // Remove empty lines
    .join(','); // Convert to comma-separated string

  console.log(`Excluding projects: ${excludedProjects}`);

  // Run nx run-many with exclusions
  const command = `nx run-many --all --exclude=${excludedProjects} --target=build --skip-nx-cache`;
  execSync(command, { stdio: 'inherit', shell: true });
} catch (error) {
  console.error('Error fetching excluded projects:', error);
  process.exit(1);
}
