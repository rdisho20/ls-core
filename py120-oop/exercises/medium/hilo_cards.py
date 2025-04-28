class Card:

    def __init__(self, rank, suit):
        self.scores = {
            2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
            'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14,
        }
        self.rank = rank
        self.suit = suit

    def __str__(self):
        return f"{self.rank} of {self.suit}"
    
    def __eq__(self, other):
        return self.get_card() == other.get_card()
    
    def __lt__(self, other):
        return self.get_value() < other.get_value()
    
    def get_value(self):
        return self.scores[self.rank]
    
    def get_card(self):
        return (self.rank, self.suit)

cards = [Card(2, 'Hearts'),
         Card(10, 'Diamonds'),
         Card('Ace', 'Clubs')]

print(min(cards) == Card(2, 'Hearts'))
print(max(cards) == Card('Ace', 'Clubs'))
print(str(min(cards)) == "2 of Hearts") # works
print(str(max(cards)) == "Ace of Clubs") # works

cards = [Card(5, 'Hearts')]
print(min(cards) == Card(5, 'Hearts'))
print(max(cards) == Card(5, 'Hearts'))
print(str(Card(5, 'Hearts')) == "5 of Hearts") # works

cards = [Card(4, 'Hearts'),
         Card(4, 'Diamonds'),
         Card(10, 'Clubs')]
print(min(cards).rank == 4)                        # True
print(max(cards) == Card(10, 'Clubs'))             # True
print(str(Card(10, 'Clubs')) == "10 of Clubs")     # True

cards = [Card(7, 'Diamonds'),
         Card('Jack', 'Diamonds'),
         Card('Jack', 'Spades')]
print(min(cards) == Card(7, 'Diamonds'))           # True
print(max(cards).rank == 'Jack')                   # True
print(str(Card(7, 'Diamonds')) == "7 of Diamonds") # True

cards = [Card(8, 'Diamonds'),
         Card(8, 'Clubs'),
         Card(8, 'Spades')]
print(min(cards).rank == 8)                        # True
print(max(cards).rank == 8)                        # True

'''
what matters?
- rank; suit plays NO part in ranking
-- 2 - 10 respective rank, then Jacks 11, Queens 12, Kings 13, Aces 14

- get rank of object
-- dictionary constant -> ranks
-- magic methods such as __lt__ or __le__ etc
--- to use comparison operators



'''