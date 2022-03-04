const fs = require('fs');

const files = process.argv.slice(2);

files.forEach(file => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
});
