/*
// Q set 10 problem 1
function createPerson(name, age, occupation) {
  return {
    name,
    age,
    occupation,
  };
}

function createPerson(name, age, occupation) {
  return {
    name: name,
    age: age,
    occupation: occupation,
  }
}

console.log(createPerson('Alice', 30, 'Engineer'));
*/


/*
// Q set 10 problem 2
function createCalculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
  }
}

console.log(createCalculator().add(5, 3));
*/


/*
// problem 3
let getGreeting = (name) => 'Hello, ' + name + '!';

console.log(getGreeting('World'));
*/


/*
// problem 4
function formatAddress(street, city, zipCode) {
  return `Address:\n${street}\n${city}, ${zipCode}`
}

console.log(formatAddress('123 Main St', 'Anytown', '12345'));
*/


/*
// PROBLEM 5
function configure(options = {}) {
  let speed = options.speed || 'fast';
  let retries = options.retries || 3;
  console.log('Speed:', speed);
  console.log('Retries', retries);
}


configure({ speed: 'slow' })
configure()
*/


/*
// Problem 6
let userProfile = {
  id: 101,
  email: '[test@example.com](mailto:test@example.com)',
  personalInfo: {
    name: 'John Doe',
    address: {
      line1: '456 Park Ave',
      city: 'Metropolis',
    }
  }
};

let topScores = [98, 95, 92, 89, 85];

// Rewrite the following assignments using destructuring

let [userEmail, userName] = [userProfile.email, userProfile.personalInfo.name]
let [firstScore, secondScore] = [topScores[0], topScores[1]];

console.log(userEmail);      // [test@example.com](mailto:test@example.com)
console.log(userName);       // John Doe
console.log(firstScore);     // 98
console.log(secondScore);    // 95
*/
