import random

SUITS = ('H', 'D', 'S', 'C')
VALUES = ('2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A')

def prompt(message):
    print(f"=> {message}")

def initialize_deck():
    deck = [f"{value}{suit}" for value in VALUES for suit in SUITS]
    random.shuffle(deck)
    return deck

def total(cards):
    sum_val = 0

    for card in cards:
        value = card[:-1]

        if value == "A":
            sum_val += 11
        elif value in ['J', 'Q', 'K']:
            sum_val += 10
        else:
            sum_val += int(value)

    # Correct for Aces
    for card in cards:
        value = card[:-1]
        if sum_val <= 21:
            break
        if value == "A":
            sum_val -= 10

    return sum_val

def busted(cards):
    return total(cards) > 21

def detect_result(dealer_cards, player_cards):
    player_total = total(player_cards)
    dealer_total = total(dealer_cards)

    print(player_cards)
    print(dealer_cards)

    if player_total > 21:
        return 'PLAYER_BUSTED'
    elif dealer_total > 21:
        return 'DEALER_BUSTED'
    elif dealer_total < player_total:
        return 'PLAYER'
    elif dealer_total > player_total:
        return 'DEALER'
    else:
        return 'TIE'

def display_results(dealer_cards, player_cards):
    result = detect_result(dealer_cards, player_cards)

    match result:
        case 'PLAYER_BUSTED':
            prompt('You busted! Dealer wins!')
        case 'DEALER_BUSTED':
            prompt('Dealer busted! You win!')
        case 'PLAYER':
            prompt('You win!')
        case 'DEALER':
            prompt('Dealer wins!')
        case _:
            prompt("It's a tie!")


def play_again():
    print("-------------")
    answer = input('Do you want to play again? (y or n) ')
    return answer == 'y'

def pop_two_from_deck(deck):
    return [deck.pop(), deck.pop()]

def hand(cards):
    return ', '.join(cards)

while True:
    prompt('Welcome to Twenty-One!')

     # initial deal
    deck = initialize_deck()
    player_cards = pop_two_from_deck(deck)
    dealer_cards = pop_two_from_deck(deck)


    prompt(f"Dealer has {dealer_cards[0]} and ?")
    prompt(f"You have: {player_cards[0]} and {player_cards[1]}, for a total of {total(player_cards)}.")

    # player turn
    while True:
        player_choice = input("Would you like to (h)it or (s)tay? ")
        if player_choice not in ['h', 's']:
            prompt("Sorry, must enter 'h' or 's'.")
            continue

        if player_choice == 'h':
            player_cards.append(deck.pop())
            prompt('You chose to hit!')
            prompt(f"Your cards are now: {hand(player_cards)}")
            prompt(f"Your total is now: {total(player_cards)}")

        if player_choice == 's' or busted(player_cards):
            break

    if busted(player_cards):
        display_results(dealer_cards, player_cards)
        if play_again():
            continue
    else:
        prompt(f"You stayed at {total(player_cards)}")

    # dealer turn
    prompt("Dealer's turn...")

    while total(dealer_cards) < 17:
        prompt("Dealer hits!")
        dealer_cards.append(deck.pop())
        prompt(f"Dealer's cards are now: {hand(dealer_cards)}")

    if busted(dealer_cards):
        prompt(f"Dealer total is now: {total(dealer_cards)}")
        display_results(dealer_cards, player_cards)
        if play_again():
            continue
    else:
        prompt(f"Dealer stays at {total(dealer_cards)}")

    # both player and dealer stays - compare cards!

    print('==============')
    prompt(f"Dealer has {hand(dealer_cards)}, for a total of: {total(dealer_cards)}")
    prompt(f"Player has {hand(player_cards)}, for a total of: {total(player_cards)}")
    print('==============')

    display_results(dealer_cards, player_cards)

    if not play_again():
        break