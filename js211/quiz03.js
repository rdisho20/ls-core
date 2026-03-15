// 1

console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null == 0);           // true

/*
logged to the console:
- true
- false
- true

For the first output, we are doing loose equality check between null and undefined,
and both null and undefined get converted to `0` because both are falsy values
in boolean context. Then, `0 == 0` is checked and we get `true`

For the second output, we strictly check if `null` and `undefined` are equal
and when using strict operators like `===` JS expects values of the same type.
Since `null` is it's own type and `undefined` represents no value defined (no type),
they are of a different type, and therefore must evaluate to `false`

For the last output, we are loosely checking if `null == 0` and in this case,
null is falsy in boolean context, so JS coerces the null value to a type it can check
against the primitive number value, and that value is `0`.  Therefore `0 == 0` evaluates to `true`
*/


// 2
console.log('0' == false);  // true
console.log('' == 0);       // true
console.log(' ' == 0);      // false

/*
logs to console:
- true
- true
- false

All these checks are loose equality checks, which means JS will likely
need to convert the values into types that it can compare.

For the first output, we get `true`.  Steps:
1. `false` is coerced to `0` (booleans always coerces first)
2. JS sees `'0' == 0` now and then converts `'0'` to a type it can comprare
to `0` which is a number, so `'0'` becomes `0`
3. JS evaluates `0 == 0` which is `true`

For second output, we get `true`. Steps:
1. `''` in boolean coerced is falsy, so it is converted to `0`
2. JS sees `0 == 0` which it can evaluate, evaluating to `true`

For third output, we get `false`, Steps:
1. first, `' '` in boolean context is truthy, and is coerced to `1`
- the empty string is coerced because JS requires a value of the same type that it can compare,
  and will convert to a number to perform that comparison
2. JS now sees `1 == 0` which it can evaluate, therefore evaluates to `false`
*/


// 3

let arr = [9];
console.log(arr == 9);    // true
console.log(arr == '9');  //true
console.log(arr === 9);   // true

/*
logs to console:
- true
- true
- false

First output is true, because we are doing a loose equality check among other things.
When doing loose equals checks, for arrays, we convert the array to its string equivalent first,
in this case `'9'`.  JS now sees `'9' == 9`.  JS will then coerce `'9'` to it's number equivalent
`9` and now sees `9 == 9` which it can evalute.  Therfore our evaluation is `true

Second output, we do the same as previous.  When we coerce the array to its string equivalent
we get `'9' == '9'`.  JS can evaluate this expression, and it does to `true`.

Third output, is a strict equality check where we are checking types array and number.
They are not of the same type, therefore our expression evaluates to `false`.
*/


// 4
console.log({} == false);   // false
console.log([] == false);   // true

/*
logs to console:
- false
- true

our first output is `false`.  Here's why:
1. first JS needs to coerce these values to values it can compare
- `false` is coerced to `0`, while `{}` is coerced to a string `[Object object]` using `toString` method
2. JS sees `'[object Object]' == 0`, which are still different types; JS coerces `0` to string version `'0'`
then compared lexicographically.
3. JS now sees `'[object Object]' == '0'` which can be compared lexicographically ( character by character)
and we first check '[' against '0' which is `false`, explaining our output

for our second output, the difference lies in what our `[]` empty array becomes when JS coerces that to a string.
JS coerces it to `""`.  Like an object, js will coerce the array object using it's `toString` method first.
So, `false` coerces to `0` first, then our `[]` coerces to `""`.  We still can't make the comparison (`"" == 0`).
Next, Js coerces `""` into `0` because in boolean context, `""` is falsy.  JS can now evaluate the expression
`0 == 0` which evaluates to `true`, explaining our output.
*/