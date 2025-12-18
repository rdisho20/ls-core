let rlSync = require('readline-sync');
let width = Number(rlSync.question('What is the width in meters? '));
let height = Number(rlSync.question('What is the height in meters? '));

const SQUARE_FEET = 10.7639

let widthFeet = width * SQUARE_FEET;
console.log('Width:');
console.log(`Square Meters: ${width}; Square Feet ${widthFeet}`);

let heightFeet = height * SQUARE_FEET;
console.log('Height: ');
console.log(`Square Meters: ${height}; Square Feet ${heightFeet}`);
console.log();

console.log(`The are is ${height * width} sq m & ${widthFeet * heightFeet} sq ft`)