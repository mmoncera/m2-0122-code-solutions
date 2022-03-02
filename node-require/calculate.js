const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operation = {
  plus: add,
  minus: subtract,
  times: multiply,
  over: divide
};

if (process.argv.length === 5) {
  const a = +process.argv[2];
  const b = +process.argv[4];
  console.log(`result: ${operation[process.argv[3]](a, b)}`);
}
