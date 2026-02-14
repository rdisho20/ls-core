/*
---- Problem ----
input:
- the positions of all existing opponents 
- a position represented by an integer

output:
- Given the input position, return the position of the closest active oppontent

Rules:
- visualize the board as being "horizontal" gride line, because each opponent will have only one position number
- an opponent's position can be `null`
- there will be at least 2 opponents

Questions:
Can their be negative positions? YES
Can there be only 1 opponent? YES
Will the position input always be a number? YES
What if a position equals one of the opponent's positions? return that position then
What is 2 opponents have the same value as the input position? return the single value the opponenets share

---- DATA STRUCTURE ----
use a key ARRAY to access values,
- if on either side of the input position there are values, subtract input position from values, 
  getting absolute value of difference, then whichever is less, return that corresponding opponent's value
- if there is just one other value on either side of the position, return the only opponent's position

---- ALGORITHM ----
High Level
1. Given opponent positions
  - for each position, assign a left value, & a right value
    - get their differences from the position value minus left/right
2. return the opponent's value that has the lowest difference between the two

Low level
- declare variables `left` & `right`

- for each value in the `positions` arguement (using Object.keys())
  - initialize variable `currentOpponentPosition` = to the current value
  - IF it is less OR equal than `position`, assign the current opponent value to `left`
  - IF it is greater OR equal than `position`, assign the current opponent value to `right`

- IF `left` is undefined, return `right`
- IF `right` is undefined, return `left`
- IF the absolute value of `position` - `left` is >= `position` - `right`, return `right`
- IF the absolute value of `position - right` is >= `position - left`, return `left`
*/


function findClosestOpponent(positions, position) {
  if (Object.keys(positions).length === 0) return null;

  let left;
  let right;

  for (let key of Object.keys(positions).sort((a, b) => positions[a] - positions[b])) {
    const currentOpponentPosition = positions[key];

    if (currentOpponentPosition === null) continue;
    if (currentOpponentPosition <= position) left = currentOpponentPosition;
    else if (currentOpponentPosition >= position) {
      if (right) continue;
      right = currentOpponentPosition;
    }
  }

  if (!left) return right;
  if (!right) return left;
  if (Math.abs(position - left) >= Math.abs(position - right)) return right;
  if (Math.abs(position - right) >= Math.abs(position - left)) return left;
}

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

// 1 opp
console.log(findClosestOpponent({
  "Opponent 1" : 1
}, 10)); // 1

// 2 opp, share same value
console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 15
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : -200
}, -50)); // 1

const positions = {
  a: 30,
  b: 1,
  c: 20
};

console.log(findClosestOpponent(positions, 10)); // 1