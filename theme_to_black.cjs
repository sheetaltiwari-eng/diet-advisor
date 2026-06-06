const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  let files = fs.readdirSync(dir);
  for (let f of files) {
    let dirPath = path.join(dir, f);
    let stat = fs.statSync(dirPath);
    if (stat.isDirectory()) {
      if (!dirPath.includes('node_modules') && !dirPath.includes('.git') && f !== 'assets' && f !== 'backend' && f !== 'tmp') {
        walkDir(dirPath);
      }
    } else {
      if (f.endsWith('.css') || f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.html')) {
        let content = fs.readFileSync(dirPath, 'utf-8');
        let original = content;
        content = content.replace(/#ec4899/ig, '#171717');
        content = content.replace(/#db2777/ig, '#0a0a0a');
        content = content.replace(/236,\s*72,\s*153/g, '23, 23, 23');
        content = content.replace(/#f472b6/ig, '#737373');
        content = content.replace(/#fbcfe8/ig, '#e5e5e5');
        content = content.replace(/Pink/ig, 'Black');
        if (content !== original) {
          fs.writeFileSync(dirPath, content, 'utf-8');
          console.log('Updated:', dirPath);
        }
      }
    }
  }
}

walkDir(__dirname);
console.log('Done replacement');
