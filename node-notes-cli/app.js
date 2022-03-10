const fs = require('fs');
const data = require('./data.json');

if (process.argv[2] === 'read') {
  let entries = Object.entries(data.notes);
  entries = entries.map(entry => {
    entry = `${entry[0]}: ${entry[1]}`;
    return entry;
  });
  console.log(entries.join('\n'));
}

if (process.argv.length === 4 && process.argv[2] === 'create') {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      throw err;
    }
  });
}

if (process.argv[2] === 'delete') {
  delete data.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      throw err;
    }
  });
}

if (process.argv.length === 5 && process.argv[2] === 'update') {
  if (process.argv[3] in data.notes) {
    data.notes[process.argv[3]] = process.argv[4];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        throw err;
      }
    });
  }
}
