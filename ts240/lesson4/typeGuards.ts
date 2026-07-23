/*
type Circle = {
  color: string;
  radius: number;
};

type Square = {
  color: string;
  sideLength: number;
};

type Shape = Circle | Square;

function describeShape(shape: Shape) {
  let area: number;
  console.log("This shape is " + shape.color);

  area = shape.radius * shape.radiues * 3.14

  area = shape.sideLength ** 2;
  console.log("this area is " + area);
}
*/

/*
function logValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else {
    console.log("Numberic value:", value.toFixed(2));
  }
}

function describeShape(shape: Shape) {
  let area: number;
  console.log("This shape is " + shape.color);

  if ("radius" in shape) {
    area = Math.PI * shape.radius * shape.radius;
  } else {
    area = shape.sideLength * shape.sideLength);
  }
  console.log("The area is " + area);
}

type Circle = {
  radius: number;
};

function describeCircle(circle?: Circle): void {
  if (circle) {
    console.log("This is a circle with radius:", circle.radius);
  }
}
*/

/*
class Circle {
  constructor(public radius: number) {}
}

class Square {
  constructor(public sideLength: number) {}
}

type Shape = Circle | Square;

function describeShape(shape: Shape): void {
  if (shape instanceof Circle) {
    console.log(shape.radius);
  } else {
    console.log(shape.sideLength);
  }
}
*/

type Video = {
  title: string;
  creator: string;
};

function printVideoInfo(videoOrVideos: Video | Video[]) {
  if (Array.isArray(videoOrVideos)) {
    videoOrVideos.forEach((v) =>
      console.log(`"${v.title}" by ${v.creator}`)
    );
  } else {
    console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
  }
}

printVideoInfo({
  title: "Introduction to TypeScript",
  creator: "John Doe",
});