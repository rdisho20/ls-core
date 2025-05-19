# Twenty-One Description
- Start w/ Standard 52-card deck consisting of the 4 suits and 13 values
- The goal is to get to as close to 21 as possible without going over
    - If you go over, that is called a **bust**
- There is a Player and a Dealer, each are dealt an inital hand of 2 cards
    - The player can see their 2 cards, but only 1 of the dealer's cards
- Card values are as follows:
    - 2 - 10 = face value
    - Jack, Queen, King = 10
    - Ace = 1 or 11
        - if hand DOESN'T exceed 21, Ace is worth 11
        - if hand WOULD exceed 21, Ace is worth 1 instead
- The player always goes first
    - Player can **hit** or **stay**
        - hit = player is dealt another card
        - game is over if player exceeds 21 (busts)
        - If player busts, the Dealer wins
- Dealer takes turn after player **stays**
    - Reveals face down card
    - Dealer must hit until total is at least 17
    - If the dealer busts, the player wins
- When both player and dealer stay, we must compare the total value of the cards 
and see who has the highest value.

## Nouns
- Card(s)
    - (has) Suits (Spades, Hearts, Clubs, Diamonds)
        - 1 - 10
        - JQKA
    - (has) Values
    - *above 2 as own class, maybe*
- Goal (threshold value = 21)
- Player, Dealer
    - (has) Hand
    - (has) Turn
- Total Values
- Highest Value

## Verbs
- Start w/
- Dealt (hand)
- Bust
- Hit, Stay
- Win
- Compare (values)

# Organize Nouns and Verbs
- Card(s)
    - (has) Suits (Spades, Hearts, Clubs, Diamonds)
        - 1 - 10
        - JQK
        - A
    - (has) Values
        - 1 - 10
        - JQK 10
        - A (11 or 1)
- Player
    - (has) Goal - *players have a goal, but maybe better in game engine*
    - (has) Hand (set of 2 cards initially)
        - **V** Dealt (hand)
    - (has) Turn
        - **V** Takes (turn)
        - **Busts** or choose **Hits** or **Stays**
    - **V** can Win or Lose - *maybe better in game engine class*
- Dealer
    - (has) Goal
    - (has) Hand
    - **V** Deals (cards)
        - (has) Turn
        - **V** Takes (turn)
        - **Busts** or choose **Hits** or **Stays**
    - **V** can Win or Lose
- TO Game Engine
    - (has) Total Values
        - **V** Compares (total values)
    - (has) Highest Value
