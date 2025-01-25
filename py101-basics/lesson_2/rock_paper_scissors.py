# Bonus Features
# define function that takes parameter (user_choice)
# - check if user types length < shortest (min) :: VALID_CHOICES
# -- if one letter, assign -> corresponding choice ie. 'r' -> 'rock' etc
# -- elif two letters, based on last letter... 'c' -> 'scissors', 'p' -> 'spock'
# - return 'user_choice' as is

import random

VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

def prompt(message):
    print(f"==> {message}")

def check_then_return_input(choice):
    if len(choice) <= 2:
        match choice:
            case 'r':
                choice = "rock"
            case 'p':
                choice = "paper"
            case 'l':
                choice = "lizard"
            case 'sc':
                choice = "scissors"
            case 'sp':
                choice = "spock"

    return choice

def display_winner(choice, computer_choice):
    prompt(f"You chose {choice} and the computer chose {computer_choice}")

    if ((choice == "rock" and (computer_choice == "scissors" or
                               computer_choice == "lizard")) or
        (choice == "paper" and (computer_choice == "rock" or
                                computer_choice == "spock")) or
        (choice == "scissors" and (computer_choice == "paper" or
                                   computer_choice == "lizard")) or
        (choice == "lizard" and (computer_choice == "spock" or
                                 computer_choice == "paper")) or
        (choice == "spock" and (computer_choice == "scissors" or
                                computer_choice == "rock"))):
        prompt("You win!")
    elif ((computer_choice == "rock" and (choice == "scissors" or
                                          choice == "lizard")) or
        (computer_choice == "paper" and (choice == "rock" or
                                         choice == "spock")) or
        (computer_choice == "scissors" and (choice == "paper" or
                                            choice == "lizard")) or
        (computer_choice == "lizard" and (choice == "spock" or
                                          choice == "paper")) or
        (computer_choice == "spock" and (choice == "scissors" or
                                         choice == "rock"))):
        prompt("Computer wins!")
    else:
        prompt("It's a tie")

while True:
    prompt((f"""From the choices {', '.join(VALID_CHOICES)}... 
    Type the name, the first letter or first two letters
    of the name if choosing 'scissors' or 'spock'!
    """))
    choice = check_then_return_input(input())

    while choice not in VALID_CHOICES:
        prompt("Please try again:")
        choice = check_then_return_input(input())

    computer_choice = random.choice(VALID_CHOICES)

    display_winner(choice, computer_choice)

    while True:
        prompt("Would you like to play again? (y/n):")
        answer = input().casefold()

        if answer.startswith('n') or answer.startswith('y'):
            break
        else:
            prompt("That's not a valid choice. Please, try again.")

    if answer[0] == 'n':
        break