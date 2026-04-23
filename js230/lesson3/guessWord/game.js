class Game {
  static MAX_INCORRECT_GUESSES = 6;
  static words = ['apple', 'banana', 'orange', 'pear'];

  static getRandomWord() {
    if (Game.words.length === 0) return undefined;
    const wordIndex = Math.floor(Math.random() * Game.words.length);
    return Game.words.splice(wordIndex, 1)[0];
  }

  static notALetter(letter) {
    return letter < 'a' || letter > 'z';
  }
  
  constructor() {
    this.word = Game.getRandomWord();
    if (!this.word) throw new Error('No more words!');
    this.word = this.word.split('');
    this.lettersGuessed = [];
    this.incorrectGuesses = 0;
    this.spaces = Array(this.word.length).fill('');
    this.isWon = false;
    this.isLost = false;
  }

  #playerHasWon() {
    return this.spaces.join('') === this.word.join('');
  }

  #playerHasLost() {
    return this.incorrectGuesses === Game.MAX_INCORRECT_GUESSES;
  }

  makeGuess(letter) {
    letter = letter.toLowerCase();
    if (Game.notALetter(letter)) return;
    if (this.lettersGuessed.includes(letter)) return;
    this.lettersGuessed.push(letter);

    if (this.word.includes(letter)) {
      this.word.forEach((char, idx) => {
        if (char === letter) {
          this.spaces.splice(idx, 1, char);
        }
      })
    } else {
      this.incorrectGuesses += 1;
    }

    if (this.#playerHasWon()) {
      this.isWon = true;
    } else if (this.#playerHasLost()) {
      this.isLost = true;
    }
  }
}

document.addEventListener('DOMContentLoaded', e => {
  let playAgain = document.getElementById('replay');
  playAgain.parentElement.hidden = true;
  let game = new Game();
  let applesContainer = document.getElementById('apples');
  let spacesContainer = document.getElementById('spaces');
  let guessesContainer = document.getElementById('guesses');
  let message = document.getElementById('message');

  function renderSpaces() {
    spacesContainer.innerHTML = `<h2>Word:</h2>` + game.spaces
      .map(char => `<span>${char}</span>`)
      .join('');
  }

  function renderGuesses() {
    guessesContainer.innerHTML = `<h2>Guesses:</h2>` + game.lettersGuessed
      .map(letter => `<span>${letter}</span>`)
      .join('');
  }

  function handleGameEnd() {
    if (game.isWon || game.isLost) {
      playAgain.parentElement.hidden = false;

      if (game.isWon) {
        message.textContent = 'Congratulations, you win!';
        document.body.classList.add('win');
      } else if (game.isLost) {
        message.textContent = 'Sorry, you lose!'
        document.body.classList.add('lose');
      }

      document.removeEventListener('keyup', keyupEvent);
    }
  }

  function keyupEvent(e) {
    if (e.key >= 'a' && e.key <= 'z') {
      game.makeGuess(e.key);
      renderSpaces();
      renderGuesses();

      if (!game.word.includes(e.key)) {
        applesContainer.classList.add(`guess_${game.incorrectGuesses}`);
      }
    }

    handleGameEnd();
  }

  renderSpaces();
  message.textContent = 'Guess the word! Type a letter to make a guess.';
  
  document.addEventListener('keyup', keyupEvent);

  playAgain.addEventListener('click', e => {
    e.preventDefault();

    try {
      game = new Game();

      renderSpaces();
      renderGuesses();
  
      message.textContent = 'Guess the word! Type a letter to make a guess.';
      playAgain.parentElement.hidden = true;
      applesContainer.className = '';
      document.body.className = '';
  
      document.addEventListener('keyup', keyupEvent);
    } catch (e) {
      message.textContent = e.message;
    }
  })
})


