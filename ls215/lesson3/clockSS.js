// Question: Clock Angle

// Difficulty​: Intermediate

// Problem Description

// Write a function that takes a time string in "HH:MM" format and returns the smaller angle in degrees between the hour and minute hands on an analog clock.

/*
P:
- Input: a string representing the clock (time) in "HH:MM" format
- Output: a number representing the "smaller angle in degrees between hour & minute hands" on an analog clock

Questions:
1. Can we have a time of "00:00". YES, midnight
2. Should we handle time strings in military time
  - 1pm => 13:00, 11pm => 23:00
2b. Do we account for AM and PM meaning we account for military time; NO

---- Data Structure ----
- array, 2 elements, each element represents 'hour' or 'minute' (integers)
*/
// Rules:

// 1. The input will always be a valid time string (e.g., "03:00", "12:30").
// 2. The movement of both the hour and minute hands is continuous. The hour hand is not fixed at the hour mark but moves gradually as the minutes pass.
// 3. Return the smaller of the two possible angles between the hands. For example, at 9:00, the angles are 90 degrees and 270 degrees; your function should return 90.
// 4. The result should be a number.
// 5. 2 angles = 180 degrees means 1 unique angle
// 6. both angles add to 360 degrees
// 7. How many degrees in 1 minute?

/*

High Level algorithm:
1. Split the string into an array of hours and minutes by the separater
2. Get the minutes angle = minutes * 6
2. Get the hour angle:
 - Get the remainder of hours % 12 and multiply it by 30
 - Multiply minutes by 0.5
 - Add the result of the first calculation by the second

4. Get the absolute value of angle by subtracting the minutes' angle from the hour angle
5. If angle is greater than 180:
 - Subtract the angle from 360 and return it
6. Otherwise, return the angle

"12:30"
["12", "30"] => [12, 30]
angle => 180
hAngle => (12 % 12) * 30  + (12 * 0.5)
375 - 180 => 195

*/
// Function Signature:

function clockAngle(timeString) {
  let [hours, minutes] = timeString.split(":").map(Number);

  let minuteAngle = minutes * 6;
  let hourAngle = ((hours % 12) * 30) + (minutes * 0.5);
  let angle = Math.abs(hourAngle - minuteAngle);

  if (angle > 180) {
    return 360 - angle;
  } else {
    return angle;
  }
}


// Test Cases:

console.log(clockAngle("12:00")); // 0
console.log(clockAngle("03:00")); // 90
console.log(clockAngle("06:00")); // 180
console.log(clockAngle("01:00")); // 30
console.log(clockAngle("03:30")); // 75
console.log(clockAngle("12:30")); // 165