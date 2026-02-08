/*
Write a function that takes an array of intervals and merges all overlapping intervals. An interval is represented as an array of two integers [start, end]. 
The function should return an array of the non-overlapping intervals that cover all the intervals in the input. The output should be sorted by the start time of each interval.

---- PROBLEM
input: 2Dimensional array, each element is an interval e.g. [1, 3] or [5, 6] (like a range)
output: 2Dimensional array, each element is an interval, where any overlapping intervals are merged
- e.g. [1, 3], [2, 4] => [1, 4]
- e.g. [1, 3], [2, 3] => [1, 3]

Question:
If a value at the end of the interval overlaps with a end value of another interval, what do i do?
- IF neighboring intervals share the same end value, that becomes the end value for the merged interval
Are the intervals placed in order of least to greatest start values? NO
- THEN sort them based on their start values
In the output array, should the intervals be sorted by their start values? YES

Rules:
- interval represented by start and end values
- 2D input array can have intervals in random order
- output 2D array sorted by interval start values/times
- values of intervals are represetned by integers
- An interval overlaps if the START value of first one is less OR eqal than the START value of the second one, AND the END value of the first one is greater than or equal to the START value of the second one AND less than or eqal to the END value of the second one
  - e.g. [1, 5], [4, 5] edge case
  - e.g. [1, 3], [2, 6]

---- DATA STRUCTURE ----
I will sort the ARRAY by order of START values
- iterate through the array

intervalTracker -> all intervals processed (like a `seen`)

---- ALGORITHM ----
1. Get the input array sorted by the interval's start values

2. For each interval starting at the 2nd
  - Given the current interval, check it against the previous one in the merged results
  - IF it is overlapping, ***Fstart <= Sstart && Fend >= Sstart && Fend <= Send***
    - create interval w/ appropriate F`start` and S`end`
    - splice in the merged interval @ `result` array (idx = result.length - 1)

3. return the merged result

Low Level:
- iinitialize variable `sortedInput` = input array sorted using the start values `a[0] - b[0]`
- initialzie variable `merged` = [first value of sorted input array]

- for each interval in the sortedInput starting at `idx = 1`
  - IF ***Fstart <= Sstart && Fend >= Sstart && Fend <= Send*** where the First is the LAST value in the merged results
    - initialize a variable named `newInterval` = [Fs, Se]
    - splice into `merged` @ `merged.length - 1, 1, newInterval`

- return the merged result
*/


function mergeIntervals(arrayInput) {
  const sorted = arrayInput.sort((a, b) => a[0] - b[0]);
  const merged = [sorted[0]];

  for (let idx = 1; idx < sorted.length; idx += 1) {
    const first = merged[merged.length - 1];
    const second = sorted[idx];

    if (first[1] >= second[0] && (first[1] <= second[1] || first[1] >= second[1])) {
      const newInterval = [first[0], second[1]];
      merged.splice(merged.length - 1, 1, newInterval);
    } else {
      merged.push(second);
    }
  }

  return merged;
}


console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[1, 3], [2, 6], [5, 10], [15, 18]])); // [[1, 10], [15, 18]]
console.log(mergeIntervals([[1, 4], [4, 5]])); // [[1, 5]]

// same end values
console.log(mergeIntervals([[1, 5], [4, 5]])); // [[1, 5]]

// other same
console.log(mergeIntervals([[4, 5], [5, 5]])); // [[4, 5]]
console.log(mergeIntervals([[5, 5], [5, 5]])); // [[5, 5]]

// negative values
console.log(mergeIntervals([[-1, 11], [2, 6], [5, 10], [15, 18]])); // [[-1, 11], [15, 18]]

// out of order
console.log(mergeIntervals([[2, 6], [8, 10], [15, 18], [1, 3]])); // [[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[2, 6], [5, 10], [15, 18], [-1, 11]])); // [[-1, 11], [15, 18]]