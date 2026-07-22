function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);

function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both must be numbers"
    )
  }
}

