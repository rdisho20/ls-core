/*
function createPerson(name: string, age: number) {
  return { name, age };
}

type CreatePersonFunction = typeof createPerson; // (name: string, age: number) => { name: string; age: number; }
type Person = ReturnType<CreatePersonFunction>; // { name: string; age: number; }

function greetPerson(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

function sum(prefix: string, ...numbers: number[]): string {
  const total = numbers.reduce((total, n) => total + n, 0);
  return `${prefix}${total}`;
}

type SumParameters = Parameters<typeof sum>;
const input: SumParameters = ["The total is: ", 1, 2, 3, 4];
const result = sum(...input);
*/

function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<typeof addNumbers>;
type AddNumbersReturnType = ReturnType<typeof addNumbers>;
type AddNumbersFunctions = (...args: AddNumbersParams) => AddNumbersReturnType;

