import random

class Deck:
    RANKS = list(range(2, 11)) + ['Jack', 'Queen', 'King', 'Ace']
    SUITS = ['Hearts', 'Clubs', 'Diamonds', 'Spades']

    def __init__(self):
        self.deck = [Card(rank, suit) for suit in Deck.SUITS
                     for rank in Deck.RANKS]

        self.shuffle_deck()
    
    def shuffle_deck(self):
        return random.shuffle(self.deck)

    def draw(self):
        if len(self.deck) == 0:
            self.__init__()
        
        return self.deck.pop()

class Card:
    VALUES = {"Jack": 11, "Queen": 12, "King": 13, "Ace": 14}

    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit
    
    def __str__(self):
        return f"{self.rank} of {self.suit}"

    @property
    def value(self):
        return Card.VALUES.get(self.rank, self.rank)
    
    def __lt__(self, other):
        return self.value < other.value
    
    def __eq__(self, other):
        return self.rank == other.rank and self.suit == other.suit


deck = Deck()

drawn = []
for _ in range(52):
    drawn.append(deck.draw())

count_rank_5 = sum([1 for card in drawn if card.rank == 5])
count_hearts = sum([1 for card in drawn if card.suit == 'Hearts'])

print(count_rank_5 == 4)      # True
print(count_hearts == 13)     # True

drawn2 = []
for _ in range(52):
    drawn2.append(deck.draw())

print(drawn != drawn2)        # True (Almost always)


'''
Card 'has-a' place in Deck
Deck has cards

so Card is a collaborater to Deck, since you need many to make 1 Deck.
- initialize each card into the deck.

'''