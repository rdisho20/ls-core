function filterByType<T>(arg: Array<any>, type: string): T[] {
  return arg.filter(item => typeof item === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));