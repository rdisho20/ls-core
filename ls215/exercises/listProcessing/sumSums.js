/*
-P
input: array of numbers
output: integer (sum of the sums of each leading subsequence in the array)

Rules:
1. input array will always contain at least 1 number
2. a leading subsequence will always be led by the first element in the array
  - the number of subsequences is == to the length of the input array
  e.g. sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  e.g. sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36

---- DATA STRUCTURE
- I would build the array of the subsequences first, then using that array
  I could reduce to the final value

---- ALGORITHM
High Level:
1. Given an array of numbers, For each number, build a sub-sequence
  - For each number, iterate backwords in the main array, building a `subSequence`
  - store all subsequences in a `subSequences` array
  e.g. [1, 2, 3]
  1 => [1]
  2 - idx 1, 1 -> 0 (iterating down until equals 0) => [2, 1]
  3 - idx 2, 2 -> 0 ('') => [3, 2, 1]
  ===> subSequences = [[1], [2, 1], [3, 2, 1]]

2. Using the subSequences array, iterate through each element, 
  getting the sum for each sub-sequence,
  then reduce those sums to the `finalSum`

3. return `finalSum`

Low Level:
- start w/ variable `subSequences` = []
- For each number in `mainArray` starting w/ `idx = 0`
  - initialize a variable `subSequence` = []
  - For loop, iterate backwards starting at `idx` (current index) to `0`
    - push the number at the index of the nested for loop to `subSquence`
  - outside the loop, push the `subSequence` array to array `subSequences`

- For each `subSequence` in `subSequences` (using map)
  - reduce to the sum of those values (using reduce)
- then chaining `reduce`, find sum of all values returned by 'mapping' `subSequences`
*/

function sumOfSums(array) {
  const sequences = [];

  for (let mainIdx = 0; mainIdx < array.length; mainIdx += 1) {
    const subSequence = [];

    for (let idx = mainIdx; idx >= 0; idx -= 1) {
      subSequence.push(array[idx]);
    }

    sequences.push(subSequence);
  }

  return sequences
    .map(subSequence => subSequence.reduce((sum, number) => sum + number, 0))
    .reduce((sum, number) => sum + number, 0);
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)).reduce((sum, value) => sum + value);
}