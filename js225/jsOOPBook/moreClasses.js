/*
'use strict';

let database = {
  getStudentId(name) {
    // access database
    return 4201567;
  }
};

class Student {
  #name;
  #track;

  constructor(firstName, lastName, track) {
    this.#name = [firstName, lastName];
    this.#track = track;
  }

  #revealStudentId() {
    let studentId = database.getStudentId(this.#name);
    console.log(studentId);
  }

  name() {
    return this.#name;
  }

  track() {
    return this.#track
  }
}

let student = new Student('Kay', 'Oakley', 'Javascript');
console.log(`${student.name().join(' ')} ${student.track()}`);
*/

/*
class Student {
  constructor(firstName, lastName, track) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.track = track;
  }

  get name() {
    return [this.firstName, this.lastName];
  }
}

let student = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student.name.join(' ')} ${student.track}`);
*/

/*
let teacher = {
  firstName: 'Alan', lastName: 'Stone',
  _students: ['Pete', 'Brian', 'Andrea', 'Beverly', 'Joel'],

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  get students() {
    return [...this._students];
  },
}

console.log(teacher.fullName);

let students = teacher.students;
console.log(students);

students.pop()
console.log(students);
console.log(teacher.students);
*/

/*
class Student {
  constructor(firstName, lastName, track) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._track = track;
  }

  get name() {
    return [this.firstName, this.lastName];
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get track() {
    return this._track;
  }
}

let student = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student.name.join(' ')} ${student.track}`);
// Kay Oakley JavaScript
console.log(`${student.firstName} ${student.lastName}`);
// Kay Oakley
*/

/*
class Student {
  #firstName;
  #lastName;
  #track;

  constructor(firstName, lastName, track) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.track = track; // calling the setter here
  }

  get name() {
    return [this.firstName, this.lastName];
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get track() {
    return this.#track;
  }

  set track(newTrack) {
    switch (newTrack) {
      case 'JavaScript':
      case 'Python':
      case 'Ruby':
        this.#track = newTrack;
        break;
      default:
        throw new Error(`Invalid track: '${newTrack}'`)
    }
  }
}

let student2 = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student2.name.join(' ')} ${student2.track}`);
// Kay Oakley JavaScript

let student3 = new Student('Bill', 'Wisner', 'Python');
console.log(`${student3.name.join(' ')} ${student3.track}`);
// Bill Wisner Python

let student4 = new Student('Kim', 'Serkes', 'Gnome');
console.log(`${student4.name.join(' ')} ${student4.track}`);
// Invalid track: 'Gnome'
*/

/*
let teacher = {
  firstName: 'Alan', lastName: 'Stone',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set name(nameArray) {
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
  }
}

console.log(teacher.fullName);
teacher.name = ['Mike', 'Becker'];
console.log(teacher.fullName);
*/

/*
class MyClass {
  static myField = 'This is a static field';

  constructor() {
    console.log(MyClass.myField);
  }
}

console.log(MyClass.myField);

const instance = new MyClass();
console.log(instance.myField);


class Student {
  static counter = 0;

  static showCounter() {
    console.log(`We have created ${Student.counter} students!`)
  }

  constructor(name) {
    this.name = name;
    Student.counter += 1;
  }
}

console.log(Student.counter);

let ken = new Student('Ken');
console.log(Student.counter);

let lynn = new Student('Lynn');
console.log(Student.counter);

Student.showCounter();
*/

/*
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  showAge() {
    console.log(this.#age);
  }

  set age(newAge) {
    if (typeof(age) === 'number' && age > 0) {
      this.#age = age;
    } else {
      throw new RangeError('Age must be positive!!');
    }
  }
}

let person = new Person('John', 30);
person.showAge();
person.age = 31;
person.showAge();

try {
  person.age = -5;
  person.showAge();
} catch (e) {
  console.log('RangeError: Age must be positive');
}
*/

/*
class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.year = year;
  }

  set year(newYear) {
    if (typeof(newYear) === 'number' && newYear >= 1900) {
      this.#year = newYear;
    } else {
      throw new RangeError('Year cannot be before 1900');
    }
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get year() {
    return this.#year;
  }
}

let book = new Book('The Great Gatsby', 'F. Scot Fitzgerald', 1925);
console.log(book.title);
console.log(book.author);
console.log(book.year);

try {
  book.year = 1825;
} catch (e) {
  console.log(e);
}

try {
  let book2 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
} catch (e) {
  console.log(e);
}
*/

/*
class BankAccount {
  #balance;

  constructor() {
    this.#balance = 0;
  }

  #checkBalance() {
    console.log(this.#balance);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#checkBalance();
  }

  withdraw(amount) {
    if (this.#balance < amount) {
      throw new RangeError('Insufficient funds');
    } else {
      this.#balance -= amount;
      this.#checkBalance();
    }
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100);
*/

/*
class Rectangle {
  #width;
  #height;

  static lengthInRange(length) {
    if (length < 1) {
      return false;
    }

    return true;
  }

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get area() {
    return this.width * this.height;
  }

  set width(length) {
    if (!Rectangle.lengthInRange(length)) {
      throw new RangeError('width must be positive');
    } else {
      this.#width = length;
    }
  }

  set height(length) {
    if (!Rectangle.lengthInRange(length)) {
      throw new RangeError('height must be positive');
    } else {
      this.#height = length;
    }
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.area);

rect.width = 20;
console.log(rect.area);

rect.height = 12;
console.log(rect.area);

try {
  rect.width = 0;
} catch (e) {
  console.log(e);
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e);
}
*/


class MathUtils {
  static add(addend1, addend2) {
    return addend1 + addend2;
  }

  static subtract(minuend, subtrahend) {
    return minuend - subtrahend;
  }

  static multiply(factor1, factor2) {
    return factor1 * factor2;
  }

  static divide(dividend, divisor) {
    if (divisor === 0) {
      throw new RangeError('Division by zero');
    }

    return dividend / divisor;
  }
}

console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(10, 4));
console.log(MathUtils.multiply(6, 7));
console.log(MathUtils.divide(20, 5));
console.log(MathUtils.divide(10, 0));
