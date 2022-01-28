/*
************************************************
Global Variables
************************************************
*/
var index = 0;
var intervalId = setInterval(changeNextPokemon, 3000);

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
function changeNextPokemon(event) {
  $pokemon[index].classList.add('hidden');
  $progress[index].classList.replace('fas', 'far');
  if (index < $pokemon.length - 1) {
    index++;
  } else {
    index = 0;
  }
  $pokemon[index].classList.remove('hidden');
  $progress[index].classList.replace('far', 'fas');
}

function stopStartInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(changeNextPokemon, 3000);
}

/*
************************************************
Event Listener Handlers
************************************************
*/
function handleNext(event) {
  changeNextPokemon();
  stopStartInterval();
}

function handlePrevious(event) {
  $pokemon[index].classList.add('hidden');
  $progress[index].classList.replace('fas', 'far');
  if (index > 0) {
    index--;
  } else {
    index = $pokemon.length - 1;
  }
  $pokemon[index].classList.remove('hidden');
  $progress[index].classList.replace('far', 'fas');
  stopStartInterval();
}

function handleProgress(event) {
  if (event.target && event.target.matches('.progress')) {
    var progressIndex = [...$progress].findIndex(
      element => event.target === element
    );
    $pokemon[index].classList.add('hidden');
    $progress[index].classList.replace('fas', 'far');
    index = progressIndex;
    $pokemon[index].classList.remove('hidden');
    $progress[index].classList.replace('far', 'fas');
    stopStartInterval();
  }
}

/*
************************************************
Event Listners
************************************************
*/
$next.addEventListener('click', handleNext);
$previous.addEventListener('click', handlePrevious);
$progressContainer.addEventListener('click', handleProgress);
