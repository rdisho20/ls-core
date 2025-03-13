import random
import os


PLAYER = 'Player'
DEALER = 'Dealer'

DECK = [
        ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'],
        ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'],
        ['S', 'Q'], ['S', 'K'], ['S', 'A'],
        ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'],
        ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'],
        ['H', 'Q'], ['H', 'K'], ['H', 'A'],
        ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'],
        ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'],
        ['C', 'Q'], ['C', 'K'], ['C', 'A'],
        ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'],
        ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'],
        ['D', 'Q'], ['D', 'K'], ['D', 'A'],
    ]


def terminal_clear():
    if os.name == 'posix':
        os.system('clear')
    else:
        os.system('cls')


def prompt(message):
    print(f"===> {message}")


def initialize_deck(*kwargs):
    pass

'''
def shuffle_deck(deck):
    random.shuffle(deck)
'''

def deal_cards():
    hand = [random.choice(DECK)]
    
    # deal 2nd card, re-deal if same as 1st
    while True:
        dealt = random.choice(DECK)

        if dealt not in hand:
            hand.append(dealt)

            return hand


def hit(hand):
    while True:
        dealt = random.choice(DECK)

        if dealt not in hand:
            hand.append(dealt)

            return
        

def dealer_stays(dealer_hand):
    card_total = total(dealer_hand)

    if card_total >= 17:
        return True


def busted(cards_in_hand):
    current_total = total(cards_in_hand)

    if current_total > 21:
        return True
    
    return False


def player_turn(player_hand):
    while True:
        if busted(player_hand):
            break

        prompt(f"Your current card total: {total(player_hand)}")
        prompt("hit (h) or stay (s)?")
        answer = input().lower()

        if answer == 's':
            break
        elif answer == 'h':
            hit(player_hand)
            print(f"player hand:\n{player_hand}")
        else:
            prompt("Try again you silly goose!")
    
    if busted(player_hand):
        prompt("You BUSTED!\n")
    else:
        prompt("You chose to stay!\n")


def dealer_turn(dealer_hand):
    dealer_total = total(dealer_hand)
    print(f"dealer hand:\n{dealer_hand}")

    while True:
        if busted(dealer_hand):
            prompt(f"DEALER BUSTED!  Card total = {dealer_total}\n")
            break
        elif dealer_stays(dealer_hand):
            prompt(f"Dealer stays.  Card total = {dealer_total}\n")
            break

        hit(dealer_hand)
        print(f"dealer hand:\n{dealer_hand}")


def total(cards):
    values = [card[1] for card in cards]

    sum_val = 0
    for value in values:
        if value == "A":
            sum_val += 11
        elif value in ['J', 'Q', 'K']:
            sum_val += 10
        else:
            sum_val += int(value)

    # correct for Aces
    aces = values.count("A")
    while sum_val > 21 and aces:
        sum_val -= 10
        aces -= 1       # subtract 'aces' after each check

    return sum_val

# Not working properly, tie results in not displaying tie...
# print statements printing each player's hands twice
def compare_cards(player_hand, dealer_hand):
    print(f"Print 'player_hand' {player_hand}")
    print(f"Print 'dealer_hand' {dealer_hand}")
    if player_hand > dealer_hand and total(player_hand) <= 21:
        return PLAYER
    elif player_hand < dealer_hand and total(dealer_hand) <= 21:
        return DEALER
    
    return None


def display_winner(player_hand, dealer_hand):
    winner = compare_cards(player_hand, dealer_hand)

    if not winner:
        print("ROUND RESULT: TIE!")
    
    elif winner:
        print(f"The winner of this round: {winner}")


def play_game():
    terminal_clear()

    player_hand = deal_cards()
    dealer_hand = deal_cards()

    print(f"player hand: {player_hand}")
    print(f"dealer hand: {dealer_hand}")

    player_turn(player_hand)
    dealer_turn(dealer_hand)
    compare_cards(player_hand, dealer_hand)
    display_winner(player_hand, dealer_hand)

    #play_again()


play_game()