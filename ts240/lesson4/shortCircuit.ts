type Circle = {
  radius: number;
  opacity?: number;
};

type Square = {
  sideLength: number;
};

type Shape = Circle | Square;

function logOpacity(shape: Shape): void {
  "opacity" in shape && console.log("This circle has opacity:", shape.opacity);
}

const circle: Circle = { radius: 5, opacity: 0.8 };
const square: Square = { sideLength: 4 };