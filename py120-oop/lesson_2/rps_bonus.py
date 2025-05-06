import random

class Player:
    CHOICES = ('rock', 'paper', 'scissors', 'lizard', 'spock')

    def __init__(self):
        self.move = None
        self.score = 0

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
    MAX_WINS = 3
    COMBOS = {
        'rock': ['lizard', 'scissors'],
        'paper': ['rock', 'spock'],
        'scissors': ['paper', 'lizard'],
        'lizard': ['spock', 'paper'],
        'spock': ['scissors', 'rock'],
    }

    def __init__(self):
        self._human = Human()
        self._computer = Computer()

    def _display_welcome_message(self):
        print("Welcome to Rock Paper Scissors!")

    def _display_goodbye_message(self):
        print("Thanks for playing Rock Paper Scissors. Goodbye!")

    def _human_wins(self):
        human_move = self._human.move
        computer_move = self._computer.move

        return ((human_move == 'rock' or human_move == 'paper'
                 or human_move == 'scissors' or human_move == 'spock'
                 or human_move == 'lizard')
                 and computer_move in RPSGame.COMBOS[human_move])
    
    def _human_wins_match(self):
        if self._human.score == RPSGame.MAX_WINS:
            return True
        
        return False

    def _computer_wins(self):
        human_move = self._human.move
        computer_move = self._computer.move

        return ((computer_move == 'rock' or computer_move == 'paper'
                 or computer_move == 'scissors' or computer_move == 'spock'
                 or computer_move == 'lizard')
                 and human_move in RPSGame.COMBOS[computer_move])
    
    def _computer_wins_match(self):
        if self._computer.score == RPSGame.MAX_WINS:
            return True
        
        return False
    
    def _tally_score(self):
        if self._human_wins():
            self._human.score += 1
        elif self._computer_wins():
            self._computer.score += 1

    def _display_winner(self):
        print(f"You chose: {self._human.move}")
        print(f"The computer chose: {self._computer.move}")

        if self._human_wins():
            print("You win the game!\n")
        elif self._computer_wins():
            print('Computer wins the game!\n')
        else:
            print("It's a tie.\n")

    def _display_match_winner(self):
        if self._human_wins_match():
            print("You win the match!\n")
        elif self._computer_wins_match():
            print("You lose! Computer wins the match!\n")
    
    def _reset_scores(self):
        self._human.score = 0
        self._computer.score = 0

    def _play_again(self):
        answer = input('Would you like to play again? (y/n) ')
        print()
        return answer.strip().lower().startswith('y')

    def play(self):
        self._display_welcome_message()

        while True:

            while True:
                self._human.choose()
                self._computer.choose()
                self._tally_score()
                self._display_winner()
                print(f'human score: {self._human.score}')
                print(f'computer score: {self._computer.score}')

                if self._computer_wins_match() or self._human_wins_match():
                    break
            
            self._display_match_winner()
            self._reset_scores()

            if not self._play_again():
                break

        self._display_goodbye_message()

RPSGame().play()
