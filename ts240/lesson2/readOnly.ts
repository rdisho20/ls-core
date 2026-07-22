interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  dx += point.x;
  dy += point.y;

  return { x: dx, y: dy }
}