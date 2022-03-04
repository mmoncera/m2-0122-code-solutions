const fs = require('fs');

const files = process.argv.slice(2);
const readFiles = [];

files.forEach((file, i) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    readFiles[i] = data;
    if (readFiles.length === files.length && !readFiles.includes(undefined)) {
      console.log(readFiles.join('\n'));
    }
  });
});
