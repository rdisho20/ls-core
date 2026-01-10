function totalArea(rectangles) {
  return rectangles.reduce((totalArea, rectangle) => {
    return totalArea + (rectangle[0] * rectangle[1]);
  }, 0);
}

function totalSquareArea(rectangles) {
  const areasSquared = rectangles
    .filter(elem => elem[0] === elem[1])
    .map(elem => elem[0] * elem[1]);

  return areasSquared.reduce((sum, area) => sum + area);

  /* You can also use totalArea function
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
  */
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141

let rectanglesAgain = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectanglesAgain));    // 121