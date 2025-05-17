import random
import os

def clear_screen():
    if os.name == 'posix':
        os.system('clear')
    else:
        os.system('cls')

class Square:
    INITIAL_MARKER = " "
    HUMAN_MARKER = "X"
    COMPUTER_MARKER = "O"

    def __init__(self, marker=INITIAL_MARKER):
        self.marker = marker

    def __str__(self):
        return self.marker

    @property
    def marker(self):
        return self._marker

    @marker.setter
    def marker(self, marker):
        self._marker = marker

    def is_unused(self):
        return self.marker == Square.INITIAL_MARKER

class Board:
    def __init__(self):
        self.reset()
    
    def reset(self):
        self.squares = {key: Square() for key in range(1, 10)}

    def display(self):
        print()
        print("     |     |")
        print(f"  {self.squares[1]}  |"
              f"  {self.squares[2]}  |"
              f"  {self.squares[3]}")
        print("     |     |")
        print("-----+-----+-----")
        print("     |     |")
        print(f"  {self.squares[4]}  |"
              f"  {self.squares[5]}  |"
              f"  {self.squares[6]}")
        print("     |     |")
        print("-----+-----+-----")
        print("     |     |")
        print(f"  {self.squares[7]}  |"
              f"  {self.squares[8]}  |"
              f"  {self.squares[9]}")
        print("     |     |")
        print()

    def mark_square_at(self, key, marker):
        self.squares[key].marker = marker

    def unused_squares(self):
        return [key
                for key, square in self.squares.items()
                if square.is_unused()]

    def is_full(self):
        return len(self.unused_squares()) == 0

    def count_markers_for(self, player, keys):
        markers = [self.squares[key].marker for key in keys]
        return markers.count(player.marker)

    def display_with_clear(self):
        clear_screen()
        print("\n")
        self.display()

class Player:
    def __init__(self, marker):
        self.marker = marker
        self.score = 0

    @property
    def marker(self):
        return self._marker

    @marker.setter
    def marker(self, value):
        self._marker = value

    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, score):
        self._score = score

    def increment_score(self):
        self.score += 1

class Human(Player):
    def __init__(self):
        super().__init__(Square.HUMAN_MARKER)

class Computer(Player):
    def __init__(self):
        super().__init__(Square.COMPUTER_MARKER)

class TTTGame:
    MATCH_GOAL = 3
    POSSIBLE_WINNING_ROWS = {
        (1, 2, 3),  # top row of board
        (4, 5, 6),  # center row of board
        (7, 8, 9),  # bottom row of board
        (1, 4, 7),  # left column of board
        (2, 5, 8),  # middle column of board
        (3, 6, 9),  # right column of board
        (1, 5, 9),  # diagonal: top-left to bottom-right
        (3, 5, 7),  # diagonal: top-right to bottom-left
    }

    def __init__(self):
        self.board = Board()
        self.human = Human()
        self.computer = Computer()

    @staticmethod # doesn't require any information from the class or others
    def _join_or(choices_list, seperator=', ', conjunction='or'):
        if len(choices_list) == 1:
            return choices_list[0]

        if len(choices_list) == 2:
            return f"{choices_list[0]} {conjunction} {choices_list[1]}"

        list_for_joining = []

        for idx, item in enumerate(choices_list):
            if idx == len(choices_list) - 1:
                list_for_joining.append(f"{conjunction} {item}")
            else:
                list_for_joining.append(f"{item}{seperator}")

        return ''.join(list_for_joining)

    @staticmethod
    def _play_again():
        print()
        print("Play again? (y/n)")

        while True:
            user_input = input()
            if user_input in {'y', 'n', 'Y', 'N'}:
                break

            print("Please enter a valid choice: (y/n)")

        clear_screen()
        return user_input == 'y'
    
    def play_one_game(self):
        self.board.reset()
        self.board.display()

        while True:
            self.human_moves()
            if self.is_game_over():
                self.update_score()
                break

            self.computer_moves()
            if self.is_game_over():
                self.update_score()
                break

            self.board.display_with_clear()
        
        self.board.display_with_clear()
        self.display_score()
        self.display_results()
    
    def play_match(self):
        print("Win 3 games to win the MATCH!")
        while True:
            self.play_one_game()
            if self.match_won() or not TTTGame._play_again():
                break

            print("Let's play again!")
            print()

        self.display_match_results()

    def play(self):
        self.display_welcome_message()
        self.play_match()
        self.display_goodbye_message()

    def display_welcome_message(self):
        clear_screen()
        print("Welcome to Tic Tac Toe!")
        print()

    def display_goodbye_message(self):
        print("Thanks for playing Tic Tac Toe! Goodbye!")

    def display_results(self):
        if self.is_winner(self.human):
            print("You won! Congratulations!")
        elif self.is_winner(self.computer):
            print("The Computer won! You lose!")
        else:
            print("The game is a tie!")

    def display_score(self):
        print("---------------\n"
              "** GAMES WON **\n"
              "---------------")
        print(f"Human:    {self.human.score}")
        print(f"Computer: {self.computer.score}")
        print()

    def display_match_results(self):
        if self.match_winner(self.human):
            print(f"----------------\n"
                  f"HUMAN WINS MATCH\n"
                  f"----------------")
        elif self.match_winner(self.computer):
            print(f"-------------------\n"
                  f"COMPUTER WINS MATCH\n"
                  f"-------------------")

    def human_moves(self):
        valid_choices = self.board.unused_squares()
        while True:
            choices_list = [str(choice) for choice in valid_choices]
            choices_str = TTTGame._join_or(choices_list)
            prompt = f"Choose a square ({choices_str}): "
            choice = input(prompt)

            try:
                choice = int(choice)
                if choice in valid_choices:
                    break
            except ValueError:
                pass

            print("Sorry, that's not a valid choice.")
            print()

        self.board.mark_square_at(choice, self.human.marker)

    def computer_moves(self):
        choice = self.computer_critical_move()

        if not choice:
            choice = self.pick_center_square()
        if not choice:
            choice = self.pick_random_square()

        self.board.mark_square_at(choice, self.computer.marker)

    def find_the_right_square(self, row, player_marker):
        occupied = set()

        for square in row:
            if self.board.squares[square].marker == player_marker:
                occupied.add(square)

                if len(occupied) == 2:
                    difference = set(row) - occupied
                    select_square = list(difference)

                    if self.board.squares[select_square[0]].is_unused():
                        return select_square.pop()

        return None

    def computer_critical_move(self):
        for row in TTTGame.POSSIBLE_WINNING_ROWS:
            aggressive = self.find_the_right_square(row, self.computer.marker)
            defensive = self.find_the_right_square(row, self.human.marker)
            choice = aggressive or defensive

            if choice:
                return choice
        
        return None

    def pick_center_square(self):
        return 5 if self.board.squares[5].is_unused() else None

    def pick_random_square(self):
        valid_choices = self.board.unused_squares()
        return random.choice(valid_choices)

    def is_game_over(self):
        return self.board.is_full() or self.someone_won()

    def three_in_a_row(self, player, row):
        return self.board.count_markers_for(player, row) == 3

    def someone_won(self):
        return (self.is_winner(self.human) or
                self.is_winner(self.computer))

    def is_winner(self, player):
        for row in TTTGame.POSSIBLE_WINNING_ROWS:
            if self.three_in_a_row(player, row):
                return True

        return False

    def update_score(self):
        if self.is_winner(self.human):
            self.human.increment_score()
        elif self.is_winner(self.computer):
            self.computer.increment_score()

    def match_won(self):
        return (self.human.score == TTTGame.MATCH_GOAL or
                self.computer.score == TTTGame.MATCH_GOAL)

    def match_winner(self, player):
        return player.score == TTTGame.MATCH_GOAL

game = TTTGame()
game.play()