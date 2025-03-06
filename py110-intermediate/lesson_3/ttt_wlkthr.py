import os
import pdb
import random
#pdb.set_trace()


INITIAL_MARKER = ' '
HOOMAN_MARKER = 'X'
COMPUTER_MARKER = 'O'


def prompt(msg):
    print(f"===> {msg}")


def display_board(board):
    os.system('clear')

    prompt(f"You are {HOOMAN_MARKER}. Computer is {COMPUTER_MARKER}.")
    print('')
    print('     |     |')
    print(f'  {board[1]}  |  {board[2]}  |  {board[3]}')
    print('     |     |')
    print('-----+-----+-----')
    print('     |     |')
    print(f'  {board[4]}  |  {board[5]}  |  {board[6]}')
    print('     |     |')
    print('-----+-----+-----')
    print('     |     |')
    print(f'  {board[7]}  |  {board[8]}  |  {board[9]}')
    print('     |     |')
    print('')


def initialize_board():
    return {square: INITIAL_MARKER for square in range(1,10)}

# valid square choices are those board keys whose values are spaces
def empty_squares(board):
    return [key for key, value in board.items() if value == INITIAL_MARKER]


def player_chooses_square(board):
    while True:
        valid_choices = [str(num) for num in empty_squares(board)]
        prompt(f"Choose a square ({', '.join(valid_choices)})")
        square = input().strip()
        if square in valid_choices:
            break # break if valid square

        prompt("Sorry, that's not a valid choice.") # guard clause ∵ have 'else' statement
    
    board[int(square)] = HOOMAN_MARKER


def computer_chooses_square(board):
    if len(empty_squares(board)) == 0:
        return # If gaurd clause
    square = random.choice(empty_squares(board))
    board[square] = COMPUTER_MARKER


def board_full(board):
    return len(empty_squares(board)) == 0


def someone_won(board):
    return bool(detect_winner(board))


def detect_winner(board):
    winning_lines = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],    # rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9],    # columns
        [1, 5, 9], [3, 5, 7]                # diagonals
    ]

    for line in winning_lines:              # to check board state for specific line
        sq1, sq2, sq3 = line
        if (board[sq1] == HOOMAN_MARKER
                and board[sq2] == HOOMAN_MARKER
                and board[sq3] == HOOMAN_MARKER):
            return 'Player'
        elif (board[sq1] == COMPUTER_MARKER
                and board[sq2] == COMPUTER_MARKER
                and board[sq3] == COMPUTER_MARKER):
            return 'Computer'

    return None


def play_tic_tac_toe():
    while True:
        board = initialize_board()

        while True:
            display_board(board)

            player_chooses_square(board)
            if someone_won(board) or board_full(board):
                break

            computer_chooses_square(board)
            if someone_won(board) or board_full(board):
                break

        display_board(board)

        if someone_won(board):
            prompt(f"{detect_winner(board)} won!")
        else:
            prompt("It's a tie, my guy!")
        
        prompt("Play again? (y or n)")
        answer = input().strip().lower()

        if answer[0] != 'y':
            break
    
    prompt("Thanks for playing Tic Tac Toe!")


play_tic_tac_toe()