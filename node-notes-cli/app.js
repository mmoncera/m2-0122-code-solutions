const fs = require('fs');
const data = require('./data.json');

const writeData = () => {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      throw err;
    }
  });
};

if (process.argv[2] === 'read') {
  const entries = Object.entries(data.notes);
  entries.forEach(entry => console.log(`${entry[0]}: ${entry[1]}`));
}

if (process.argv.length === 4 && process.argv[2] === 'create') {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  writeData();
}

if (process.argv[2] === 'delete') {
  delete data.notes[process.argv[3]];
  writeData();
}

if (process.argv.length === 5 && process.argv[2] === 'update') {
  if (process.argv[3] in data.notes) {
    data.notes[process.argv[3]] = process.argv[4];
    writeData();
  }
}
