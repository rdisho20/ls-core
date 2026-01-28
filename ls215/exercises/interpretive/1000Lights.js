/*
1000 Lights
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

----PROBLEM----
input: number;
output: array w/ numbers representing lights that are On

Rules:
explicit rules first
- 1 argument that is a number representing number of lights

implicit rules
- always return array
  - the array returned may not contain any elements
  - if the array contains any elements, they are numbers

----Data Structure----
- string
- array

----Algorithm----
Start w/ an empty string representing all lights off called 'lightsOn'
start w/ 'skipper' = 1

Loop through numbers 1 through n up to n (round count)
  if this is the first iteration, turn all lights on, concat all to 'lightsOn'
    CONTINUE
  Loop through number 1 through n up to n incrementing by 1
    IF 'lightsOn' does not include the current number and number is evenly divisible by 'skipper'
      Turn on light (number) by CONCATENATING it to the string 'lights'
    IF 'lightsOn' INCLUDES number and number is evenly divisible by 'skipper'
      Turn OFF the light by replacing its corresponding number w/ ''
  at the end of each round INCREMENT skipper by 1

----Algorithm 2----
?? if switches length is less than or equal to 0
  ?? return []

if n is less than 1, return empty array []

start w/ array called 'lights' = []
  for 1 up to n, push 'O' for all lights on
start w/ 'skipper' = 2
start w/ 'result' = []

For each number 'skipper' through n (round count)
  For each LIGHT
    IF light corresponding number can evenly divide by 'skipper'
      turn it OFF if it is already ON
      turn it ON if it is already OFF
  
  increment skipper by 1

Then, for each light that is ON in 'lights' push it's number to 'result'

return result

*/
// lights => ooooooooo 
function lightsOn(switches) {
  if (switches < 1) return [];

  const lights = [];

  for (let i = 1; i <= switches; i += 1) {
    lights.push('O');
  }

  let skipper = 2;

  for (let round = 2; round <= switches; round += 1) {
    for (let i = 0; i < switches; i += 1) {
      const lightStatus = lights[i];

      if ((i + 1) % skipper === 0) {
        switch (lightStatus) {
          case 'O':
            lights[i] = 'F';
            break;
          case 'F':
            lights[i] = 'O';
            break;
        }
      }
    }

    skipper += 1;
  }

  const lightsOn = [];

  lights.forEach((light, index) => {
    if (light === 'O') {
      lightsOn.push(index + 1);
    }
  })

  return lightsOn;
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(-5)); // []
console.log(lightsOn(0)); // []


// F F F F F
// O O O O O => 1st round
// O F O F O => 2nd round
// O F F F O => 3nd round
// O F F O O => 4th round
// O F F O F => 5th round

// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
