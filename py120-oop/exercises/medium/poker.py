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

class PokerHand:
    def __init__(self, deck):
        self.hand = [deck.draw() for _ in range(5)]

        self.value_map = {}

        for idx in range(0, 5):
            card_value = self.hand[idx].value
            self.value_map[card_value] = self.value_map.get(card_value, 0) + 1

    def print(self):
        for card in self.hand:
            print(card)

    def evaluate(self):
        if self._is_royal_flush():
            return "Royal flush"
        elif self._is_straight_flush():
            return "Straight flush"
        elif self._is_four_of_a_kind():
            return "Four of a kind"
        elif self._is_full_house():
            return "Full house"
        elif self._is_flush():
            return "Flush"
        elif self._is_straight():
            return "Straight"
        elif self._is_three_of_a_kind():
            return "Three of a kind"
        elif self._is_two_pair():
            return "Two pair"
        elif self._is_pair():
            return "Pair"
        else:
          return "High card"

    def _is_royal_flush(self):
        sorted_hand = sorted(self.hand, key= lambda card: card.value)

        if sorted_hand[0].value != 10:
            return False
        
        for idx in range(1, 5):
            if sorted_hand[idx].suit != sorted_hand[idx - 1].suit:
                return False
        
        return True

    def _is_straight_flush(self):
        sorted_hand = sorted(self.hand, key= lambda card: card.value)

        for idx in range(1, 5):
            if (sorted_hand[idx].value - 1 == sorted_hand[idx - 1].value and
                sorted_hand[idx].suit == sorted_hand[idx - 1].suit):
                continue
            else:
                return False
   
        return True

    def _is_four_of_a_kind(self):
        if 4 in list(self.value_map.values()):
            return True
        
        return False

    def _is_full_house(self):
        if len(list(self.value_map)) == 2:
            return True
        
        return False

    def _is_flush(self):
        for idx in range(1, 5):
            if self.hand[idx].suit != self.hand[idx - 1].suit:
                return False
            
        return True

    def _is_straight(self):
        sorted_hand = sorted(self.hand, key= lambda card: card.value)

        for idx in range(1, 5):
            if sorted_hand[idx].value - 1 == sorted_hand[idx - 1].value:
                continue
            else:
                return False
        
        return True

    def _is_three_of_a_kind(self):
        mapped = list(self.value_map.values())
        if 3 in mapped and len(mapped) > 2:
            return True
        
        return False

    def _is_two_pair(self):
        mapped = list(self.value_map.values())
        if mapped.count(2) == 2:
            return True
        
        return False

    def _is_pair(self):
        mapped = list(self.value_map.values())
        if mapped.count(2) == 1 and 3 not in mapped:
            return True
        
        return False


hand = PokerHand(Deck())
hand.print()
print(hand.evaluate())
print()

# Adding TestDeck class for testing purposes

class TestDeck(Deck):
    def __init__(self, cards):
        self.deck = cards

# All of these tests should return True

hand = PokerHand(
    TestDeck(
        [
            Card("Ace", "Hearts"),
            Card("Queen", "Hearts"),
            Card("King", "Hearts"),
            Card("Jack", "Hearts"),
            Card(10, "Hearts"),
        ]
    )
)
print(hand.evaluate() == "Royal flush")

hand = PokerHand(
    TestDeck(
        [
            Card(8, "Clubs"),
            Card(9, "Clubs"),
            Card("Queen", "Clubs"),
            Card(10, "Clubs"),
            Card("Jack", "Clubs"),
        ]
    )
)
print(hand.evaluate() == "Straight flush")

hand = PokerHand(
    TestDeck(
        [
            Card(3, "Hearts"),
            Card(3, "Clubs"),
            Card(5, "Diamonds"),
            Card(3, "Spades"),
            Card(3, "Diamonds"),
        ]
    )
)
print(hand.evaluate() == "Four of a kind")

hand = PokerHand(
    TestDeck(
        [
            Card(3, "Hearts"),
            Card(3, "Clubs"),
            Card(5, "Diamonds"),
            Card(3, "Spades"),
            Card(5, "Hearts"),
        ]
    )
)
print(hand.evaluate() == "Full house")

hand = PokerHand(
    TestDeck(
        [
            Card(10, "Hearts"),
            Card("Ace", "Hearts"),
            Card(2, "Hearts"),
            Card("King", "Hearts"),
            Card(3, "Hearts"),
        ]
    )
)
print(hand.evaluate() == "Flush")

hand = PokerHand(
    TestDeck(
        [
            Card(8, "Clubs"),
            Card(9, "Diamonds"),
            Card(10, "Clubs"),
            Card(7, "Hearts"),
            Card("Jack", "Clubs"),
        ]
    )
)
print(hand.evaluate() == "Straight")

hand = PokerHand(
    TestDeck(
        [
            Card("Queen", "Clubs"),
            Card("King", "Diamonds"),
            Card(10, "Clubs"),
            Card("Ace", "Hearts"),
            Card("Jack", "Clubs"),
        ]
    )
)
print(hand.evaluate() == "Straight")

hand = PokerHand(
    TestDeck(
        [
            Card(3, "Hearts"),
            Card(3, "Clubs"),
            Card(5, "Diamonds"),
            Card(3, "Spades"),
            Card(6, "Diamonds"),
        ]
    )
)
print(hand.evaluate() == "Three of a kind")

hand = PokerHand(
    TestDeck(
        [
            Card(9, "Hearts"),
            Card(9, "Clubs"),
            Card(5, "Diamonds"),
            Card(8, "Spades"),
            Card(5, "Hearts"),
        ]
    )
)
print(hand.evaluate() == "Two pair")

hand = PokerHand(
    TestDeck(
        [
            Card(2, "Hearts"),
            Card(9, "Clubs"),
            Card(5, "Diamonds"),
            Card(9, "Spades"),
            Card(3, "Diamonds"),
        ]
    )
)
print(hand.evaluate() == "Pair")

hand = PokerHand(
    TestDeck(
        [
            Card(2, "Hearts"),
            Card("King", "Clubs"),
            Card(5, "Diamonds"),
            Card(9, "Spades"),
            Card(3, "Diamonds"),
        ]
    )
)
print(hand.evaluate() == "High card")

'''
Royal Flush:
A, K, Q, J, 10 all same suit

algorithm:
High lvl:
- first sort by values ascending
-- IF the minimum value is not equal to 10
--- return False
- THEN, for each card object instancein hand, check if the suit equals the previous suit
-- IF NOT, return False
-- IF SO, continue to next iteration
--- when loop exits successfuly (didn't return false), return True

Straight Flush:
Hgh lvl:
- sort by values ascending
- For each card (suit and rank)
-- IF rank is not equal to previous plus 1 and suit is not equal to previous:
--- return False
- When loop exits, return true

'''