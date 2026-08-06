type Person = {
  name: string;
  age: number;
}

type Employee = {
  name: string;
  age: number;
  department: string;
}

let employee: Employee = {
  name: "John",
  age: 30,
  department: "HR",
}

let person: Person = employee;

function greet(person: Person) {
  console.log(
    `Hello: ${person.name} and ${person.age}`
  );
}

greet(employee);