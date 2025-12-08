/*
if (x === 3) {
  console.log("x is 3");
}

if (x === 3) {
  console.log("x is 3")
} else {
  console.log("x is NOT 3");
}

if (x === 3) console.log("x is 3");

if (x === 3)
  console.log("x is 3");


if (x === 3)
  console.log("x is 3");
else
  console.log("x is NOT 3");

if (x === 3) {
  console.log("x is 3");
} else {
  if (x === 4) {
    console.log("x is 4");
  } else {
    console.log("x is NOT 3 or 4");
  }
}

if (x === 3) {
  console.log("x is 3");
} else if (x === 4) {
  console.log("x is 4");
} else {
  console.log("x is NOT 3 or 4");
}


let a = 5;
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

let b = 0;
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}


let a = 5;

switch (a) {
  case 5:
    console.log("a is 5");
    break;
  case 6:
    console.log("a is 6");
    break;
  default:
    console.log("a is neither 5, nor 6");
    break;
}


let a = 5;

if (a === 5) {
  console.log("a is 5");
} else if (a === 6) {
  console.log("a is 6");
} else {
  console.log("a is neither 5, nor 6");
}
*/

/*
Exercises

1.
false
true
3
3
false
true
false
false
false
true
false
true

*/


function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("Sorry, the value you passed is not an integer");
    return;
  }

  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}


if (foo()) {
  return "bar";
} else {
  return qux();
}


function caps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}


function numberRange(number) {
  if (0 <= number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (51 <= number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log(`${number} greater than 100`);
  } else {
    console.log(`${number} is less than 0`);
  }
}


/*
false
true
3
true
3
3
undefined
undefined
*/


/*
"foo is true, bar is true"
"foo is true, bar is true"
"foo is true, bar is 42"
"foo is true, bar is 42"
*/

