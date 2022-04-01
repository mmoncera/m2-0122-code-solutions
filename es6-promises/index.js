const takeAChance = require('./take-a-chance');

const takeAChancePromise = takeAChance('Mike');

takeAChancePromise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.error(error);
  });
