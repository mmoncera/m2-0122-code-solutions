/*
************************************************
Global Variables
************************************************
*/
var index = 0;
var intervalId = setInterval(() => changePokemon('next'), 3000);

/*
************************************************
DOM Nodes
************************************************
*/
var $pokemon = document.querySelectorAll('.pokemon');
var $previous = document.querySelector('.previous');
var $next = document.querySelector('.next');
var $progress = document.querySelectorAll('.progress');
var $progressContainer = document.querySelector('.progress-container');

/*
************************************************
Utility Functions
************************************************
*/
function changePokemon(view, event) {
  $pokemon[index].classList.add('hidden');
  $progress[index].classList.replace('fas', 'far');
  if (view === 'previous') {
    if (index > 0) {
      index--;
    } else {
      index = $pokemon.length - 1;
    }
  } else if (view === 'next') {
    if (index < $pokemon.length - 1) {
      index++;
    } else {
      index = 0;
    }
  } else if (view === 'progress') {
    var progressIndex = [...$progress].findIndex(
      element => event.target === element
    );
    index = progressIndex;
  }
  $pokemon[index].classList.remove('hidden');
  $progress[index].classList.replace('far', 'fas');
}

function stopStartInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => changePokemon('next'), 3000);
}

/*
************************************************
Event Listener Handlers
************************************************
*/

function handlePrevious(event) {
  changePokemon('previous');
  stopStartInterval();
}

function handleNext(event) {
  changePokemon('next');
  stopStartInterval();
}

function handleProgress(event) {
  if (!event.target.matches('.progress')) {
    return;
  }
  changePokemon('progress', event);
  stopStartInterval();
}

/*
************************************************
Event Listners
************************************************
*/
$previous.addEventListener('click', handlePrevious);
$next.addEventListener('click', handleNext);
$progressContainer.addEventListener('click', handleProgress);
