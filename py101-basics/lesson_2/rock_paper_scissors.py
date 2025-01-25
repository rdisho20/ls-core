import random

VALID_CHOICES = ['rock', 'paper', 'scissors']

def prompt(message):
    print(f"==> {message}")

def display_winner(choice, computer_choice):
    prompt(f"You chose {choice} and the computer chose {computer_choice}")

    if ((choice == "rock" and computer_choice == "scissors") or
        (choice == "paper" and computer_choice == "rock") or
        (choice == "scissors" and computer_choice == "paper")):
        prompt("You win!")
    elif ((choice == "rock" and computer_choice == "paper") or
        (choice == "paper" and computer_choice == "scissors") or
        (choice == "scissors" and computer_choice == "rock")):
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