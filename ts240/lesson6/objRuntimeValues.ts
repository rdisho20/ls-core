/*
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Jane", age: 45 };
const personName: Pick<Person, "name"> = person;
console.log(personName.name);
*/

type UserSettings = {
  readonly colorScheme: string;
  readonly notifications: ReadonlyArray<string>;
};

const userSettings: UserSettings = {
  colorScheme: "dark",
  notifications: ["email", "push"],
}
