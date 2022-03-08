const fs = require('fs');
const randomNumber = String(Math.random() * 10);

fs.writeFile('random.txt', randomNumber, err => {
  if (err) {
    throw err;
  }
});
