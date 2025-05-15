# Description
Tic Tac Toe is a game where 2 players take turns selecting 1 square at a time from a 3x3 grid, placing their marker each time.
A marker for each player is designated by an 'O' or 'X'.  A player wins when they have 3 of their markers in a row; 
horizontally, vertically, or diagonally.

## Nouns
Game
Players
Turns
Marker
Win/Loss

## Verbs
Take (turns)
Select (square)
Designate (marker)
(player) Wins
Determine (a Win/Loss)

## Organize Nouns and Verbs
- Players
    - Take (turns)
    - Select (squares)
    - Win / Lose
- Game
    - Designates (marker) ...not necessarily significant
    - Determines (a Win/Loss)
    - Determines (which Player's turn it is)
        - Tracks (turns)

***

# Spike
## `TTTGame.play()`
1. Display welcome message
2. Determine starting player
    - Display starting player
3. Display empty board

4. 1st player takes turn, selects square
5. Display updated board
6. 2nd player takes turn, selects square
7. Display updated board
8. Check if there is a winner (3 in a row)

9. If there isn't a winner, repeat steps 4 - 8
10. Display winner if there is a winner
11. Ask if player wants to play again
12. Begin at step 2 if YES
13. Display good by message If NO

# Spike - LS (organized like actual code)
1. Display a welcome message.
2. Repeat until the game is over
    - Display the current state of the board.
    - Let the first player make a move.
    - Is the game over? If so, exit this loop.
    - Let the second player make a move.
    - Is the game over? If so, exit this loop.
3. Display the final state of the board.
4. Display the final result.
5. Display a goodbye message.