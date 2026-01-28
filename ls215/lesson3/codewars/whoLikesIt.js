/*
input: name(s) strings
output: string message displaying who like (this)
- "[...] likes this"

rules:
if no names passes as arguements, return -> "no one..."
if 1 name, "<name> likes this"
if 2 names, "<name1> and <name2> like this", 'like' w/o 's'
if 3 names, "<name1>, <name2> and <name3> like this"
if > 3 names, "<name1>, <name2> and <number> others like this"

like(s)
- if <= 1 ppl, use 'likes'
- if >= 2 ppl, use 'like'
- if >= 4 ppl, use 'others like'

QUESTIONS:
Can I always expect data type array as argument?
In the argument array, can I expect it to be any length?
Can input argument array have elements that are not strings?
Can the input argument have elements that are not names?
Can the input arguement have the same name element multiple times?

---- DATA STRUCTURE ----
Use the array as is -> perform iteration

*/

function likes(names) {
  console.log(names);
}


console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'