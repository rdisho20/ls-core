/*
function isCircle(shape: Shape): shape is Circle {
  return "radius" in shape;
}

function describeShape(shape: Shape) {
  let area: number;

  if (isCircle(shape)) {
    area = Math.PI * shape.radius * shape.radius;
  } else {
    area = shape.sideLenght * shape.sideLenght;
  }
  console.log("The area is " + area);
}

function isCircle(shape: Shape): shape is Circle) {
  return "sideLength" in shape;
}

function describeShape(shape: Shape) {
  let area: number;
  if (isCircle(shape)) {
    area = Math.PI * shape.readius * shape.radius;
  }
}
*/

/*
function customIsArray<T>(arg: T | T[]): arg is T[] {
  return Object.prototype.toString.call(arg) === "[object Array]";
}

function feed(petOrPets: Pet | Pet[]) {
  if (customIsArray(petOrPets)) {
    petOrPets.forEach(p => console.log('Feed me'));
  } else {
    console.log('Feed me');
  }
}
*/

type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return "doors" in vehicle;
}

function makeCar(): Vehicle | Motorcycle | Car {
  return {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    type: "car",
    doors: 4,
  };
}

let myCar = makeCar();

if (!isCar(myCar)) {
  throw new Error("Not a car");
}

console.log(myCar.doors);