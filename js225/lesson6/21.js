const shuffle = require('shuffle-array');
const rlsync = require('readline-sync');

function prompt(mssg) {
  console.log(`===> ${mssg}`);
}

function largeDivider(mssg) {
  console.log('='.repeat(mssg.length));
}

function smallDivider(mssg) {
  console.log('-'.repeat(mssg.length));
}

function pageBreak() {
  console.log("============================================================");
}


class Deck {
  static SUITS = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  static VALUES = [
    '2', '3', '4', '5', '6', '7', '8', '9',
    '10', 'Jack', 'Queen', 'King', 'Ace',
  ];

  constructor() {
    this.cards = [];

    Deck.VALUES.forEach(value => {
      Deck.SUITS.forEach(suit => {
        this.cards.push(new Card(value, suit));
      });
    });

    shuffle(this.cards);
  }
}


class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  toString() {
    return `${this.value} of ${this.suit}`;
  }
}


class Hand {
  constructor() {
    this.cards = [];
  }

  toString() {
    return this.cards.map(card => `${card}`).join(', ');
  }

  updateValueTotal() {
    const values = this.cards.map(card => card.value);

    let total = 0;
    values.forEach(value => {
      if (value === 'Ace') total += 11;
      else if (["Jack", "Queen", "King"].includes(value)) total += 10;
      else total += parseInt(value, 10);
    });

    let aces = values.filter(value => value === 'Ace').length;
    while (total > 21 && aces) {
      total -= 10;
      aces -= 1;
    }

    this.valueTotal = total;
  }
}


class Participant {
  constructor() {
    this.hand = new Hand();
  }

  resetHand() {
    this.hand = new Hand();
  }
}


class Player extends Participant {
  constructor() {
    super();
    this.bettingDollars = 5;
  }

  addDollar() {
    this.bettingDollars += 1;
  }

  subtractDollar() {
    this.bettingDollars -= 1;
  }

  isRich() {
    return this.bettingDollars >= 10;
  }

  isPoor() {
    return this.bettingDollars === 0;
  }
}


class Dealer extends Participant {
  constructor() {
    super();
  }
}


class TwentyOneGame {
  static PLAYER = Player.name;
  static DEALER = Dealer.name;
  static BEST_SCORE = 21;
  static DEALER_MIN = 17;

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    console.clear();
    this.displayWelcomeMessage();
    this.displayBettingDollarsPurpose();

    while (true) {
      this.displayRemainingPlayerDollars();
      this.dealInitialHands();
      this.displayInitialHands();

      this.processTurns();

      this.compareTotals();
      this.displayFinalTotalAndHands();
      this.displayWinner();
      this.updatePlayerDollars();

      if (this.endGame()) {
        this.displayEndGameMessage();
        break;
      }

      this.resetParticipantHands();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }

  dealInitialHands() {
    for (let count = 0; count <= 2; count += 1) {
      this.dealCardTo(this.player);
      this.dealCardTo(this.dealer);
    }
  }

  dealCardTo(participant) {
    /*
    Check if any cards left in deck, intialize deck if not
    Deal cards to each player
    */
    const cardsLeft = this.deck.cards.length;
    if (!cardsLeft) this.deck = new Deck();

    const card = this.deck.cards.pop();
    participant.hand.cards.push(card);
    participant.hand.updateValueTotal();
  }

  displayInitialHands() {
    console.log();
    prompt(`Dealer's hand: ${this.dealer.hand.cards[0]} and ?`);
    prompt(`Your Hand: ${this.player.hand}`);
    console.log();
  }

  getCurrentHand(participant) {
    return participant.hand;
  }

  playerTurn() {
    let playerTotal;

    while (true) {
      playerTotal = this.getHandTotal(this.player);

      if (this.busted(this.player)) break;

      prompt(`PLAYER'S TOTAL: ${playerTotal}`);
      prompt('hit (h) or stay (s)?');
      const answer = rlsync.prompt();

      if (answer === 's') break;
      if (answer === 'h') {
        this.hit(this.player);
        prompt(`PLAYER'S hand: ${this.player.hand}`);
      } else {
        prompt('Try again you silly goose!');
      }
    }

    if (this.busted(this.player)) {
      prompt(`PLAYER'S TOTAL: ${playerTotal}`);
      prompt('You BUSTED!\n');
    } else prompt('You chose to STAY!\n');
  }

  dealerTurn() {
    while (true) {
      const dealerTotal = this.getHandTotal(this.dealer);
      prompt(`DEALER'S hand: ${this.dealer.hand}`);
      prompt(`DEALER'S TOTAL: ${dealerTotal}`);

      if (dealerTotal === TwentyOneGame.BEST_SCORE) {
        prompt('DEALER has 21!\n');
        return;
      }

      if (this.busted(this.dealer)) {
        prompt('DEALER BUSTED!\n');
        break;
      }

      if (this.dealerStays()) {
        prompt('DEALER STAYS.\n');
        break;
      }

      prompt('DEALER HITS!');
      console.log();
      this.hit(this.dealer);
    }
  }

  hit(participant) {
    this.dealCardTo(participant);
  }

  busted(participant) {
    return participant.hand.valueTotal > TwentyOneGame.BEST_SCORE;
  }

  dealerStays() {
    return this.dealer.hand.valueTotal >= TwentyOneGame.DEALER_MIN;
  }

  processTurns() {
    this.playerTurn();

    if (!this.endRound()) {
      this.dealerTurn();
    }
  }

  endRound() {
    return this.busted(this.player);
  }

  compareTotals() {
    const playerTotal = this.getHandTotal(this.player);
    const dealerTotal = this.getHandTotal(this.dealer);

    if (!this.busted(this.player) && this.busted(this.dealer)) TwentyOneGame.PLAYER;
    if (this.busted(this.player) && !this.busted(this.dealer)) TwentyOneGame.DEALER;
    if (playerTotal > dealerTotal) TwentyOneGame.PLAYER;
    if (playerTotal < dealerTotal) TwentyOneGame.DEALER;

    return null;
  }

  getWinner() {
    return this.compareTotals();
  }

  getHandTotal(participant) {
    return participant.hand.valueTotal;
  }

  updatePlayerDollars() {
    const winner = this.getWinner();

    if (!winner) {
      return;
    }

    if (TwentyOneGame.PLAYER.includes(winner)) {
      this.player.addDollar();
    } else {
      this.player.subtractDollar();
    }
  }

  displayFinalTotalAndHands() {
    console.log("ROUND TOTAL & HANDS:\n");
    console.log(`PLAYER:
    Total: ${this.getHandTotal(this.player)}
    Cards: ${this.getCurrentHand(this.player)}`);
    console.log(`DEALER:
    Total: ${this.getHandTotal(this.dealer)}
    Cards: ${this.getCurrentHand(this.dealer)}`);
  }

  displayWinner() {
    const winner = this.getWinner();

    if (!winner) {
      const noWinMsg = "ROUND RESULT: TIE!";
      largeDivider(noWinMsg);
      console.log(noWinMsg);
      largeDivider(noWinMsg);
      console.log()
    } else if (winner) {
      const winMsg = `ROUND WINNER: ${winner}`;
      largeDivider(winMsg);
      console.log(winMsg);
      largeDivider(winMsg);
    }
  }

  displayBettingDollarsPurpose() {
    console.log("If you finish with more than $10, you are RICH! (Game ends)");
    console.log(`If you lose all of your betting dollars, \
you are POOR! (Game ends)`);
  }

  displayRemainingPlayerDollars() {
    console.log(`Remaining BETTING DOLLARS: $${this.player.bettingDollars}`);
  }

  resetParticipantHands() {
    this.player.resetHand();
    this.dealer.resetHand();
  }

  playAgain() {
    prompt('Want to play again? Please type (y or n):');
    let answer;
    while (true) {
      answer = rlsync.prompt()
      answer = answer.trim().toLowerCase();

      switch (answer) {
        case 'y':
          console.clear();
          return true;
        case 'n':
          return false;
        default:
          prompt("Please try either 'y' or 'n': ");
      }
    }
  }

  endGame() {
    if (this.player.isPoor() || this.player.isRich()) true;
    return false;
  }

  displayEndGameMessage() {
    if (this.player.isPoor()) {
      console.log('You are POOR! Game Over!');
    } else if (this.player.isRich()) {
      console.log('You are RICH! Game Over!')
    }
  }

  displayWelcomeMessage() {
    console.log('Welcome to Twenty-One!');
    console.log();
  }

  displayGoodbyeMessage() {
    console.log('Thank you for playing Twenty-One. Goodbye!');
  }
}

const game = new TwentyOneGame();
game.start();