const READLINE_SYNC = require('readline-sync');

class Square {
  static INITIAL_MARKER = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "0";

  constructor(marker=Square.INITIAL_MARKER) {
    this._marker = marker;
  }

  get marker() {
    return this._marker;
  }

  set marker(newMarker) {
    return this._marker = newMarker;
  }

  isUnused() {
    return this.marker === Square.INITIAL_MARKER;
  }

  toString() {
    return this.marker;
  }
}


class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};

    for (let key = 1; key < 10; key += 1) {
      this.squares[key] = new Square();
    }

    return this.squares;
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].marker = marker;
  }

  /*
  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }
  */

  unusedSquares() {
    return Object.keys(this.squares).filter(key => {
      const square = this.squares[key];
      return square.isUnused();
    });
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    const markers = [];

    for (let key of keys) {
      markers.push(this.squares[key].marker)
    }

    return markers.filter(marker => marker === player.marker).length;
  }

  displayWithClear() {
    console.clear();
    console.log();
    console.log();
    this.display();
  }
}


class Player {
  constructor(marker, isPlayingFirst=false) {
    this._marker = marker;
    this._score = 0;
    this._isPlayingFirst = isPlayingFirst;
  }

  get marker() {
    return this._marker;
  }

  set marker(newMarker) {
    return this._marker = newMarker;
  }

  get score() {
    return this._score;
  }

  set score(newScore) {
    return this._score = newScore;
  }

  get isPlayingFirst() {
    return this._isPlayingFirst;
  }

  set isPlayingFirst(value) {
    return this._isPlayingFirst = value;
  }

  incrementScore() {
    this.score += 1;
  }

  activateTurnState() {
    this.isPlayingFirst = true;
  }

  deactivateTurnState() {
    this.isPlayingFirst = false;
  }

  toString() {
    return this.constructor.name;
  }
}


class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER, true);
  }
}


class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}


class TTTGame {
  static MATCH_GOAL = 3;
  static POSSIBLE_WINNING_ROWS = [
    [1, 2, 3],  // # top row of board
    [4, 5, 6],  // # center row of board
    [7, 8, 9],  // # bottom row of board
    [1, 4, 7],  // # left column of board
    [2, 5, 8],  // # middle column of board
    [3, 6, 9],  // # right column of board
    [1, 5, 9],  // # diagonal: top-left to bottom-right
    [3, 5, 7],  // # diagonal: top-right to bottom-left
  ]

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = this.human;
    this.secondPlayer = this.computer;
  }

  static #joinOr(choicesList, seperator=', ', conjunction='or') {
    if (choicesList.length === 1) return choicesList[0];
    if (choicesList.length === 2) {
      return `${choicesList[0]} ${conjunction} ${choicesList[1]}`
    }

    const arrForJoining = [];

    for (let i = 0; i < choicesList.length; i += 1) {
      const item = choicesList[i];
      if (i === choicesList.length - 1) {
        arrForJoining.push(`${conjunction} ${item}`);
      } else {
        arrForJoining.push(`${item}${seperator}`);
      }
    }

    return arrForJoining.join('');
  }

  static #playAgain() {
    console.log();
    console.log('Play again? (y/n)');
    READLINE_SYNC.setPrompt('User answer >>> ');
    let userInput;

    while (true) {
      userInput = READLINE_SYNC.prompt();
      if (['y', 'n', 'Y', 'N'].includes(userInput)) {
        break;
      }

      console.log("Please enter a valid choice: (y/n)");
    }
    
    console.clear();
    return userInput === 'y';
  }

  playOneGame() {
    this.board.reset();
    this.board.display();

    while (true) {
      this.displayInitialFirstPlayer();
      this.processFirstTurn();

      if(this.isGameOver()) {
        this.updateScore();
        break;
      }

      this.board.displayWithClear();

      this.displayInitialSecondPlayer();
      this.processSecondTurn();

      if (this.isGameOver()) {
        this.updateScore();
        break;
      }

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayScore();
    this.displayResults();
  }

  playMatch() {
    console.log(`'Win ${TTTGame.MATCH_GOAL} games to win the MATCH!'`);

    while (true) {
      this.playOneGame();
      if (this.matchWon() || !TTTGame.#playAgain()) {
        break;
      }

      this.alternateGameStartingPlayer();
      console.log("Let's play again!");
      console.log();
    }

    this.displayMatchResults();
  }

  play() {
    this.displayWelcomeMessage()
    this.playMatch();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Tic Tac Toe!');
    console.log();
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('You won! Congrats!');
    } else if (this.isWinner(this.computer)) {
      console.log('The Computer won! You lose!');
    } else {
      console.log('The game is a tie!');
    }
  }

  displayScore() {
    console.log(`---------------
    ** GAMES WON **
    ---------------`);

    console.log(`Human: ${this.human.score}`);
    console.log(`Computer: ${this.computer.score}`);
    console.log();
  }

  displayMatchResults() {
    if (this.matchWinner(this.human)) {
      console.log(`----------------
      HUMAN WINS MATCH
      ----------------`);
    } else if (this.matchWinner(this.computer)) {
      console.log(`-------------------
      COMPUTER WINS MATCH
      -------------------`);
    }
  }

  displayInitialFirstPlayer() {
    console.log(`** Starting Player: ${this.firstPlayer} **`);
  }

  displayInitialSecondPlayer() {
    console.log(`** Starting Player: ${this.secondPlayer} **`);
  }

  alternateGameStartingPlayer() {
    if (this.human.isPlayingFirst) {
      this.computer.activateTurnState();
      this.human.deactivateTurnState();
    } else if (this.computer.isPlayingFirst) {
      this.human.activateTurnState();
      this.computer.deactivateTurnState();
    }

    this.firstPlayer = this.computer.isPlayingFirst ? this.computer : this.human;
    this.secondPlayer = this.human.isPlayingFirst ? this.human : this.computer;
  }

  processFirstTurn() {
    if (this.human.isPlayingFirst) this.humanMoves();
    else this.computerMoves();
  }

  processSecondTurn() {
    if (this.firstPlayer === this.human) this.computerMoves();
    else if (this.firstPlayer === this.computer) this.humanMoves();
  }

  humanMoves() {
    const validChoices = this.board.unusedSquares();
    let choice;

    while (true) {
      const choicesList = validChoices.map(choice => String(choice));
      const choicesStr = TTTGame.#joinOr(choicesList);
      const prompt = `Choose a square (${choicesStr}): `
      choice = READLINE_SYNC.question(prompt);

      try {
        if (validChoices.includes(choice)) break;
      } catch (TypeError) {
        /* do nothing */
      }

      console.log("Sorry, that's not a valid choice.");
      console.log();
    }

    this.board.markSquareAt(choice, this.human.marker);
  }

  computerMoves() {
    let choice = this.computerCriticalMove();

    if (!choice) choice = this.pickCenterSquare();
    if (!choice) choice = this.pickRandomSquare();

    this.board.markSquareAt(choice, this.computer.marker);
  }

  findTheRightSquare(row, playerMarker) {
    const occupied = new Set();

    for (let square of row) {
      if (this.board.squares[square].marker === playerMarker) {
        occupied.add(square);

        if (occupied.size === 2) {
          const difference = new Set(row).difference(occupied);
          const selectSquare = [...difference];
          console.log('row used: ', row);
          console.log(occupied, difference, 'SELECT SQR: ', selectSquare);

          if (this.board.squares[selectSquare[0]].isUnused()) {
            return selectSquare.pop();
          }
        }
      }
    }

    return null;
  }

  computerCriticalMove() {
    for (let row of TTTGame.POSSIBLE_WINNING_ROWS) {
      const aggressive = this.findTheRightSquare(row, this.computer.marker);
      const defensive = this.findTheRightSquare(row, this.human.marker);
      const choice = aggressive || defensive;

      if (choice) return choice;
    }

    return null;
  }

  pickCenterSquare() {
    return this.board.squares[5].isUnused() ? 5 : null;
  }

  pickRandomSquare() {
    const validChoices = this.board.unusedSquares();
    return validChoices[Math.floor(Math.random() * validChoices.length)];
  }

  isGameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  threeInARow(player, row) {
    return this.board.countMarkersFor(player, row) === 3;
  }

  isWinner(player) {
    for (let row of TTTGame.POSSIBLE_WINNING_ROWS) {
      if (this.threeInARow(player, row)) return true;
    }

    return false;
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  updateScore() {
    if (this.isWinner(this.human)) this.human.incrementScore();
    else if (this.isWinner(this.computer)) this.computer.incrementScore();
  }

  matchWon() {
    return [this.human.score, this.computer.score].includes(TTTGame.MATCH_GOAL);
  }

  matchWinner(player) {
    return player.score === TTTGame.MATCH_GOAL;
  }
}

const game = new TTTGame();
game.play();