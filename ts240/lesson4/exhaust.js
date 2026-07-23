"use strict";
function describeShape(shape) {
    let area;
    switch (shape.kind) {
        case "circle":
            area = Math.PI * shape.radius ** 2;
            break;
        case "square":
            area = shape.sideLength ** 2;
            break;
        default:
            const _exhaustiveCheck = shape;
            throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
    }
    console.log("The area is " + area);
}
