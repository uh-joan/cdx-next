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
      const npmrcContent = fs.readFileSync(npmrcPath, 'utf-8');

      const requiredLine =
        '@cdx:registry = https://repo.clarivate.io/artifactory/api/npm/npm-central/';

      if (npmrcContent.includes(requiredLine)) {
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

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 📦 PACKAGES CHECK
// ============================
console.log(chalk.cyan.bold('📦 PACKAGES CHECK\n'));

const requiredPackages = [
  '@cdx/ngx-branding',
  '@cdx/theme-angular-material',
  '@angular/material',
];

function checkPackageVersion(packageName, minVersion) {
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

    if (packageVersion >= minVersion) {
      console.log(
        chalk.green(
          `✅ ${packageName} (v${packageJson.version}) is installed and up-to-date.`,
        ),
      );
      return true;
    } else {
      console.log(
        chalk.yellow(
          `⚠️ ${packageName} (v${packageJson.version}) is outdated. Minimum required: ${minVersion}.`,
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
  .map((pkg) => checkPackageVersion(pkg, 18))
  .every((valid) => valid);

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 🎨 STYLES CHECK
// ============================
console.log(chalk.magenta.bold('🎨 STYLES CHECK (styles.scss)\n'));

let allStylesValid = true;
let allIndexValid = true;
let allModulesValid = true;
let allElementsValid = true;

function checkStyles() {
  const stylesPath = path.join(projectRoot, 'src', 'styles.scss');
  let themeClass = null;
  allStylesValid = true;

  if (fs.existsSync(stylesPath)) {
    try {
      let stylesContent = fs
        .readFileSync(stylesPath, 'utf8')
        .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');

      const checks = [
        {
          text: '@use "@cdx/ngx-branding/header/theme" as header;',
          message: 'Header theme import',
        },
        {
          text: '@use "@cdx/ngx-branding/footer/theme" as footer;',
          message: 'Footer theme import',
        },
        {
          text: '@include header.theme(hlx.$helix-theme);',
          message: 'Header theme applied',
        },
        {
          text: '@include footer.theme(hlx.$helix-theme);',
          message: 'Footer theme applied',
        },
      ];

      for (const check of checks) {
        if (stylesContent.includes(check.text)) {
          console.log(chalk.green(`✅ ${check.message}`));
        } else {
          console.log(chalk.red(`❌ ${check.message} is missing.`));
          allStylesValid = false;
        }
      }

      const themeMatch = stylesContent.match(
        /@include hlx\.default\(hlx\.\$helix-theme,\s*"([^"]+)"\);/,
      );
      if (themeMatch) {
        themeClass = themeMatch[1];
        console.log(chalk.green(`✅ Found theme class: ${themeClass}`));

        if (stylesContent.includes(`.${themeClass}`)) {
          console.log(chalk.green(`✅ ${themeClass} class is defined.`));
        } else {
          console.log(chalk.red(`❌ ${themeClass} class is missing.`));
          allStylesValid = false;
        }
      } else {
        console.log(chalk.red('❌ No @include hlx.default(...) found.'));
        allStylesValid = false;
      }
    } catch (error) {
      console.error(
        chalk.red(`❌ Error processing styles.scss: ${error.message}`),
      );
      allStylesValid = false;
    }
  } else {
    console.log(chalk.red('❌ styles.scss not found.'));
    allStylesValid = false;
  }
  return allStylesValid;
}

checkStyles();

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 📄 INDEX.HTML CHECK
// ============================
console.log(chalk.yellow.bold('📄 INDEX.HTML CHECK\n'));

function checkIndexHtml(themeClass) {
  const indexPath = path.join(projectRoot, 'src', 'index.html');
  allIndexValid = true;

  if (fs.existsSync(indexPath)) {
    try {
      let indexContent = fs
        .readFileSync(indexPath, 'utf8')
        .replace(/\s+/g, ' ');

      const checks = [
        {
          text: '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons',
          message: 'Material Icons',
        },
        {
          text: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3',
          message: 'Source Sans 3',
        },
        {
          text: '<link rel="stylesheet" href="https://cdn.digital-experience.clarivate.io/@cdx/clarivate-font/latest/clarivate-font.css"',
          message: 'Clarivate Font',
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

      const bodyMatch = indexContent.match(/<body class="([^"]+)">/);
      if (bodyMatch) {
        const bodyClasses = bodyMatch[1].split(' ');
        if (bodyClasses.includes('mat-typography')) {
          console.log(chalk.green('✅ mat-typography is present in <body>.'));
        } else {
          console.log(chalk.red('❌ mat-typography is missing in <body>.'));
          allIndexValid = false;
        }

        if (themeClass && bodyClasses.includes(themeClass)) {
          console.log(
            chalk.green(
              `✅ The theme class "${themeClass}" is applied to <body>.`,
            ),
          );
        } else if (themeClass) {
          console.log(
            chalk.red(
              `❌ The theme class "${themeClass}" is missing in <body>.`,
            ),
          );
          allIndexValid = false;
        }
      } else {
        console.log(chalk.red('❌ <body> tag not found in index.html.'));
        allIndexValid = false;
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

const stylesValid = checkStyles();
let themeClass = null;

if (stylesValid) {
  const stylesPath = path.join(projectRoot, 'src', 'styles.scss');
  let stylesContent = fs
    .readFileSync(stylesPath, 'utf8')
    .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');

  const themeMatch = stylesContent.match(
    /@include hlx\.default\(hlx\.\$helix-theme,\s*"([^"]+)"\);/,
  );
  if (themeMatch) {
    themeClass = themeMatch[1];
  }
}

checkIndexHtml(themeClass);

console.log(chalk.blue('\n---------------------------------\n'));

// ============================
// 📄 BRANDING CHECK
// ============================
console.log(chalk.magenta.bold('🖼️  BRANDING CHECK \n'));

function checkBranding() {
  const checkModules = () => {
    const sourcePath = path.join(projectRoot, 'src');
    allModulesValid = false;
    const modulesToCheck = ['HelixHeaderModule', 'HelixFooterModule'];

    const tsFiles = getFilesRecursive(sourcePath, '.ts');

    let foundHeader = false;
    let foundFooter = false;

    tsFiles.some((file) => {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        modulesToCheck.forEach((module) => {
          if (content.includes(module)) {
            console.log(chalk.green(`✅ Found ${module} in ${file}`));
            if (module === 'HelixHeaderModule') foundHeader = true;
            if (module === 'HelixFooterModule') foundFooter = true;
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
      allModulesValid = true;
    } else {
      console.log(chalk.red(`❌ One or both modules are missing`));
    }

    return allModulesValid;
  };

  const checkHtmlElements = () => {
    const htmlFiles = getFilesRecursive(path.join(projectRoot, 'src'), '.html');
    allElementsValid = false;
    let foundHeader = false;
    let foundFooter = false;

    const headerRegex = /<header[^>]*\s+hlx-header[^>]*>/i;
    const footerRegex = /<footer[^>]*\s+hlx-footer[^>]*>/i;

    htmlFiles.some((file) => {
      try {
        const content = fs.readFileSync(file, 'utf-8');

        if (!foundHeader && headerRegex.test(content)) {
          console.log(chalk.green(`✅ <header hlx-header> found in ${file}`));
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

  if (
    isNodeVersionValid &&
    isNpmrcValid &&
    areFilesValid &&
    allPackagesValid &&
    allStylesValid &&
    allIndexValid &&
    allModulesValid &&
    allElementsValid
  ) {
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
║   ❗ ${chalk.bold('WARNING: Issues detected! ')}    ║
╚════════════════════════════════════╝
`),
    );
    console.log(chalk.cyanBright('Check log and review setup.   \n '));
    console.log(chalk.cyanBright('For additional information, visit:\n '));
    console.log(
      chalk.underline(
        'https://design-lsh.clarivate.io/development/quick-start-new-project\n',
      ),
    );
  }

  console.log(chalk.green('=================================\n'));
}

displayFinalSummary();
