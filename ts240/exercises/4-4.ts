interface Shape {
  kind: string;
  [key: string]: number;
}

interface Circle extends Shape {
  kind: "circle";
  radius: number;
}

interface Square extends Shape {
  kind: "square";
  sideLength: number;
}

