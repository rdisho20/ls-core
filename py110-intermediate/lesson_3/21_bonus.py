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


def large_divider(message_length):
    pass


def small_divider(message_length):
    pass


def display_round(current_round):
    print("---------------")
    print(f"ROUND {current_round}, FIGHT!")
    print("---------------")


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
        prompt(f"You BUSTED!\n")
    else:
        prompt(f"You chose to STAY!\n")


def dealer_turn(dealer_hand):
    while True:
        dealer_total = total(dealer_hand)
        prompt(f"DEALER'S hand: {display_current_hands(dealer_hand)}")
        prompt(f"DEALER'S TOTAL: {dealer_total}")
        
        if dealer_total == 21:
            prompt("DEALER has 21!\n")
            return
        if busted(dealer_hand):
            prompt(f"DEALER BUSTED!\n")
            break
        if dealer_stays(dealer_hand):
            prompt(f"Dealer STAYS.\n")
            break

        prompt("\nDealer HITS!")
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


def process_turns(player_hand, dealer_hand):
    player_turn(player_hand)

    if not end_round(player_hand):
        dealer_turn(dealer_hand)


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


def display_final_total_and_hands(player_hand, dealer_hand):
    player_total = total(player_hand)
    dealer_total = total(dealer_hand)
    player_cards = display_current_hands(player_hand)
    dealer_cards = display_current_hands(dealer_hand)

    print("ROUND TOTAL & HANDS:\n")
    print(f"PLAYER:\n"
           f"Total: {player_total}\n"
           f"Cards: {player_cards}\n")
    print(f"DEALER:\n"
           f"Total: {dealer_total}\n"
           f"Cards: {dealer_cards}\n")


def display_winner(player_hand, dealer_hand):
    winner = compare_cards(player_hand, dealer_hand)

    if not winner:
        print("===================")
        print("ROUND RESULT: TIE!")
        print("===================")
        print()
    elif winner:
        print("================================")
        print(f"ROUND WINNER: {winner}")
        print("================================")
        print()


def end_of_round_output(current_round, round_wins):
    if not completed_match(current_round, round_wins):
        print("Onto the next round!")
        print("-------------------------")
        print()


def increment_round_wins(round_wins, player_hand, dealer_hand):
    round_winner = compare_cards(player_hand, dealer_hand)

    if round_winner == PLAYER:
        round_wins[PLAYER] += 1
    elif round_winner == DEALER:
        round_wins[DEALER] += 1


def completed_match(current_round, round_wins):
    return current_round == 5 or (3 in round_wins.values())


def detect_match_winner(round_wins):
    player_round_wins = round_wins[PLAYER]
    dealer_round_wins = round_wins[DEALER]

    if player_round_wins > dealer_round_wins:
        return PLAYER
    if player_round_wins < dealer_round_wins:
        return DEALER
    
    return None


def increment_match_wins(round_wins, match_wins):
    match_winner = detect_match_winner(round_wins)

    if match_winner == PLAYER:
        match_wins[PLAYER] += 1
    elif match_winner == DEALER:
        match_wins[DEALER] += 1


def display_match_totals(matches_total):
    prompt(f"MATCH TOTALS: {matches_total}")

def display_match_wins(match_wins):
    prompt(f"Player's Match Victories = {match_wins[PLAYER]}")
    prompt(f"Dealer's Match Victories = {match_wins[DEALER]}")
    print()


def display_match_winner(round_wins):
    match_winner = detect_match_winner(round_wins)

    if not match_winner:
        print("===================")
        print("MATCH RESULT: TIE!")
        print("===================\n")
    elif match_winner:
        print("================================")
        print(f"MATCH WINNER: {match_winner}")
        print("================================")
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
    matches_total = 0
    match_wins = {
        PLAYER: 0,
        DEALER: 0,
    }

    while True:
        current_round = 0
        round_wins = {
            PLAYER: 0,
            DEALER: 0,
        }

        terminal_clear()
        prompt("Welcome to TWENTY-ONE!")
        print()

        while True:
            current_round += 1
            display_round(current_round)

            player_hand = deal_cards()
            dealer_hand = deal_cards()

            display_initial_hands(player_hand, dealer_hand)

            process_turns(player_hand, dealer_hand)
            
            compare_cards(player_hand, dealer_hand)
            display_final_total_and_hands(player_hand, dealer_hand)
            display_winner(player_hand, dealer_hand)

            end_of_round_output(current_round, round_wins)

            increment_round_wins(round_wins, player_hand, dealer_hand)

            if completed_match(current_round, round_wins):
                detect_match_winner(round_wins)
                display_match_winner(round_wins)

                increment_match_wins(round_wins, match_wins)
                break

        matches_total += 1

        display_match_totals(matches_total)
        display_match_wins(match_wins)

        if not play_again():
            break


play_game()