class Board:
    # SPIKE
    def __init__(self):
        # STUB
        '''
        initialize an empty board where each square corresponds
        to a number in a list of available choices
        '''
        pass

class Player:
    pass

class Human(Player):
    pass

class Computer(Player):
    pass

class TTTGame:
    def play(self):
        # SPIKE
        self.display_welcome_message()

        while True:
            self.display_board()

            self.first_player_moves()
            if self.is_game_over():
                break

            self.second_player_moves()
            if self.is_game_over():
                break
        
        self.display_board()
        self.display_results()
        self.display_goodbye_message()