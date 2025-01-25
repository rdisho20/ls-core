# Bonus Features
# given collection :: choices

import random

VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

def prompt(message):
    print(f"==> {message}")

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
    prompt(f"Choose one: {', '.join(VALID_CHOICES)}")
    choice = input()

    while choice not in VALID_CHOICES:
        prompt("Please try again:")
        choice = input()

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