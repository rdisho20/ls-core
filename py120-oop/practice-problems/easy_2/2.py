class Game:
    count = 0

    def __init__(self, type):
        self.type = type
        Game.count += 1

    def play(self):
        return f"Start the {self.type} game!"

class Bingo(Game):
    def __init__(self, type, player_name):
        super().__init__(type)
        self.player_name = player_name

class Scrabble(Game):
    def __init__(self, type, player_name1, player_name2):
        super().__init__(type)
        self.player_name1 = player_name1
        self.player_name2 = player_name2

bingo = Bingo('Bingo', 'Bill')
print(Game.count)
print(bingo.play())
print(bingo.player_name)

scrabble = Scrabble('Scrabble', 'Jill', 'Sill')
print(Game.count)
print(scrabble.play())
print(scrabble.player_name1)
print(scrabble.player_name2)
print(scrabble.player_name)