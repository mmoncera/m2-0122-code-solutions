let count = 3;

var intervalId = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(intervalId);
  } else {
    console.log(count);
  }
  count--;
}, 1000);
