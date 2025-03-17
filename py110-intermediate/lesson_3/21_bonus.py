import random
import os


PLAYER = 'Player'
DEALER = 'Dealer'
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
    prompt(f"Player's hand: {' of '.join(player_hand[0])}"
           f" and {' of '.join(player_hand[1])}\n")


def display_current_hands(cards_in_hand):
    return ', '.join([' of '.join(card) for card in cards_in_hand])


def hit(hand):
    while True:
        dealt = random.choice(DECK)

        if dealt not in hand:
            hand.append(dealt)

            return


def dealer_stays(dealer_hand):
    return total(dealer_hand) >= 17


def busted(cards_in_hand):
    return total(cards_in_hand) > 21


def end_round(player_hand):
    return busted(player_hand)


def player_turn(player_hand):
    while True:
        player_total = total(player_hand)
        if busted(player_hand):
            break

        prompt(f"PLAYER'S TOTAL: {player_total}")
        prompt("hit (h) or stay (s)?")
        answer = input().lower()

        if answer == 's':
            break
        if answer == 'h':
            hit(player_hand)
            prompt(f"PLAYER'S hand: {display_current_hands(player_hand)}")
        else:
            prompt("Try again you silly goose!")

    if busted(player_hand):
        prompt(f"You BUSTED! Card total: {player_total}\n")
    else:
        prompt(f"You chose to stay! Card total: {player_total}\n")


def dealer_turn(dealer_hand):
    while True:
        dealer_total = total(dealer_hand)
        prompt(f"DEALER'S hand: {display_current_hands(dealer_hand)}")
        prompt(f"DEALER'S TOTAL: {dealer_total}")
        
        if dealer_total == 21:
            prompt("DEALER has 21!\n")
            return
        if busted(dealer_hand):
            prompt(f"DEALER BUSTED! Card total: {dealer_total}\n")
            break
        if dealer_stays(dealer_hand):
            prompt(f"Dealer STAYS. Card total: {dealer_total}\n")
            break

        print()
        prompt("Dealer HITS!")
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
    if busted(player_hand) and not busted(dealer_hand):
        return DEALER
    if player_total > dealer_total:
        return PLAYER
    if player_total < dealer_total:
        return DEALER

    return None


def display_final_hands(player_hand, dealer_hand):
    prompt("FINAL HANDS:")
    prompt(f"Player: {display_current_hands(player_hand)}")
    prompt(f"Dealer: {display_current_hands(dealer_hand)}")
    print()


def display_winner(player_hand, dealer_hand):
    winner = compare_cards(player_hand, dealer_hand)

    if not winner:
        print("===================")
        print("ROUND RESULT: TIE!")
        print("===================\n")
    elif winner:
        print("=================================")
        print(f"The winner of this round: {winner}")
        print("=================================\n")


def end_of_round_output():
    prompt("Onto the next round!")
    print("-------------------------")
    print()


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
    rounds_played = 0

    while True:
        terminal_clear()
        prompt("Welcome to Twenty-One!")
        print()

        while True:
            rounds_played += 1
            prompt(f"ROUND {rounds_played}, FIGHT!\n")

            player_hand = deal_cards()
            dealer_hand = deal_cards()

            display_initial_hands(player_hand, dealer_hand)

            player_turn(player_hand)
            if not end_round(player_hand):
                dealer_turn(dealer_hand)
            
            compare_cards(player_hand, dealer_hand)
            display_final_hands(player_hand, dealer_hand)
            display_winner(player_hand, dealer_hand)

            end_of_round_output()

            if rounds_played == 5:
                break

        display_match_totals()
        display_match_winner()

        if not play_again():
            break


play_game()