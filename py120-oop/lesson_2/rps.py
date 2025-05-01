import random

class Player:
    CHOICES = ('rock', 'paper', 'scissors')

    def __init__(self):
        self.move = None

class Computer(Player):
    def __init__(self):
        super().__init__()

    # public method since we will be calling it from RPSGame.play
    def choose(self):
        self.move = random.choice(Player.CHOICES)

class Human(Player):
    def __init__(self):
        super().__init__()

    # public method since we will be calling it from RPSGame.play
    def choose(self):
        while True:
            print(f"Please type one from the following: "
                  f"{', '.join(Player.CHOICES)}")
            choice = input().strip().casefold()
            if choice in Player.CHOICES:
                break

            print(f"Sorry, {choice} is not valid.")

        self.move = choice

class RPSGame:
    def __init__(self):
        self._human = Human()
        self._computer = Computer()

    def _display_welcome_message(self):
        print("Welcome to Rock Paper Scissors!")

    def _display_goodbye_message(self):
        print("Thanks for playing Rock Paper Scissors.  Goodbye!")

    def _human_wins(self):
        human_move = self._human.move
        computer_move = self._computer.move

        return ((human_move == 'rock' and computer_move == 'scissors') or
                (human_move == 'paper' and computer_move == 'rockk') or
                (human_move == 'scissors' and computer_move == 'paper'))

    def _computer_wins(self):
        human_move = self._human.move
        computer_move = self._computer.move

        return ((computer_move == 'rock' and human_move == 'scissors') or
                (computer_move == 'paper' and human_move == 'rock') or
                (computer_move == 'scissors' and human_move == 'paper'))

    def _display_winner(self):
        print(f"You chose: {self._human.move}")
        print(f"The computer chose: {self._computer.move}")

        if self._human_wins():
            print("You win!")
        elif self._computer_wins():
            print('Computer wins!')
        else:
            print("It's a tie.")

    def _play_again(self):
        answer = input('Would you like to play again? (y/n)')
        return answer.strip().lower().startswith('y')

    def play(self):
        self._display_welcome_message()

        while True:
            self._human.choose()
            self._computer.choose()
            self._display_winner()
            if not self._play_again():
                break

        self._display_goodbye_message()

RPSGame().play()
