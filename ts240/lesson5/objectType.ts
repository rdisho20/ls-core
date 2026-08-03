/*
interface CustomObject {
  [key: string]: unknown;
}

interface Person extends CustomObject {
  firstName: string;
  lastName: string;
}

const person: Person = { firstName: "John", lastName: "Doe" };

logObject(person); // Logs "firstName: John" and "lastName: Doe"


function doSomething(obj: CustomObject) {
  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else if (typeof value === "number") {
      console.log(value.toFixed(2));
    } else {
      console.log("Unknown value type");
    }
  }
}

const myObject: CustomObject = {
  name: "Alice",
  age: 30,
  unknownProperty: { key: "value" },
  anotherUnknown: null,
}
*/

function getProperty(obj: { [index: string]: unknown }, key: string) {
  return obj[key];
}

const obj = {
  name: "John",
  age: 30,
}

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");