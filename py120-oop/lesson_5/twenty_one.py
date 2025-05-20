import os
import random

def clear_screen():
    if os.name == 'posix':
        os.system('clear')
    else:
        os.system('cls')

def prompt(message):
    print(f"===> {message}")

def large_divider(message):
    print(''.join(['=' for _ in range(len(message))]))

def small_divider(message):
    print(''.join(['-' for _ in range(len(message))]))

def page_break():
    print("============================================================")

class Deck:
    SUITS = ('Hearts', 'Diamonds', 'Spades', 'Clubs')
    VALUES = ('2', '3', '4', '5', '6', '7', '8', '9', '10',
              'Jack', 'Queen', 'King', 'Ace')

    def __init__(self):
        self.cards = [Card(value, suit)
                     for value in Deck.VALUES
                     for suit in Deck.SUITS]
        random.shuffle(self.cards)

    def initialize(self):
        self.__init__()

class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit
    
    def __str__(self):
        return f"{self.value} of {self.suit}"

class Hand:
    def __init__(self):
        self.cards = []
    
    def __str__(self):
        cards = [str(card) for card in self.cards]
        return ", ".join(cards)
    
    def update_value_total(self):
        values = [card.value for card in self.cards]

        total = 0
        for value in values:
            if value == "Ace":
                total += 11
            elif value in ["Jack", "Queen", "King"]:
                total += 10
            else:
                total += int(value)

        aces = values.count("Ace")
        while total > 21 and aces:
            total -= 10
            aces -= 1
        
        self.value_total = total
    
    @property
    def value_total(self):
        return self._value_total
    
    @value_total.setter
    def value_total(self, value_total):
        self._value_total = value_total

class Participant:
    def __init__(self):
        self.hand = Hand()

    def initialize(self):
        self.__init__()

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

class TwentyOneGame:
    PLAYER = 'Player'
    DEALER = 'Dealer'
    BEST_SCORE = 21
    DEALER_MIN = 17

    def __init__(self):
        self.deck = Deck()
        self.player = Player()
        self.dealer = Dealer()

    def start(self):
        self.display_welcome_message()

        while True:
            #### TODO: implement betting dollars ####
            # program quits when player is broke (0 dollars)
            # program quits when player is rich (>= 10 dollars)

            self.deal_initial_hands()
            self.display_initial_hands()

            self.process_turns()

            self.compare_totals()
            self.display_final_total_and_hands()
            self.display_winner()

            if self.player.is_poor() or self.player.is_rich():
                self.end_game()
            
            self.initialize_participants()
            if not self.play_again():
                break

        self.display_goodbye_message()
    
    def deal_initial_hands(self):
        """Deal two cards to each participant."""
        for _ in range(2):
            self.deal_card_to(self.player)
            self.deal_card_to(self.dealer)
        # Hide dealer's first card if needed
    
    def deal_card_to(self, participant):
        card = self.deck.cards.pop()
        participant.hand.cards.append(card)
        participant.hand.update_value_total()
    
    def display_initial_hands(self):
        print()
        prompt(f"Dealer's hand: {self.dealer.hand.cards[0]} and ?")
        prompt(f"Your Hand: {self.player.hand}")
        print()

    def get_current_hand(self, participant):
        return participant.hand

    def player_turn(self):
        while True:
            player_total = self.get_hand_total(self.player)

            if self.busted(self.player):
                break

            prompt(f"PLAYER'S TOTAL: {player_total}")
            prompt("hit (h) or stay (s)?")
            answer = input().lower()

            if answer == 's':
                break
            if answer == 'h':
                self.hit(self.player)
                prompt(f"PLAYER'S hand: {self.player.hand}")
            else:
                prompt("Try again you silly goose!")

        if self.busted(self.player):
            prompt(f"PLAYER'S TOTAL: {player_total}")
            prompt("You BUSTED!\n")
        else:
            prompt("You chose to STAY!\n")

    def dealer_turn(self):
        while True:
            dealer_total = self.get_hand_total(self.dealer)
            prompt(f"DEALER'S hand: {self.dealer.hand}")
            prompt(f"DEALER'S TOTAL: {dealer_total}")

            if dealer_total == TwentyOneGame.BEST_SCORE:
                prompt("DEALER has 21!\n")
                return
            if self.busted(self.dealer):
                prompt("DEALER BUSTED!\n")
                break
            if self.dealer_stays():
                prompt("Dealer STAYS.\n")
                break

            prompt("Dealer HITS!")
            print()
            self.hit(self.dealer)

    def hit(self, participant):
        self.deal_card_to(participant)

    def busted(self, participant):
        return participant.hand.value_total > TwentyOneGame.BEST_SCORE
    
    def dealer_stays(self):
        return self.dealer.hand.value_total >= TwentyOneGame.DEALER_MIN
    
    def process_turns(self):
        self.player_turn()

        if not self.end_round():
            self.dealer_turn()
    
    def end_round(self):
        return self.busted(self.player)
    
    def compare_totals(self):
        player_total = self.get_hand_total(self.player)
        dealer_total = self.get_hand_total(self.dealer)

        if not self.busted(self.player) and self.busted(self.dealer):
            return TwentyOneGame.PLAYER
        if self.busted(self.player) and not self.busted(self.dealer):
            return TwentyOneGame.DEALER
        if player_total > dealer_total:
            return TwentyOneGame.PLAYER
        if player_total < dealer_total:
            return TwentyOneGame.DEALER

        return None

    def get_hand_total(self, participant):
        return participant.hand.value_total
    
    def display_final_total_and_hands(self):
        player_total = self.get_hand_total(self.player)
        dealer_total = self.get_hand_total(self.dealer)
        player_cards = self.get_current_hand(self.player)
        dealer_cards = self.get_current_hand(self.dealer)

        print("ROUND TOTAL & HANDS:\n")
        print(f"PLAYER:\n"
            f"Total: {player_total}\n"
            f"Cards: {player_cards}\n")
        print(f"DEALER:\n"
            f"Total: {dealer_total}\n"
            f"Cards: {dealer_cards}\n")
    
    def display_winner(self):
        winner = self.compare_totals()

        if not winner:
            no_win_msg = "ROUND RESULT: TIE!"
            large_divider(no_win_msg)
            print(no_win_msg)
            large_divider(no_win_msg)
            print()
        elif winner:
            win_msg = f"ROUND WINNER: {winner}"
            large_divider(win_msg)
            print(win_msg)
            large_divider(win_msg)
            print()

    def display_remaining_player_dollars(self):
        # STUB
        pass

    def initialize_participants(self):
        self.player.initialize()
        self.dealer.initialize()

    def play_again():
        prompt("Want to play again? Please type (y or n):")
        while True:
            answer = input().strip().lower()

            match answer:
                case 'y':
                    return True
                case 'n':
                    return False
                case _:
                    prompt("Please try either 'y' or 'n':")

    def end_game(self):
        # checks if player is poor or rich
        pass

    def display_welcome_message(self):
        print("Welcome to Twenty-One!")
    def display_goodbye_message(self):
        print("Thank you for playing Twenty-One. Goodbye!")

game = TwentyOneGame()
game.start()