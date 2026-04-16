document.addEventListener('DOMContentLoaded', (event) => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let paragraph = document.querySelector('p');
  let button = form.querySelector('fieldset').lastElementChild;
  let guesses;
  let answer;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    button.disabled = false;
    button.style.background = 'linear-gradient(to bottom, #CC183E 0%, #780E24 100%)';
    button.style.boxShadow = '0 0 1px 1px #780e24';
    form.reset();
  }

  function isValid(number) {
    if (number <= 0 || Number.isNaN(number)) {
      paragraph.textContent = 'Guess is invalid. Guess a number from 1 to 100';
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let guess = parseInt(input.value, 10);
    let message;

    guesses += 1;

    if (guess > answer) message = `The answer is lower than ${guess}`;
    else if (guess < answer) message = `The answer is higher than ${guess}`;
    else {
      message = `Correct!  Number of guesses: ${guesses}`
      button.disabled = true;
      button.style.background = 'gray';
      button.style.boxShadow = 'none';
    };

    paragraph.textContent = message;
  });

  let link = document.querySelector('a');
  link.addEventListener('click', (event) => {
    event.preventDefault();
    newGame();
  });

  newGame();
})