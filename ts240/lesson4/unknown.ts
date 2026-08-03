/*
const myAnyValue: any = 5;
myAnyValue.toUpperCase();  // ok
myAnyValue.name; // ok
const mustBeAString: string = myAnyValue; // also ok
*/

/*
function processValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log("Unknown value");
  }
}

processValue("Launch School");
processValue(3.14159);
processValue(true);
*/

/*
function isCircle(shape: unknown): shape is Circle {
  return (
    typeof shape === "object" &&
    shape !== null &&
    "kind" in shape &&
    shape.kind === "circle"
  );
}

function isSquare(shape: unknown): shape is Square {
  return (
    typeof shape === "object" &&
    shape !== null &&
    "kind" in shape &&
    shape.kind === "circle"
  );
}

function describeShape(shape: unknown) {
  let area: number;

  if (isCircle(shape)) {

  } else if (isSquare(shape)) {

  } else {
    console.log()
  }
}
*/

function processData(data: unknown): string {
  if (typeof data === "string") {
    console.log();
  } else if (typeof data === "number") {
    console.log();
  } else {
    throw new Error("Invalid data");
  }
}

console.log(processData("Alice"));
console.log(processData(25));
console.log(processData(true));
