class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old \
and I am majoring in ${this.major}.`);
  }
}

const student1 = new Student('Ryan', '18', 'Biology');
student1.introduce();