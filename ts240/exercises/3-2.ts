function printId(arg: number | string): void {
  if (typeof arg === "number") console.log("Your ID is a number");
  else console.log("Your ID is a string");
}