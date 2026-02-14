/*
Encode:
input: a string message, and an integre representing number of "rails"
- rails are like a row
output: encoded string

Rules:
1. given an dencoded string & a number of rails
  - the number of rails represents the rows & string is what needs to be encoded
2. number of rails bust be greater than 1
3. strings input where if there are multiple words, they run together
4. for the cipher, "rails" count determines number of rows AS WELL AS
  the `.` between each character calculated using: ...((rails - 1) * 2) - currentRail)... not quite
5. length of each row of the cipher will be the length of the original input string

---- DATA STRUCTURE ----
build one long STRING using for loops, then replace all `.` w/ a `''` character

---- ALGORITHM ----
1. determine length of input string

2. while the count is less than or equal to the "rails" arguemnt
  - for each character in the string, starting at the current rail, skip ahead maybe using above formula
    HELLO WORLD
    e.g. rail number 1/3 -> H...O...L
    rail num 2/3 -> .E.L.W.R.D
    - given the current rail, 
*/

console.log(encode("HELLOWORLD", 3));
/*
H . . . O . . . L .
. E . L . W . R . D
. . L . . . O . . .
*/

console.log(encode("HELLOWORLD", 2));
/*
H . L . O . O . L .  
. E . L . W . R . D
*/

console.log(encode("HELLOWORLDAGAIN", 4));
/*
H . . . . . O . . . . . A . .
. E . . . W . R . . . G . I .
. . L . O . . . L . A . . . N
. . . L . . . . . D . . . . .
*/

console.log(encode("HELLOWORLDAGAIN", 3));
/*
H . . . O . . . L . . . A . .
. E . L . W . R . D . G . I .
. . L . . . O . . . A . . . N
*/

console.log(encode("HELLOWORLDAGAIN", 5));
/*
H . . . . . . . L . . . . . .
. E . . . . . R . D . . . . .
. . L . . . O . . . A . . . N
. . . L . W . . . . . G . I .
. . . . O . . . . . . . A . .
*/

console.log(encode("HELLOWORLDAGAINGOODBYE", 6));
/*
H . . . . . . . . . A . . . . . . . . . Y .
. E . . . . . . . D . G . . . . . . . B . E
. . L . . . . . L . . . A . . . . . D . . .
. . . L . . . R . . . . . I . . . O . . . .
. . . . O . O . . . . . . . N . O . . . . .
. . . . . W . . . . . . . . . G . . . . . .
*/

// console.log(decode("WECRLTEERDSOEEFEAOCAIVDEN", 3)) // "WEAREDISCOVEREDFLEEATONCE"