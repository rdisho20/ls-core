/*
function isString(value: any): value is string {
  return typeof value === "string";
}

function doSomethingWithLibraryData(data: any) {
  if (isString(data)) {
    console.log(data.toUpperCase());
  } else {
    console.log("Data is not a string.");
  }
}
*/

function processInput(input: any) {
  switch(typeof input) {
    case "string":
      console.log(input.toUpperCase());
      break;
    case "number":
      console.log(input.toFixed(2));
      break;
    case "object" || "boolean":
      if (Array.isArray(input)) console.log(input.length);
      else console.log(input);
  }
}