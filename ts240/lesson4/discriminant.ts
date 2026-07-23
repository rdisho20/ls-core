/*
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;
*/

/*
type Result<T, E> = 
  | { status: "success"; value: T }
  | { status: "failure"; error: E };

function divide (numerator: number, denominator: number): Result<number, string> {
  if (denominator === 0) {
    return { status: "failure", error: "Division by zero" };
  }
  return { status: "success", value: numerator / denominator };
}
*/

type Animal =
  | { species: "dog"; name: string; age: number }
  | { species: "bird"; name: string; wingspan: number };

function describeAnimal(animal: Animal): string {
  if (animal.species === "dog") {
    return `${animal.name} is a ${animal.age} year(s) old dog.`;
  } else {
    return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
  }
}