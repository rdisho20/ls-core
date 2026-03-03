/*
(function() {
  console.log("sometimes ya");
})();
*/


/*
var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

const func = (function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

sum += func;
console.log(sum);
*/


/*
function countdown(number) {
  (function(n) {
    for (let i = n; i >= 0; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })(number);
}

countdown(7);
*/


function countdown(number) {
  (function recursiveSub(n) {
    console.log(n);

    if (n === 0) console.log('Done!');
    else recursiveSub(n - 1);
  })(number);
}

countdown(7);

