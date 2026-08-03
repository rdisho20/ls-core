/*
type Dog = {
  name: string;
  breed: string;
  age: number;
  hasTail: boolean;
};

type Cat = {
  name: string;
  breed: string;
  age: number;
  hasWhiskers: boolean;
};
*/

/*
type Animal = {
  name: string;
  breed: string;
  age: number;
};

type Dog = Animal & {
  hasTail: boolean;
}

type Cat = Animal & {
  hasWhiskers: boolean;
}
*/

/*
interface Animal {
  name: string;
  breed: string;
  age: number;
}

interface Dog extends Animal {
  hasTail: boolean;
}

interface Cat extends Animal {
  hasWhiskers: boolean;
}
*/

/*
type VehicleCommon = {
  make: string;
  model: string;
  year: number;
}

type Car = VehicleCommon & {
  bodyType: "sedan" | "hatchback" | "coupe" | "convertible" | "wagon";
  numDoors: 2 | 4;
};

type Truck = VehicleCommon & {
  bodyType: "pickup" | "box";
  numWheels: 4 | 6 | 8;
  payloadCapacity: number;
};

type Vehicle = Car | Truck
*/

interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape): string {
  return `This shape is ${shape.color}`;
}