/*
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Square | Triangle;

function describeShape(shape: Shape) {
  let area: number;

  switch (shape.kind) {
    case "circle":
      area = Math.PI * shape.radius ** 2;
      break;
    case "square":
      area = shape.sideLength ** 2;
      break;
    case "triangle":
      area = 0.5 * shape.base * shape.height;
      break;
    default:
      const _exhaustiveCheck: never = shape;
      throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
  }

  console.log("The area is " + area);
}
*/

type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
}

type Peacock = {
  kind: "peacock";
  featherLength: number;
}

type Giraffe = {
  kind: "peacock";
  featherLength: number;
}

type Animal = Elephant | Tiger | Peacock | Giraffe;

function describeAnimal(animal: Animal): string {
  switch(animal.kind) {
    case "elephant":
      return `An elephant weighs ${animal.weight} kg.`;
    case "tiger":
      return `A tiger can run at a speed of ${animal.speed} km/h.`;
    case "peacock":
      return `A peacock has feathers of ${animal.featherLength} cm long.`;
    default:
      const _exhaustiveCheck: never = animal;
      return `Unknown animal: ${JSON.stringify(_exhaustiveCheck)}`;
  }
}