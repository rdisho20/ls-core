function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every(item => typeof item === "string");
}