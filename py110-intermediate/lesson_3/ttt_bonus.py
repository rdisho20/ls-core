import os
import pdb
import random


INITIAL_MARKER = ' '
HOOMAN_MARKER = 'X'
COMPUTER_MARKER = 'O'
PLAYER = 'player'
COMPUTER = 'computer'
WINS_NEEDED = 3         # 5 games way too long

# using set so that AI has element of randomness
WINNING_LINES = {
    (1, 2, 3), (4, 5, 6), (7, 8, 9),    # rows
    (1, 4, 7), (2, 5, 8), (3, 6, 9),    # columns
    (1, 5, 9), (3, 5, 7)                # diagonals
}


def prompt(msg):
    print(f"===> {msg}")


def determine_starting_player(first_player_choice):
    if first_player_choice == 'computer':
        return COMPUTER

    elif first_player_choice == 'player':
        return PLAYER

    elif first_player_choice == 'choose':
        RANDOM_PLAYER = (PLAYER, COMPUTER)
        return random.choice(RANDOM_PLAYER)
    
    return None


def terminal_clear():
    if os.name == 'posix':
        os.system('clear')
    else:
        os.system('cls')


def display_board(board):
    terminal_clear()

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


def valid_choices(board):
    return [str(num) for num in empty_squares(board)]


def join_or(valid_choices, delim=', ', and_or='or'):
    result_list = []

    for idx, square in enumerate(valid_choices):
        if idx == len(valid_choices) - 2:
            result_list.append(str(square))
            result_list.append(f" {and_or} ")

        elif idx == len(valid_choices) - 1:
            result_list.append(str(square))
            break

        else:
            result_list.append(str(square))
            result_list.append(delim)

    return ''.join(result_list)


def find_the_right_square(board, line, player_marker):
    ''' 
    check if the squares in 'line' == player_choice ('X' or 'O')
    If so then add that square to the set 'occupied' and 
    check the 'difference' between sets 'line' & 'occupied'
    if 'select_square' (difference) is marked ' '
    return popped 'select_square[0]'
    Otherwise: return None
    '''
    occupied = set()

    for square in line:
        if board[square] == player_marker:
            occupied.add(square)

            if len(occupied) == 2:
                difference = set(line) - occupied
                select_square = list(difference)

                if board[select_square[0]] == INITIAL_MARKER:
                    return select_square.pop()

    return None


def choose_square(board, current_player):
    if current_player == PLAYER:
        player_chooses_square(board)
    else:
        computer_chooses_square(board)
        display_board(board)


def alternate_player(current_player):
    if current_player == PLAYER:
        return COMPUTER
    
    return PLAYER


def player_chooses_square(board):
    while True:
        valid_choices(board)
        prompt(f"Choose a square ({join_or(valid_choices(board))}):")
        square = input().strip()
        if square in valid_choices(board):
            break

        prompt("Sorry, that's not a valid choice.")
    
    board[int(square)] = HOOMAN_MARKER


def computer_chooses_square(board):
    if len(empty_squares(board)) == 0:
        return # If gaurd clause

    square = None
    
    # Offense first
    for line in WINNING_LINES:
        square = find_the_right_square(board, line, COMPUTER_MARKER)
        if square:
            break
    
    # Defense last
    if not square:
        for line in WINNING_LINES:
            square = find_the_right_square(board, line, HOOMAN_MARKER)
            if square:
                break
        ''' 
        set board[5] to computer marker if available
        and if there is no 'at risk' or 'winning' square
        '''
        if not square and board[5] == INITIAL_MARKER:
            board[5] = COMPUTER_MARKER
            return
        elif not square:
            square = random.choice(empty_squares(board))

    board[square] = COMPUTER_MARKER


def board_full(board):
    return len(empty_squares(board)) == 0


def someone_won(board):
    return bool(detect_winner(board))


def detect_winner(board):
    for line in WINNING_LINES:  # to check board state for specific line
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


def increment_wins(board, player_win_count, computer_win_count):
    if detect_winner(board) == 'Player':
        player_win_count['game'] += 1

        if player_win_count['game'] == WINS_NEEDED:
            player_win_count['match'] += 1

    elif detect_winner(board) == 'Computer':
        computer_win_count['game'] += 1

        if computer_win_count['game'] == WINS_NEEDED:
            computer_win_count['match'] += 1


def display_win_records(player_win_count, computer_win_count):
    print(f"Player wins: {player_win_count['game']}\n"
          f"Computer wins: {computer_win_count['game']}\n"
          f"\n"
          f"Matches Won:\n"
          f"Player: {player_win_count['match']}\n"
          f"Computer: {computer_win_count['match']}\n")


def reset_game_scores(player_win_count, computer_win_count):
    if (player_win_count['game'] == WINS_NEEDED or
        computer_win_count['game'] == WINS_NEEDED):
        player_win_count['game'] = 0
        computer_win_count['game'] = 0


def play_again():
    prompt("Play again? (y or n)")
    while True:
        answer = input().strip().lower()

        match answer:
            case 'y':
                return True
            case 'n':
                return False
            case _:
                prompt("Please try either 'y' or 'n':")


def play_tic_tac_toe():
    player_win_count = {
        'game': 0,
        'match': 0,
    }

    computer_win_count = {
        'game': 0,
        'match': 0,
    }

    current_player = None

    while True:
        board = initialize_board()

        # Who's first?
        while True:
            prompt(f"Who should play first?\n"
                   f"Type 'player', 'computer' or 'choose':")
            first_player_choice = input().strip().lower()
            current_player = determine_starting_player(first_player_choice)

            if current_player:
                break

            prompt("Please type 'player', 'computer' or 'choose:")

        # Gameplay
        while True:
            display_board(board)
            choose_square(board, current_player)
            current_player = alternate_player(current_player)

            if someone_won(board) or board_full(board):
                break
                
        display_board(board)
        
        if someone_won(board):
            prompt(f"{detect_winner(board)} won!")
        else:
            prompt("It's a tie, my guy!")
        
        increment_wins(board, player_win_count, computer_win_count)

        display_win_records(player_win_count, computer_win_count)

        reset_game_scores(player_win_count, computer_win_count)

        if not play_again():
            break
    
    prompt("Thanks for playing Tic Tac Toe!")


play_tic_tac_toe()