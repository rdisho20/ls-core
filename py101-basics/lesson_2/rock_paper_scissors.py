import random

VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

WIN_COMBOS = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["spock", "paper"],
    "spock": ["scissors", "rock"]
}

def prompt(message):
    print(f"==> {message}")

def check_then_return_input(option):
    option = option.casefold()

    if len(option) <= 2:
        match option:
            case 'r':
                option = "rock"
            case 'p':
                option = "paper"
            case 'l':
                option = "lizard"
            case 'sc':
                option = "scissors"
            case 'sp':
                option = "spock"

    return option

def determine_winner(user, computer):
    winner = ""

    if computer in WIN_COMBOS[user]:
        winner = "user"
    elif user in WIN_COMBOS[computer]:
        winner = "computer"

    return winner

def update_user_record():
    if round_winner == 'user':
        user_record.append('win')
    elif round_winner == 'computer':
        user_record.append('loss')
    else:
        user_record.append('tie')

def display_winner():
    if round_winner == 'user':
        prompt("You win this round!\n")
    elif round_winner == 'computer':
        prompt("Computer wins this round!\n")
    else:
        prompt("This round is a tie!\n")

def display_match_winner():
    if user_record.count('win') > user_record.count('loss'):
        prompt("You win the match!\n")
    elif user_record.count('loss') > user_record.count('win'):
        prompt("The Computer wins the match!\n")
    else:
        prompt("5 rounds were played and "
               "there were too many ties. Nobody won!\n")

def display_next_round():
    if round_total < 5:
        prompt(f"Beginning Round #{round_total}")

# ---- KEEPING TRACK OF GAME FLOW STARTS HERE ----
while True:
    user_record = []
    round_total = 1

    # Rounds start here
    while round_total <= 5:
        prompt((f"""From the choices {', '.join(VALID_CHOICES)}...
        Type the name, the first letter or first two letters
        of the name if choosing 'scissors' or 'spock'!
        """))
        choice = check_then_return_input(input())

        while choice not in VALID_CHOICES:
            prompt("Please try again:")
            choice = check_then_return_input(input())

        computer_choice = random.choice(VALID_CHOICES)

        prompt(f"You chose {choice} & the computer chose {computer_choice}.")

        round_winner = determine_winner(choice, computer_choice)

        update_user_record()

        display_winner()

        if user_record.count('win') == 3 or user_record.count('loss') == 3:
            break

        round_total += 1

        display_next_round()

    win_count = user_record.count('win')
    loss_count = user_record.count('loss')
    tie_count = user_record.count('tie')

    display_match_winner()

    prompt(f"Your record: {win_count} W, {loss_count} L, {tie_count} Ties\n")

    while True:
        prompt("Would you like to play again? (y/n):")
        answer = input().casefold()

        if answer.startswith('n') or answer.startswith('y'):
            break

        prompt("That's not a valid choice. Please, try again.")

    if answer[0] == 'n':
        break