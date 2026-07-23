/*
let x: any = "Launch School";

function isNumber(arg: any): arg is number {
  return typeof arg === "number";
}

if (isNumber(x)) {
  const y = x;
  console.log(y);
} else {
  console.log("x is not a number");
}
*/

function safeGet<T>(arr: T[], index: number) {
  if (index >= 0 && index < arr.length) return arr[index];
  return undefined;
}

const names: string[] = ["John", "Jane"];
const thirdName = safeGet(names, 2); // Should return undefined

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2