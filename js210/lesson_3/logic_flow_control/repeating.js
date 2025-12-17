function repeat(string, times) {
  if ((typeof times) !== 'number' || times < 0) {
    console.log(undefined);
    return undefined;
  }

  let result = '';
  for (let index = 1; index <= times; index++) {
    result += string;
  }

  console.log(result);
  return result;
}


repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined


/* LS Solution

const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }

  let repeated = '';
  for (let counter = 0; counter < times; counter += 1) {
    repeated += string;
  }

  return repeated;
}

*/