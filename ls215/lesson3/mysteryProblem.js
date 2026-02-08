// You are given a table, in which every key is a stringified number, and each
// corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each
// character should appear only once among the value-arrays, e.g.




// Example 1
console.log(duplicates({
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}));

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
console.log(duplicates({
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}));

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
console.log(duplicates({
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}));

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }