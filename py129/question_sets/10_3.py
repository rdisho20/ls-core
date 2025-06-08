import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
    
    def __str__(self):
        return f"{self.value} of {self.suit}"
    
    def __repr__(self):
        return f"Card({self.suit}, {self.value})"
    # STUB

class Deck:
    VALUES = ("2", "3", "4", "5", "6", "7", "8", "9", "10",
              "Jack", "Queen", "King", "Ace")
    SUITS = ("Spades", "Diamonds", "Hearts", "Clubs")
    def __init__(self):
        '''
        state would include a deck of cards
        using Card(suit, value) for each card
        - Card collaborates w/ Deck
        '''
        self.cards = [str(Card(suit, value)) 
                      for suit in Deck.SUITS
                      for value in Deck.VALUES]
        random.shuffle(self.cards)
    # STUB

class Player:
    def __init__(self):
        '''
        state used to keep count of score and manage hand
        '''
        self.score = 0
        self.hand = []
    
    @property
    def score(self):
        return self._score
    
    @score.setter
    def score(self, score):
        if not isinstance(score, int):
            return NotImplemented
        self._score = score

class Game:
    def __init__(self):
        '''
        Deck and Player classes collaborate w/ Game class
        '''
        self.deck = Deck()
        self.player = Player()
    
    def deal_card(self):
        self.player.hand.append(self.deck.cards.pop())
    
    def deal_initial_hand(self):
        self.deal_card()
        self.deal_card()
    
    def display_player_hand(self):
        print(self.player.hand)

    def someone_won(self):
        # STUB
        pass

    def increment_player_score(self):
        self.player.score += 1
    
    def play_again(self):
        while True:
            answer = input("Play again? (y/n)").casefold().strip()

            match answer:
                case 'y':
                    return True
                case 'n':
                    return False
            
            print("Please type either 'y' or 'n'")

    def play(self):
        while True:
            self.deal_initial_hand()
            self.display_player_hand()

            if self.someone_won():
                self.increment_player_score()
            
            if not self.play_again():
                break
    
game_engine = Game()
game_engine.play()