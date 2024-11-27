var fs = require('fs');
var path = require('path');

var srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  var files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

function extractImports(filePath) {
  var fileContent = fs.readFileSync(filePath, 'utf8');
  var importRegex = /import\s+.*\s+from\s+['"].*['"]/g;
  return fileContent.match(importRegex) || [];
}

var allFiles = getAllFiles(srcDir);
var allImports = new Set();

files.forEach(function (file) {
  if (file.endsWith('.ts')) {
    var imports = extractImports(file);
    imports.forEach(function (imp) {
      allImports.add(imp);
    });
  }
});

console.log('All imports used in the project:');
allImports.forEach(function (imp) {
  console.log(imp);
});
