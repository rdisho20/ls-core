function octalToDecimal(numberString) {
  // forEach digit in the number string perform base-8 operation
  // ... we input an iterable and spit out an integer (single value)
  // ... reduce is ideal here, incrementing index up right -> left (reverse)
  // ... used map to manipulate array in place, getting Number versions of numStr

  return numberString
    .split('')
    .map(numStr => Number(numStr))
    .reverse()
    .reduce((sum, digit, index) => {
      return sum + (digit * (8 ** index));
    }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9