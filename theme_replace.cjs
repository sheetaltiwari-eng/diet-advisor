const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return;
  }
  
  files.forEach(f => {
    let dirPath = path.join(dir, f);
    let stat;
    try {
      stat = fs.statSync(dirPath);
    } catch (e) {
      return;
    }
    
    let isDirectory = stat.isDirectory();
    if (isDirectory && !dirPath.includes('node_modules') && !dirPath.includes('.git') && !dirPath.includes('backend') && !dirPath.includes('tmp') && !dirPath.includes('assets')) {
      walkDir(dirPath, callback);
    } else if (!isDirectory) {
      if (f.endsWith('.css') || f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.html')) {
        callback(dirPath);
      }
    }
  });
}

const dirToWalk = path.resolve(__dirname);
console.log('Walking directory:', dirToWalk);

walkDir(dirToWalk, function(filePath) {
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    return;
  }
  
  let original = content;
  
  // Replace colors
  content = content.replace(/#10b981/ig, '#ec4899');
  content = content.replace(/#059669/ig, '#db2777');
  content = content.replace(/16,\s*185,\s*129/g, '236, 72, 153');
  content = content.replace(/#34d399/ig, '#f472b6');
  content = content.replace(/#bbf7d0/ig, '#fbcfe8');
  content = content.replace(/Emerald green/ig, 'Pink');

  if (content !== original) {
    try {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated', filePath);
    } catch (e) {
      console.log('Failed to write', filePath, e.message);
    }
  }
});
console.log('Done');
