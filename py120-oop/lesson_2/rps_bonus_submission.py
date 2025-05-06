import random

class Move:
    def __init__(self, name, defeats):
        self.name = name
        self.defeats = defeats

    def beats(self, loser):
        return loser in self.defeats

class Rock(Move):
    def __init__(self):
        super().__init__('rock', ['lizard', 'scissors'])

class Paper(Move):
    def __init__(self):
        super().__init__('paper', ['rock', 'spock'])

class Scissors(Move):
    def __init__(self):
        super().__init__('scissors', ['paper', 'lizard'])

class Lizard(Move):
    def __init__(self):
        super().__init__('lizard', ['spock', 'paper'])

class Spock(Move):
    def __init__(self):
        super().__init__('spock', ['scissors', 'rock'])


class Player:
    CHOICES = {
        'rock': Rock(), 'paper': Paper(), 'scissors': Scissors(),
        'lizard': Lizard(), 'spock': Spock()
    }
    COMPUTER_OPTIONS = ('Computer', 'R2D2', 'HAL', 'Daneel', 'Random')

    all_moves_history = {}

    def __init__(self, name):
        self.name = name
        self.move = None
        self.score = 0
        self.move_history = {}

    def update_move_history(self):
        all_history = Player.all_moves_history.setdefault(self.name, {})
        self.move_history[len(self.move_history) + 1] = self.move.name
        all_history.update(self.move_history)

    def reset_score(self):
        self.score = 0

    def reset_move_history(self):
        self.move_history = {}

    @classmethod
    def reset_all_moves_history(cls):
        cls.all_moves_history = {}

class Computer(Player):
    def __init__(self):
        super().__init__(name='Computer')

    def choose(self):
        choice = random.choice(list(Player.CHOICES.keys()))
        self.move = Player.CHOICES[choice]

class R2D2(Computer):
    def __init__(self):
        super().__init__()

    def choose(self):
        self.move = Player.CHOICES['rock']

class HAL(Computer):
    def __init__(self):
        super().__init__()

    def choose(self):
        choice = random.choices(list(Player.CHOICES.keys()), [1, 1, 5, 1, 1])
        self.move = Player.CHOICES[''.join(choice)]

class Daneel(Computer):
    def __init__(self):
        super().__init__()

    def choose(self):
        if not Player.all_moves_history:
            choice = random.choice(list(Player.CHOICES.keys()))
        else:
            human_history = list(Player.all_moves_history['Human'].values())
            choice = human_history[-1]

        self.move = Player.CHOICES[choice]

class Human(Player):
    def __init__(self):
        super().__init__(name='Human')

    def choose_opponent(self):
        OPTIONS = Player.COMPUTER_OPTIONS

        print("Choose your opponent from the following: ", end="")
        for idx, opponent in enumerate(OPTIONS):
            if idx == len(OPTIONS) - 1:
                print(opponent)
                break

            print(opponent, end=", ")

        while True:
            choice = input().strip().lower()

            for name in OPTIONS:
                if choice in name.lower():
                    return name

            print("Please make a valid selection.")

    def choose(self):
        moves = list(Player.CHOICES.keys())

        while True:
            print("Please type one from the following: ", end="")

            for idx, move in moves:
                if idx == len(moves) - 1:
                    print(move)
                    break

                print(f"{move}", end=', ')

            choice = input().strip().casefold()

            if choice in moves:
                break

            print(f"Sorry, {choice} is not valid.")

        self.move = Player.CHOICES[choice]


class RPSGame:
    MAX_WINS = 3

    def __init__(self):
        self._human = Human()
        self._computer = None
        self._opponents = {
            'Computer': Computer(),
            'R2D2': R2D2(),
            'HAL': HAL(),
            'Daneel': Daneel(),
        }

    def _display_welcome_message(self):
        print("Welcome to Rock Paper Scissors!\n")

    def _display_goodbye_message(self):
        print("Thanks for playing Rock Paper Scissors. Goodbye!")

    def _get_opponent(self):
        return self._opponents.get(self._human.choose_opponent())

    def _get_random_opponent(self):
        return self._opponents[random.choice(list(self._opponents.keys()))]

    def _set_chosen_opponent(self):
        self._computer = self._get_opponent()

        if not self._computer:
            self._computer = self._get_random_opponent()

    def _get_computer_name(self):
        return self._computer.__class__.__name__

    def _display_move_history(self):
        if not Player.all_moves_history:
            return

        human_history = [f'{number}) {move_name}'
                         for number, move_name
                         in Player.all_moves_history['Human'].items()]
        computer_history = [f'{number}) {move_name}'
                            for number, move_name
                            in Player.all_moves_history['Computer'].items()]

        print(f"Human moves: {', '.join(human_history)}")
        print(f"Computer moves: {', '.join(computer_history)}\n")

    def _human_wins(self):
        human_move = self._human.move
        computer_move = self._computer.move

        return human_move.beats(computer_move.name)

    def _human_wins_match(self):
        return self._human.score == RPSGame.MAX_WINS

    def _computer_wins(self):
        human_move = self._human.move
        computer_move = self._computer.move

        return computer_move.beats(human_move.name)

    def _computer_wins_match(self):
        return self._computer.score == RPSGame.MAX_WINS

    def _tally_score(self):
        if self._human_wins():
            self._human.score += 1
        elif self._computer_wins():
            self._computer.score += 1

    def _display_winner(self):
        print(f"You chose: {self._human.move.name}")
        print(f"{self._get_computer_name()} chose: {self._computer.move.name}")

        if self._human_wins():
            print("You win the game!\n")
        elif self._computer_wins():
            print(f'{self._get_computer_name()} wins the game!\n')
        else:
            print("It's a tie.\n")

    def _display_score(self):
        print(f'Human score: {self._human.score}')
        print(f'{self._get_computer_name()} score: {self._computer.score}\n')

    def _display_match_winner(self):
        if self._human_wins_match():
            print("You win the match!\n")
        elif self._computer_wins_match():
            print(f"You lose! {self._get_computer_name()} wins the match!\n")

    def _reset_move_history(self):
        self._human.move_history = {}
        self._computer.move_history = {}
        Player.all_moves_history = {}

    def _play_again(self):
        while True:
            answer = input('Would you like to play again? (y/n) ')

            if answer.strip().lower().startswith('y'):
                print()
                break
            if answer.strip().lower().startswith('n'):
                print()
                return False

            print('Please try again.')

        return True

    def play(self):
        self._display_welcome_message()

        while True:
            self._set_chosen_opponent()
            print(f"Your opponent: {self._get_computer_name()}")

            while True:
                self._display_move_history()

                self._human.choose()
                self._computer.choose()
                self._human.update_move_history()
                self._computer.update_move_history()

                self._tally_score()
                self._display_winner()
                self._display_score()

                if self._computer_wins_match() or self._human_wins_match():
                    break

            self._display_match_winner()

            self._human.reset_score()
            self._computer.reset_score()
            self._human.reset_move_history()
            self._computer.reset_move_history()
            Player.reset_all_moves_history()

            if not self._play_again():
                break

        self._display_goodbye_message()

RPSGame().play()