const path = require('path'),
  fs = require('fs');

function fromDir(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback);
    } else if (filter.test(filename)) callback(filename);
  }
}

function updateVersionInFile(filePath) {
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = false;
  const peerDependencies = content.peerDependencies;
  if (peerDependencies) {
    const dependencies = Object.keys(peerDependencies);
    dependencies.forEach((dependency) => {
      if (dependency.includes('@cdx/')) {
        peerDependencies[dependency] = content.version;
        updated = true;
      }
    });
  }
  if (updated) {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  }
}

fromDir('./packages', /package.json$/, function (filename) {
  updateVersionInFile(filename);
});
