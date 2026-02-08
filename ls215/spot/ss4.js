// Likes vs. Dislikes
// YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

// There are two other interesting rules to be noted about the interface:

// Pressing a button, which is already active, will undo your press.
// If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
// Create a function that takes an array of button inputs and returns the final state.

/*
input: array of button inputs
output: string representing final state 
- 'Dislike', 'Like', 'Nothing'

Rules:
1. If argument array is empty, return 'Nothing'
2. If no button is currently active, return 'Nothing'
- A button would not currently be active if it was pressed more than 1 time in a row
- a button is currently active if it is active
3. additional rules below

---- DATA STRUCTURE ----
array (iterate, checking each button press against previous button presses and state)

---- ALGORITHM ----
High level:
1. If I get and empty array return Nothing

2. For each button press in the input array
  - if the state is udnefined, set the current button press to the state, and current button press to previous button press, then continue to next iteration
  - check if current button press is NOT equal to previous,
    - update state to current button press
    - update previous button press to current
    - OTHERWISE 
      - update the state to 'Nothing'

3. return the state value

Low Level:
- if empty array input, RETURN 'Nothing'
- declare a variable `state`
- declare a varaible `previousButtonPress`

- for each `buttonPress` in `inputArray`
  - if `state` is undefined
    - `state` = `ButtonPress`
    - assign `previousButtonPress` = `ButtonPress`
  - ELSE IF `ButtonPress` !== `previousButtonPress`
    - update `state` to `ButtonPress`
    - previousButtonPress = ButtonPress
  - ELSE
    - update state to 'Nothing'

- return current state

["Like", "Dislike", "Dislike", "Dislike", "Like"]
L--state of Like
D--state of Dislike
D--Nothing
L--

*/

function likeOrDislike(array) {
  if (array.length === 0) return 'Nothing';
  let state;
  let previousButtonPress;

  for (let buttonPress of array) {
    if (!state || buttonPress !== previousButtonPress) {
      state = buttonPress;
      previousButtonPress = buttonPress;
    } else if (buttonPress === previousButtonPress) {
      state = 'Nothing';
    }
  }

  return state;
}

// Examples
console.log(likeOrDislike(["Dislike"])) // ➞ "Dislike"

console.log(likeOrDislike(["Like", "Like"])) // ➞ "Nothing"

console.log(likeOrDislike(["Dislike", "Like"])) // ➞ "Like"

console.log(likeOrDislike(["Like", "Dislike", "Dislike"])) // ➞ "Nothing"

console.log(likeOrDislike(["Like", "Dislike", "Dislike", "Dislike"])) // ➞ "Nothing"

console.log(likeOrDislike(["Like", "Dislike", "Dislike", "Dislike", "Like"])) // ➞ "Like"
/*
Like -> Dislike
previous = Like, current = Dislike, state = undefined
  state becomes Dislike
Dislike -> Dislike
previous = Dislike, current = Dislike, state = Dislike
  state become Nothing
Dislike -> Dislike
previous = Dislike, current = Dislike, state = Nothing
  state becomes Nothing
Dislike -> Like
previous = Dislike, current = Like, state = Nothing
  state becomes Like

If state is undefined, assign current to state then CONTINUE
If our current is not equal to previous, update state to current
IF our current is equal to previous
  THEN update state to 'Nothing' 
*/


console.log(likeOrDislike([])) // ➞ "Nothing"
// Notes
// If no button is currently active, return "Nothing".
// If the array is empty, return "Nothing".