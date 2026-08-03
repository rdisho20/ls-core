/*
type Animal = {
  name: string;
  species: string;
  age: number;
  isEndangered: boolean;
}

const tiger: Animal = {
  name: "Felix",
  species: "Panthera tigris",
  age: 7,
  isEndangered: true,
}

function getAnimalProp(animal: Animal, key: string): unknown {
  return animal[key];
}
*/

interface Student {
  name: string;
  age: number;
}

let key: keyof Student = "grade";