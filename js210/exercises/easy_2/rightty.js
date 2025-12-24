function triangle(number) {
    let currentStr = '';
    
    for (let num = 1; num <= number; num++) {
      let count = number;
      while (count > 0) {
        if (count > num) {
          currentStr += ' ';
        } else {
          currentStr += '*';
        }
        count--;
      }
      console.log(currentStr);
      currentStr = '';
    }
  }
  
  
  triangle(5);
  triangle(9);


triangle(5);
/*
    *
   **
  ***
 ****
*****
*/

triangle(9);
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/


/* OTHER POSSIBLE SOLUTIONS
This would let you practice both mental models:

Model A: “For each character, decide space or star.”
Model B: “For each line, decide how many spaces and how many stars.”
*/

/* A (LS SOLUTION)
function triangle(height) {
  let stars = 1;
  let spaces = height - 1;

  for (let i = 0; i < height; i += 1) {
    console.log(repeat(' ', spaces) + repeat('*', stars));
    stars += 1;
    spaces -= 1;
  }
}

function repeat(char, count) {
  let repeated = '';

  for (let i = 0; i < count; i += 1) {
    repeated += char;
  }

  return repeated;
}
*/

/* B
  function triangle(number) {
    for (let row = 1; row <= number; row++) {
      let line = '';

      // spaces
      for (let s = 0; s < number - row; s++) {
        line += ' ';
      }

      // stars
      for (let st = 0; st < row; st++) {
        line += '*';
      }

      console.log(line);
    }
  }
*/