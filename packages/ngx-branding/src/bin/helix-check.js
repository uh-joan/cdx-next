#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

console.log(
  chalk.blueBright(`
  ╔════════════════════════════════╗
  ║    ${chalk.cyanBright('🛠️  HELIX DIAGNOSTIC TOOL')}    ║
  ╚════════════════════════════════╝
  `),
);
// ============================
// 🌍 ENVIRONMENT CHECK
// ============================
console.log(chalk.cyan.bold('🌍 ENVIRONMENT CHECK\n'));

const projectRoot = process.cwd();

function checkNodeVersion() {
  function compareVersions(current, min) {
    const currentParts = current
      .slice(1)
      .split('.')
      .map((num) => parseInt(num, 10));
    const minParts = min
      .slice(1)
      .split('.')
      .map((num) => parseInt(num, 10));

    for (let i = 0; i < 3; i++) {
      if (currentParts[i] < minParts[i]) {
        return false;
      }
      if (currentParts[i] > minParts[i]) {
        return true;
      }
    }

    return true;
  }
  const currentVersion = process.version;
  const minVersion = 'v18.19.0';

  const isVersionValid = compareVersions(currentVersion, minVersion);

  if (isVersionValid) {
    console.log(chalk.green(`✅ Node version is ${currentVersion}`));
  } else {
    console.log(
      chalk.red(
        `❌ Node version is ${currentVersion}. Minimum required: ${minVersion}.`,
      ),
    );
  }

  return isVersionValid;
}

function checkNpmrc() {
  const npmrcPath = path.join(projectRoot, '.npmrc');

  if (fs.existsSync(npmrcPath)) {
    try {
      let npmrcContent = fs.readFileSync(npmrcPath, 'utf-8');

      npmrcContent = npmrcContent.replace(/http:\/\//g, 'https://');

      const requiredPattern =
        /^\s*@cdx:registry\s*=\s*https:\/\/repo\.clarivate\.io\/artifactory\/api\/npm\/npm-central\/\s*$/m;

      if (requiredPattern.test(npmrcContent)) {
        console.log(chalk.green(`✅ .npmrc file registry`));
        return true;
      } else {
        console.log(
          chalk.red(`❌ .npmrc file does not contain the right content.`),
        );
        return false;
      }
    } catch (readError) {
      console.error(
        chalk.red(`❌ Error reading .npmrc file: ${readError.message}`),
      );
      return false;
    }
  } else {
    console.log(chalk.red(`❌ .npmrc file not found.`));
    return false;
  }
}

function checkProjectFiles() {
  const angularJsonPath = path.join(projectRoot, 'angular.json');
  const packageJsonPath = path.join(projectRoot, 'package.json');

  let filesValid = true;

  if (fs.existsSync(angularJsonPath)) {
    console.log(chalk.green(`✅ angular.json file found.`));
  } else {
    console.log(chalk.red(`❌ angular.json file not found.`));
    filesValid = false;
  }

  if (fs.existsSync(packageJsonPath)) {
    console.log(chalk.green(`✅ package.json file found.`));
  } else {
    console.log(chalk.red(`❌ package.json file not found.`));
    filesValid = false;
  }

  return filesValid;
}

const isNodeVersionValid = checkNodeVersion();
const isNpmrcValid = checkNpmrc();
const areFilesValid = checkProjectFiles();

const isEnvironmentValid = isNodeVersionValid && isNpmrcValid && areFilesValid;

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 📦 PACKAGES CHECK
// ============================
console.log(chalk.cyan.bold('📦 PACKAGES CHECK\n'));

const requiredPackages = [
  '@hlx/ngx-branding',
  '@hlx/theme-angular-material',
  '@angular/material',
];

const HELIX_MAJOR_VERSION = 22;

function checkPackageVersion(packageName, hlxVersion) {
  const packagePath = path.join(
    projectRoot,
    'node_modules',
    ...packageName.split('/'),
    'package.json',
  );

  if (!fs.existsSync(packagePath)) {
    console.log(chalk.red(`❌ ${packageName} is missing.`));
    return false;
  }

  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const packageVersion = parseInt(packageJson.version.split('.')[0], 10);

    if (packageVersion === hlxVersion) {
      console.log(
        chalk.green(
          `✅ ${packageName} (v${packageJson.version}) is installed and up-to-date.`,
        ),
      );
      return true;
    } else {
      console.log(
        chalk.yellow(
          `⚠️ ${packageName} (v${packageJson.version}) is incorrect. Version required: ${hlxVersion}.`,
        ),
      );
      return false;
    }
  } catch (error) {
    console.error(
      chalk.red(`❌ Error processing ${packageName}: ${error.message}`),
    );
    return false;
  }
}

const allPackagesValid = requiredPackages
  .map((pkg) => checkPackageVersion(pkg, HELIX_MAJOR_VERSION))
  .every((valid) => valid);

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 🎨 THEME CHECK
// ============================
console.log(chalk.magenta.bold('🎨 THEME CHECK (styles.scss)\n'));

function getFilesRecursive(dir, ext) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      file = path.join(dir, file);
      try {
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
          results = results.concat(getFilesRecursive(file, ext));
        } else if (file.endsWith(ext)) {
          results.push(file);
        }
      } catch (error) {
        console.error(
          chalk.red(`❌ Error processing file: ${file}, ${error.message}`),
        );
      }
    });
  } catch (error) {
    console.error(
      chalk.red(`❌ Error reading directory: ${dir}, ${error.message}`),
    );
  }
  return results;
}

function checkThemeClass(scssFiles, htmlFiles) {
  const themeRegex =
    /@include\s+[^(]+\.default\s*\([^,]+,\s*["']([^"']+)["']\s*\)/;

  let themeClass = null;

  scssFiles.some((file) => {
    try {
      const content = fs
        .readFileSync(file, 'utf8')
        .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
      const match = content.match(themeRegex);
      if (match) {
        themeClass = match[1];
        console.log(
          chalk.green(`✅ Found theme class '${themeClass}' in ${file}`),
        );
        return true;
      }
    } catch (error) {
      console.error(
        chalk.red(`❌ Error reading file: ${file}, ${error.message}`),
      );
    }
    return false;
  });

  if (!themeClass) {
    console.log(chalk.red('❌ No default theme class found in any SCSS file.'));
    return false;
  }

  let foundOverrides = false;
  let foundInBody = false;
  const classRegex = new RegExp(`\\.${themeClass}\\s*{([^}]*)}`, 's');

  scssFiles.forEach((file) => {
    try {
      const content = fs
        .readFileSync(file, 'utf8')
        .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
      const classMatch = content.match(classRegex);

      if (classMatch && classMatch[1].includes('theme-helix-overrides')) {
        console.log(
          chalk.green(
            `✅ '${themeClass}' includes 'theme-helix-overrides' in ${file}`,
          ),
        );
        foundOverrides = true;
      }
    } catch (error) {
      console.error(
        chalk.red(`❌ Error reading file: ${file}, ${error.message}`),
      );
    }
  });

  const bodyRegex = new RegExp(`<body[^>]*class=["']([^"']*)["']`, 's');

  htmlFiles.some((file) => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const match = content.match(bodyRegex);

      if (match) {
        const classAttr = match[1];
        if (
          classAttr.includes(themeClass) &&
          classAttr.includes('mat-typography')
        ) {
          console.log(
            chalk.green(
              `✅ '${themeClass}' and 'mat-typography' are applied to <body> in ${file}`,
            ),
          );
          foundInBody = true;
          return true;
        } else {
          console.log(
            chalk.yellow(`⚠ Found <body> class in ${file}: "${classAttr}"`),
          );
        }
      }
    } catch (error) {
      console.error(
        chalk.red(`❌ Error reading file: ${file}, ${error.message}`),
      );
    }
    return false;
  });

  if (!foundOverrides) {
    console.log(
      chalk.red(
        `❌ '${themeClass}' does not include 'theme-helix-overrides' in any SCSS file.`,
      ),
    );
  }

  if (!foundInBody) {
    console.log(
      chalk.red(
        `❌ '${themeClass}' or 'mat-typography' is missing from the <body> in HTML files.`,
      ),
    );
  }

  return foundOverrides && foundInBody;
}

function checkClarivateFont(scssFiles) {
  // The Clarivate brand font is bundled by importing @hlx/clarivate-font's CSS
  // from an SCSS entry (no CDN <link> any more).
  const importRegex = /@(?:import|use)\s+["']@hlx\/clarivate-font/;
  const found = scssFiles.some((file) => {
    try {
      return importRegex.test(fs.readFileSync(file, 'utf8'));
    } catch {
      return false;
    }
  });

  if (found) {
    console.log(
      chalk.green("✅ Clarivate Font is bundled from '@hlx/clarivate-font'."),
    );
  } else {
    console.log(
      chalk.red(
        "❌ Clarivate Font is missing. Add `@import '@hlx/clarivate-font/css/clarivate-font.css';` to your styles.scss.",
      ),
    );
  }
  return found;
}

function checkStyles() {
  const scssFiles = getFilesRecursive(path.join(projectRoot, 'src'), '.scss');
  const htmlFiles = getFilesRecursive(path.join(projectRoot, 'src'), '.html');

  const themeValid = checkThemeClass(scssFiles, htmlFiles);
  const fontValid = checkClarivateFont(scssFiles);
  return themeValid && fontValid;
}

const stylesValid = checkStyles();

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 📄 INDEX.HTML CHECK
// ============================

let allIndexValid = true;
console.log(chalk.yellow.bold('📄 INDEX.HTML CHECK\n'));

function checkIndexHtml() {
  const indexPath = path.join(projectRoot, 'src', 'index.html');
  allIndexValid = true;

  if (fs.existsSync(indexPath)) {
    try {
      const indexContent = fs
        .readFileSync(indexPath, 'utf8')
        .replace(/\s+/g, ' ');

      const checks = [
        {
          text: 'https://fonts.googleapis.com/css?family=Material+Icons',
          message: 'Material Icons',
        },
        {
          text: 'https://fonts.googleapis.com/css2?family=Source+Sans+3',
          message: 'Source Sans 3',
        },
      ];

      for (const check of checks) {
        if (indexContent.includes(check.text)) {
          console.log(chalk.green(`✅ ${check.message} is included.`));
        } else {
          console.log(chalk.red(`❌ ${check.message} is missing.`));
          allIndexValid = false;
        }
      }

      if (indexContent.includes('Source+Sans+Pro')) {
        console.log(
          chalk.yellow(
            `⚠️  Source Sans Pro is not part of Helix used fonts. Consider removing it.`,
          ),
        );
      }
    } catch (error) {
      console.error(chalk.red(`❌ Error reading index.html: ${error.message}`));
      allIndexValid = false;
    }
  } else {
    console.log(chalk.red('❌ index.html not found.'));
    allIndexValid = false;
  }
  return allIndexValid;
}

checkIndexHtml();

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 📄 BRANDING CHECK
// ============================

let allModulesValid = true;
let allElementsValid = true;

console.log(chalk.magenta.bold('🖼️  BRANDING CHECK \n'));

function checkBranding() {
  function checkModules() {
    const sourcePath = path.join(projectRoot, 'src');
    let allModulesValid = false;
    const modulesToCheck = [
      'HelixHeaderComponent',
      'HeaderComponent',
      'HelixFooterComponent',
    ];

    const tsFiles = getFilesRecursive(sourcePath, '.ts');

    let foundHeader = false;
    let foundFooter = false;

    tsFiles.some((file) => {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        modulesToCheck.forEach((module) => {
          if (content.includes(module)) {
            if (
              module === 'HelixHeaderComponent' ||
              module === 'HeaderComponent'
            ) {
              foundHeader = true;
            }
            if (module === 'HelixFooterComponent') {
              foundFooter = true;
            }
          }
        });
      } catch (error) {
        console.error(
          chalk.red(`❌ Error reading file: ${file}, ${error.message}`),
        );
      }
      return foundHeader && foundFooter;
    });

    if (foundHeader && foundFooter) {
      console.log(chalk.green('✅ Found both Header and Footer Components'));
      allModulesValid = true;
    } else {
      console.log(chalk.red('❌ One or both components are missing'));
    }

    return allModulesValid;
  }

  const checkHtmlElements = () => {
    const htmlFiles = getFilesRecursive(path.join(projectRoot, 'src'), '.html');
    allElementsValid = false;
    let foundHeader = false;
    let foundFooter = false;

    const headerRegex = /<header[^>]*\s+(hlx-header|cdx-header)[^>]*>/i;
    const footerRegex = /<footer[^>]*\s+hlx-footer[^>]*>/i;

    htmlFiles.some((file) => {
      try {
        const content = fs.readFileSync(file, 'utf-8');

        if (!foundHeader && headerRegex.test(content)) {
          console.log(
            chalk.green(
              `✅ <header hlx-header> or <header cdx-header> found in ${file}`,
            ),
          );
          foundHeader = true;
        }

        if (!foundFooter && footerRegex.test(content)) {
          console.log(chalk.green(`✅ <footer hlx-footer> found in ${file}`));
          foundFooter = true;
        }
      } catch (error) {
        console.error(
          chalk.red(`❌ Error reading file: ${file}, ${error.message}`),
        );
      }
      return foundHeader && foundFooter;
    });

    if (foundHeader && foundFooter) {
      allElementsValid = true;
    } else {
      console.log(chalk.red(`❌ One or both HTML elements are missing`));
    }

    return allElementsValid;
  };

  const getFilesRecursive = (dir, ext) => {
    let results = [];
    try {
      const list = fs.readdirSync(dir);
      list.forEach((file) => {
        file = path.join(dir, file);
        try {
          const stat = fs.statSync(file);
          if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursive(file, ext));
          } else if (file.endsWith(ext)) {
            results.push(file);
          }
        } catch (error) {
          console.error(
            chalk.red(`❌ Error processing file: ${file}, ${error.message}`),
          );
        }
      });
    } catch (error) {
      console.error(
        chalk.red(`❌ Error reading directory: ${dir}, ${error.message}`),
      );
    }
    return results;
  };

  allModulesValid = checkModules();
  allElementsValid = checkHtmlElements();

  return allModulesValid && allElementsValid;
}

checkBranding();

// ============================
// 🏁 FINAL SUMMARY
// ============================

function displayFinalSummary() {
  console.log(chalk.green('\n================================='));

  const issueMessages = [];

  if (!isEnvironmentValid) {
    issueMessages.push(
      `❌ ${chalk.yellow('Environment checks failed.')}\n   ${chalk.underline(
        'https://design-lsh.clarivate.io/development/quick-start-new-project#environment',
      )}`,
    );
  }

  if (!allPackagesValid) {
    issueMessages.push(
      `❌ ${chalk.yellow('Package checks failed.')}\n   ${chalk.underline(
        'https://design-lsh.clarivate.io/development/quick-start-new-project#packages',
      )}`,
    );
  }

  if (!stylesValid) {
    issueMessages.push(
      `❌ ${chalk.yellow('Theme checks failed.')}\n   ${chalk.underline(
        'https://design-lsh.clarivate.io/development/quick-start-new-project#styles',
      )}`,
    );
  }

  if (!allIndexValid) {
    issueMessages.push(
      `❌ ${chalk.yellow('Resource checks failed.')}\n   ${chalk.underline(
        'https://design-lsh.clarivate.io/development/quick-start-new-project#assets',
      )}`,
    );
  }

  if (!allModulesValid) {
    issueMessages.push(
      `❌ ${chalk.yellow(
        'Branding module checks failed.',
      )}\n   ${chalk.underline(
        'https://design-lsh.clarivate.io/development/quick-start-new-project#branding',
      )}`,
    );
  }

  if (!allElementsValid) {
    issueMessages.push(
      `❌ ${chalk.yellow(
        'Branding element checks failed.',
      )}\n   ${chalk.underline(
        'https://design-lsh.clarivate.io/development/quick-start-new-project#branding',
      )}`,
    );
  }

  if (issueMessages.length === 0) {
    console.log(
      chalk.green.bold(`
╔════════════════════════════════════╗
║   ✅ ${chalk.bold('SUCCESS: All checks passed!')}   ║
║   Everything is correctly set up.  ║
╚════════════════════════════════════╝
`),
    );
  } else {
    console.log(
      chalk.yellow.bold(`
╔════════════════════════════════════╗
║   ❗ ${chalk.bold('WARNING: Issues detected!')}     ║
╚════════════════════════════════════╝
`),
    );
    console.log(chalk.cyanBright('Check the log and review setup:\n'));
    issueMessages.forEach((message) => console.log(message + '\n'));
  }

  console.log(chalk.green('\n=================================\n'));
}

displayFinalSummary();
