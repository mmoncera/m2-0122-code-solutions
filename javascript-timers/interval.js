var $countdownDisplay = document.querySelector('.countdown-display');
var count = 4;
var intervalId = setInterval(countdown, 1000);

function countdown() {
  count--;
  $countdownDisplay.textContent = count;
  if (count === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
