/*
function Cat(name) {
  this.name = name;

  this.purr = function() {
    console.log('purr');
  }

  this.speak = function() {
    console.log('meow!');
  }
}

let butterscotch = new Cat("Butterscotch");
let pudding = new Cat("Pudding");

console.log(butterscotch.name);
butterscotch.purr();
butterscotch.speak();

console.log(pudding.name);
pudding.purr();
pudding.speak();
*/

/*
let student = {
  name: 'Joanna',
  age: 27,
  study: function() {
    console.log(`${student.name} is studying`);
  },
  pass: function() {
    console.log(`${student.name} has passed this course`);
  }
}

student.study();
student.pass();
*/

//concise method syntax
let student = {
  name: 'Joanna',
  age: 27,
  study() {
    console.log(`${student.name} is studying`);
  },
  pass() {
    console.log(`${student.name} has passed this course`);
  }
}

student.study();
student.pass();

