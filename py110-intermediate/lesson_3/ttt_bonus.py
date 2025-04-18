import os
import random
import pdb


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


def determine_starting_player():
    first_player_choice = input().strip().lower()

    if first_player_choice == 'c':
        return COMPUTER

    elif first_player_choice == 'p':
        return PLAYER

    elif first_player_choice == 'r':
        return random.choice([PLAYER, COMPUTER])

    return None


def alternate_player(current_player):
    if current_player == PLAYER:
        return COMPUTER

    return PLAYER


def display_match_starting_player(match_starting_player):
    print(f"Match starting player: {match_starting_player}")


def alt_match_start_player(match_starting_player, player_win_count,
                           computer_win_count, matches_played, board):
    match_count = player_win_count['match'] + computer_win_count['match']

    if (all(square == INITIAL_MARKER for square in board.values())):
        if match_count == 0 and matches_played == 0:
            return match_starting_player

        elif match_count % 2 == 1 and matches_played == 0:
            return alternate_player(match_starting_player)

        elif match_count % 2 == 0 and matches_played == 0:
            return alternate_player(match_starting_player)
        
        return match_starting_player


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


def join_or(choice_list, delim=', ', and_or='or'):
    result_list = []

    for idx, square in enumerate(choice_list):
        if idx == len(choice_list) - 2:
            result_list.append(str(square))
            result_list.append(f" {and_or} ")

        elif idx == len(choice_list) - 1:
            result_list.append(str(square))
            break

        else:
            result_list.append(str(square))
            result_list.append(delim)

    return ''.join(result_list)


def find_the_right_square(board, line, player_marker):

    # check if the squares in 'line' == player_choice ('X' or 'O')
    # If so then add that square to the set 'occupied' and 
    # check the 'difference' between sets 'line' & 'occupied'
    # if 'select_square' (difference) is marked ' '
    # return popped 'select_square[0]'
    # Otherwise: return None

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
        '''set board[5] to computer marker if available
        and if there is no 'at risk' or 'winning' square
        '''
        if board[5] == INITIAL_MARKER:
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
            return PLAYER
        elif (board[sq1] == COMPUTER_MARKER
                and board[sq2] == COMPUTER_MARKER
                and board[sq3] == COMPUTER_MARKER):
            return COMPUTER

    return None


def increment_wins(board, player_win_count, computer_win_count):
    game_winner = detect_winner(board)

    if game_winner == PLAYER:
        player_win_count['game'] += 1
        player_win_count['total_game_wins'] += 1

        if player_win_count['game'] == WINS_NEEDED:
            player_win_count['match'] += 1

    elif game_winner == COMPUTER:
        computer_win_count['game'] += 1
        computer_win_count['total_game_wins'] += 1

        if computer_win_count['game'] == WINS_NEEDED:
            computer_win_count['match'] += 1


def display_win_records(player_win_count, computer_win_count):
    print(f"--Player wins--\n"
          f"GAMES: {player_win_count['game']}\n"
          f"TOTAL GAMES: {player_win_count['total_game_wins']}\n"
          f"\n"
          f"--Computer wins--\n"
          f"GAMES: {computer_win_count['game']}\n"
          f"TOTAL GAMES: {computer_win_count['total_game_wins']}\n"
          f"\n"
          f"--MATCHES WON--\n"
          f"Player: {player_win_count['match']}\n"
          f"Computer: {computer_win_count['match']}\n")


def reset_game_scores(player_win_count, computer_win_count):
    if WINS_NEEDED in (player_win_count['game'], computer_win_count['game']):
        player_win_count['game'] = 0
        computer_win_count['game'] = 0


def modify_matches_played(player_win_count,
                          computer_win_count,
                          matches_played):
    total_games = player_win_count['game'] + computer_win_count['game']

    if total_games == 0:
        return 0
    else:
        return matches_played + 1


def is_match_over(player_wins, computer_wins, games_played):
    return (player_wins >= 3 or 
            computer_wins >= 3 or 
            games_played >= 5)


def start_next_game(games_played):
    print("DEBUG - START NEXT GAME?")
    prompt(f"Ready for Game {games_played + 1}? (y or n)")
    while True:
        answer = input().strip().lower()

        match answer:
            case 'y':
                return True
            case 'n':
                prompt("Whenever you are ready type 'y' or 'n':")
            case _:
                prompt("Please try either 'y' or 'n':")


def start_next_match_or_quit(matches_played):
    prompt(f"Want to play Match {matches_played + 1}, "
           f"or would you like to quit? (y)es or (q)uit")
    while True:
        answer = input().strip().lower()

        match answer:
            case 'y':
                return True
            case 'q':
                return False
            case _:
                prompt("Please try either 'y' or 'q':")


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
        'total_game_wins': 0
    }

    computer_win_count = {
        'game': 0,
        'match': 0,
        'total_game_wins': 0,
    }

    matches_played = 0

    current_player = None

    # Who's first? EXTRACT ALL this to it's own function
    prompt("Who should play first?\n"
           "Type 'p' for player, 'c' for computer or 'r' for random:")
    while True:
        match_starting_player = determine_starting_player()
        current_player = match_starting_player

        if match_starting_player:
            break

        prompt("Please type 'p', 'c' or 'r':")

    # MATCH INITIALIZATION & MATCH PLAYER CHECK BEYOND FIRST MATCH
    while True:
        board = initialize_board()

        games_played = 0
        match_starting_player = alt_match_start_player(match_starting_player,
                                                       player_win_count,
                                                       computer_win_count,
                                                       matches_played,
                                                       board)
        # ensure current_player is match_starting_player
        # when starting new match
        if current_player != match_starting_player:
            current_player = match_starting_player

        while True:
            board = initialize_board()

            # ALTERNATE PLAYER EACH GAME IN MATCH
            if (games_played % 2 == 1
                and current_player == match_starting_player):
                current_player = alternate_player(current_player)
            else:
                current_player = match_starting_player

            # Gameplay
            while True:
                display_board(board)
                display_match_starting_player(match_starting_player)
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

            games_played += 1

            if not is_match_over(computer_win_count['game'],
                                 player_win_count['game'],
                                 games_played):
                if start_next_game(games_played):
                    continue

            if (computer_win_count['game'] == 3 or
                player_win_count['game'] == 3 or
                games_played == 5):
                matches_played = modify_matches_played(player_win_count,
                                                       computer_win_count,
                                                       matches_played)
                # CHECK BELOW FUNCTION... MATCH LOOP NEEDS ADJUSTING
                if start_next_match_or_quit(matches_played):
                    reset_game_scores(player_win_count, computer_win_count)
                    break

        if not play_again():
            break

    prompt("Thanks for playing Tic Tac Toe!")


play_tic_tac_toe()