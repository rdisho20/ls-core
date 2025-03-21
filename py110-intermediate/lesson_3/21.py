import random
import os


PLAYER = 'Player'
DEALER = 'Dealer'
'''
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
'''
SUITS = ('Hearts', 'Diamonds', 'Spades', 'Clubs')
VALUES = ('2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A')

DECK = [[value, suit] for value in VALUES for suit in SUITS]


def terminal_clear():
    if os.name == 'posix':
        os.system('clear')
    else:
        os.system('cls')


def prompt(message):
    print(f"===> {message}")


def deal_cards():
    hand = [random.choice(DECK)]
    
    # deal 2nd card, re-deal if same as 1st
    while True:
        dealt = random.choice(DECK)

        if dealt not in hand:
            hand.append(dealt)

            return hand


def display_initial_hands(player_hand, dealer_hand):
    prompt(f"Dealer's hand: {' of '.join(dealer_hand[0])} and ?")
    prompt(f"Player's hand: {' of '.join(player_hand[0])} and {' of '.join(player_hand[1])}")
    print()


def display_current_hands(cards_in_hand):
    return ', '.join([' of '.join(card) for card in cards_in_hand])


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

        prompt(f"TOTAL: {total(player_hand)}")
        prompt("hit (h) or stay (s)?")
        answer = input().lower()

        if answer == 's':
            break
        elif answer == 'h':
            hit(player_hand)
            prompt(f"PLAYER'S hand: {display_current_hands(player_hand)}")
        else:
            prompt("Try again you silly goose!")
    
    if busted(player_hand):
        prompt(f"You BUSTED! Card total: {total(player_hand)}\n")
    else:
        prompt(f"You chose to stay! Card total: {total(player_hand)}\n")


def dealer_turn(dealer_hand):
    while True:
        dealer_total = total(dealer_hand)
        prompt(f"DEALER'S hand: {display_current_hands(dealer_hand)}")
        prompt(f"TOTAL: {dealer_total}")

        if busted(dealer_hand):
            prompt(f"DEALER BUSTED!  Card total: {dealer_total}\n")
            break
        elif dealer_stays(dealer_hand):
            prompt(f"DEALER stays.  Card total: {dealer_total}\n")
            break

        hit(dealer_hand)


def total(cards_in_hand):
    values = [card[0] for card in cards_in_hand]

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


def compare_cards(player_hand, dealer_hand):
    player_total = total(player_hand)
    dealer_total = total(dealer_hand)

    if not busted(player_hand) and busted(dealer_hand):
        return PLAYER
    elif busted(player_hand) and not busted(dealer_hand):
        return DEALER
    elif player_total > dealer_total:
        return PLAYER
    elif player_total < dealer_total:
        return DEALER
    
    return None


def display_winner(player_hand, dealer_hand):
    winner = compare_cards(player_hand, dealer_hand)

    if not winner:
        print("===================")
        print("ROUND RESULT: TIE!")
        print("===================\n")
    elif winner:
        print("====================================")
        print(f"The winner of this round: {winner}")
        print("====================================\n")


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


def play_game():
    while True:
        terminal_clear()
        prompt("Welcom to Twenty-One!")

        player_hand = deal_cards()
        dealer_hand = deal_cards()

        display_initial_hands(player_hand, dealer_hand)

        player_turn(player_hand)
        dealer_turn(dealer_hand)
        compare_cards(player_hand, dealer_hand)
        display_winner(player_hand, dealer_hand)

        if not play_again():
            break


play_game()