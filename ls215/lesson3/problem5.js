/*
ENCODING:
input: an input string, & a number of rows(?)
output: a string (cipher read off in rows)

DECODING:
input: a string, & a number of rows(?)
output: a string (message that was encrypted)

Definitions:
- Rail Fence cipher: input string written in zig-zag, starting at the top down to the bottom and backup, repeating

Rules:
1. You don't have to preserve case of inputs (encode => uppercase, decode ... will always be uppercase)

Questions:
How many inputs will we take? presumable an input string and a number of rows to build the cipher
- number of rows a minimum of 2?
What's the maximum number of rows if any?
What's the maximum length of the input string if any?
What do we do if we get invalid inputs?
  - what are the invalid inputs? output if given an invalid type?

---- EXAMPLE TEST CASES ----
console.log(encode("HELLO WORLD", 3));
H . . . O . . . L .
. E . L . W . R . D
. . L . . . O . . .

console.log(encode("HELLO WORLD", 2));
H . L . O . O . L .  
. E . L . W . R . D

console.log(encode("HELLO WORLD AGAIN", 4));
H . . . . . O . . . . . A . .
. E . . . W . R . . . G . I .
. . L . O . . . L . A . . . N
. . . L . . . . . D . . . . .

console.log(encode("HELLO WORLD AGAIN", 5));
H . . . . . . . L . . . . . .
. E . . . . . R . D . . . . .
. . L . . . O . . . A . . . N
. . . L . W . . . . . G . I .
. . . . O . . . . . . . A . .

console.log(encode("HELLO WORLD AGAIN GOODBYE", 6));
H . . . . . . . . . A . . . . . . . . . Y .
. E . . . . . . . D . G . . . . . . . B . E
. . L . . . . . L . . . A . . . . . D . . .
. . . L . . . R . . . . . I . . . O . . . .
. . . . O . O . . . . . . . N . O . . . . .
. . . . . W . . . . . . . . . G . . . . . .
*/