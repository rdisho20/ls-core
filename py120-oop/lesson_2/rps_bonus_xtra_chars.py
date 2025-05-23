'''
Human chooses opponent (Computer, R2D2, HAL, Daneel, Random)
RPSGame SETS opponent
Random selects from computer dict values which are class instances

Human asked to input opponent name
    whichever name input is the dict key to value
    return key value (a string)

SET _computer in engine to correct value using key chosen by Human player
(where instantiate computer objects?)

Human choses key seperate method, RPSGame sets variable using key

'''

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
        print(all_history)
    
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
        for idx in range(len(OPTIONS)):
            if idx == len(OPTIONS) - 1:
                print(OPTIONS[idx])
                break

            print(OPTIONS[idx], end=", ")
        
        while True:
            choice = input().strip().lower()

            for name in OPTIONS:
                if choice in name.lower():
                    return name

            print("Please make a valid selection.")

    def choose(self):
        moves = list(Player.CHOICES.keys())

        while True:
            print(f"Please type one from the following: ", end="")

            for idx in range(len(moves)):
                if idx == len(moves) - 1:
                    print(moves[idx])
                    break

                print(f"{moves[idx]}", end=', ')

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
            elif answer.strip().lower().startswith('n'):
                print()
                return False
            else:
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

'''
THOUGHT PROCESSES:

Move class w/ 5 additional classes (1 for each move)

The Move class is to handle each move
Moves can be chosesn from... rock, paper, scissors, spock, lizard
    Initialized state 

    Move as a collaborater of Player, because Player has a Move to make
    
To handle a winner, instantiate objects for each move class, to check winner or loser
    
Each move... HAS-A name and its victims (and a state of being chosen or not)
    Initialized state
        defeats
        who it beats / is stronger than...
            ie 'scissors' beats ['paper', 'lizard']

WHERE to initialize moves? AND only initialize ONCE

Player
    chooses their move
    move object assigned to player instance variable 'move'
    
    Checking if win
        if computer's choice is in human's choice 'move.defeats' variable
            WIN

Players state would include
    A move class as its move state
    The player makes a choice, checked against the name of objects in CHOICES
        A player's move state is updated to reflect its choice

        Re: Move class w/ 5 additional classes (1 for each move)

The code could change as follows:
Move class would process the move, where the Computer or Player
would make the choice, which is processed through the move class
using the possible choice classes which collaborate w/ Move class
    Doesn't seems like a good design choice, as it less intuitive
    However, it may be more easily maintainable... not sure

OR In the case of current code, it changes such that Move only holds state
because Move fits better as noun than verb in this case, so it processing anything
doesn't make sense. Player still process a move since the player makes the choice.
    This arrangement could be considered a better design choice because
    it makes the code more declarative, especially when determining the winners of each game
    as opposed to using 'values' of a dict 'key' to check if another dict 'key' is in the values...

    Process determining winner in Move instead of Player now, which makes code even
    more declarative and better ogranized

MOVE history
Player has a move therefore move history, so the player class can store history for
its subclasses Human and Computer...

Move inherently has meaning so by its nature can process a loss/victory,
however a move cannot add itself to a move history... a Player would do that
since the player can add and erase from its history, or the Engine could process
history OR data modification...

Build out class variable in the Engine for storing history from
each player's move, then display the move history during the game flow
this should yield cleaner code

Xtra Computer character Daneel
Need access to previous human choice
    human choice is an instance variable of the Human() object
    instantiated in the RPSGame engine class...
    ...need to find different place to store histories to keep code declarative

At beginning of the game, Human first gets to choose his opponent
    Computer, Hal, R2D2, Daneel

Reset move histories at the end of each game

Player adds to move history
    (USE dictionary for more declarative code when displaying)
    Each time move added, update all history in Player class
Engine displays move history

Player clears own move history, because RPSGame told it to
RPSGame will clear the Player class history as game master

'''

