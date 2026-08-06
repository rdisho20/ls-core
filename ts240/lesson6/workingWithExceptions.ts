/*
class MyCustomError extends Error {
  constructor(message: string) {
    super(message);
  }
}

let error: MyCustomError;
try {
  throw new MyCustomError("My custom error message");
} catch (e: unknown) {
  if (e instanceof MyCustomError) {
    error = e;
  } else {
    throw new Error("Unexpected error occurred");
  }
}
*/

function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
}

function safeSqrt(x: number): number {
  try {
    return sqrt(x: number);
  } catch(e: unknown) {
    if (e instanceof Error) {
      return -1;
    } else {
      throw e;
    }
  }
}
