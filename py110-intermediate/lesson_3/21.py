import random


deck = [
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


def prompt(message):
    print(f"===> {message}")


def initialize_deck(*kwargs):
    pass


def shuffle_deck(deck):
    random.shuffle(deck)


def deal_cards(deck):
    hand = [random.choice(deck)]

    while True:
        dealt = random.choice(deck)

        if dealt not in hand:
            hand.append(dealt)

            return hand


def hit(deck, hand):
    while True:
        dealt = [random.choice(deck)]

        if dealt not in hand:
            hand.append(dealt)

            return


def busted():
    pass


def player_turn(player_hand):
    while True:
        prompt("hit or stay?")
        answer = input().lower()
        if answer == 'stay' or busted():
            break

        elif answer == 'hit':
            hit(deck, player_hand)
            print(f"player hand:\n{player_hand}")
        else:
            prompt("Try again you silly goose!")
    
    prompt("You chose to stay, or busted.  Dunno yet.")


def dealer_turn(dealer_hand):
    pass


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


def compare_cards():
    pass


def display_winner():
    pass


def play_game(deck):
    player_hand = deal_cards(deck)
    dealer_hand = deal_cards(deck)

    print(f"player hand: {player_hand}")
    print(f"dealer hand: {dealer_hand}")

    prompt("Play first playa")
    player_turn(player_hand)


play_game(deck)