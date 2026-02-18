let me = {
  firstName: 'John', lastName: 'Doe', index: 0
}

let friend = {
  firstName: 'John', lastName: 'Smith', index: 1
}

let mother = {
  firstName: 'Amber', lastName: 'Doe', index: 2
}

let father = {
  firstName: 'Shane', lastName: 'Doe', index: 3
}

/*
let people = [];

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

fullName(me);
fullName(friend);
people.push(me, friend, mother, father);
console.log(people);

function rollCall(collection) {
  collection.forEach(fullName);
}

rollCall(people);
*/

let people = {
  collection: [me, friend, mother, father],

  lastIndex: 3,

  fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall() {
    this.collection.forEach(this.fullName);
  },

  add(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    person.index = this.lastIndex += 1;
    this.collection.push(person);
  },

  getIndex(person) {
    let index = -1;
    this.collection.forEach((comparator, idx) => {
      if (comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName) {
          index = idx;
        }
    });

    return index;
  },

  remove(person) {
    let index = this.getIndex(person);
    if (this.isInvalidPerson(person)) return;
    
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },

  get(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },

  update(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};

let uncle = {
  firstName: 'Big', lastName: 'Lebowski'
}

people.add(uncle);
console.log(people.get(uncle));
people.remove(mother);
console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));
console.log(people);

