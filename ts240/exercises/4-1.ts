function printLength(param: string | string[]): void {
  if (Array.isArray(param)) {
    console.log(param.length);
  } else if (typeof param === "string") {
    console.log(param.length);
  }
}