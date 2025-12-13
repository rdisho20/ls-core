let name = "Julian";

function greet() {
  let counter = 0;
  while (counter < 3) {
    let myName = name;
    console.log(myName);
    counter += 1;
  }

  console.log(counter);
}

greet();