import os
import random

def clear_screen():
    if os.name == 'posix':
        os.system('clear')
    else:
        os.system('cls')

class Deck:
    SUITS = ('Hearts', 'Diamonds', 'Spades', 'Clubs')
    VALUES = ('2', '3', '4', '5', '6', '7', '8', '9', '10',
              'Jack', 'Queen', 'King', 'Ace')

    def __init__(self):
        self.cards = [Card(value, suit)
                     for value in Deck.VALUES
                     for suit in Deck.SUITS]
        random.shuffle(self.cards)

    def __str__(self):
        return f"{self.cards}"

    def initialize(self):
        self.__class__.__init__()

class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit
    
    def __str__(self):
        return f"{self.value} of {self.suit}"

class Hand:
    def __init__(self):
        self.cards = []
        self.value_total = 0

    def reset(self):
        self.cards.clear()

class Participant:
    # Each participant starts w/ empty hand
    # dealt 2 cards
    # initial dealing done in engine
    # avoiding additional parameters/arguements in classes
    #### ACTUALLY MAYBE NOT ####
    # Each participant can be dealt additional cards
    def __init__(self):
        self.hand = Hand()

    # Don't know how to implement YET
    def take_turn(self):
        # STUB
        pass
    def stay(self):
        # STUB
        pass
    def hit(self):
        # STUB
        pass

class Player(Participant):
    def __init__(self):
        super().__init__()
        self.betting_dollars = 5
    
    def add_dollar(self):
        self.betting_dollars += 1

    def subtract_dollar(self):
        self.betting_dollars -= 1

    def is_rich(self):
        # STUB
        pass
    def is_poor(self):
        # STUB
        pass

class Dealer(Participant):
    def __init__(self):
        super().__init__()

    # Dealer collabs w/ Game Engine
    # Hand and Deck collabs w/ Dealer
    def deals_hand(self, hand, deck):
        for _ in range(0, 2):
            self.deal_card(hand, deck)
        
    def deal_card(self, hand, deck):
        card = deck.pop()
        hand.cards.append(card)

    def hide_card(self):
        # STUB
        pass

    def reveal_hidden_card(self):
        # STUB
        pass

class TwentyOneGame:
    MAX_POINTS = 21
    DEALER_MIN = 17
    # program quits when player is broke (0 dollars)
    # program quits when player is rich (>= 10 dollars)
    def __init__(self):
        self.deck = Deck()
        self.player = Player()
        self.dealer = Dealer()

    def start(self):
        self.display_welcome_message()

        self.player_turn()
        self.dealer_turn()

        self.display_game_results()

        if self.player.is_poor() or self.player.is_rich():
            self.end_game()
        
        self.play_again()
        self.display_goodbye_message()
    
    def process_dealing_hands(self):
        self.dealer.deals_hand(self.player.hand, self.deck)
        self.dealer.deals_hand(self.dealer.hand, self.deck)

    def player_turn(self):
        # each time player can hit or stay
        # display computer's hand; 1 card hidden
        # display player's hand and card value total
        pass
    def dealer_turn(self):
        # Player doesn't play at all if player busts
        # display dealer hand, revealing hidden card
        # display dealer card value total
        # Re-display and and point total after each hit
        # display results when dealer stays
        pass
    def participant_busts(self):
        # STUB
        # checks totals each time after Participant chooses
        # to hit
        pass
    def get_totals(self):
        # STUB
        pass
    def compare_totals(self):
        # STUB
        # COMPARES total values returning highest value
        pass
    def determine_winner(self):
        # STUB
        pass
    def display_game_results(self):
        # STUB
        pass
    def display_remaining_player_dollars(self):
        # STUB
        pass
    def play_again(self):
        # start new game if yes,  otherwise end game
        pass
    def end_game(self):
        # checks if player is poor or rich
        pass
    def display_welcome_message(self):
        print("Welcome to Twenty-One!")
    def display_goodbye_message(self):
        print("Thank you for playing Twenty-One. Goodbye!")

game = TwentyOneGame()
game.start()