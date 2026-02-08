// There is a queue for the self-checkout tills at the supermarket. Your task is
// write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer
// represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.



// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

/*

/*
input: array of positive integers representing queue
- each integer represents a customer (value is total time required to checkout)
output: total time required for all customers to checkout (integer)

Definition: 
till: shop counter that stores money

till: "A checkout till is the final, essential point in a retail store where transactions are processed, payments are accepted, and sales are recorded."

Rules:
- There will be a total `elapsedTime`
- There will be a `countdown` timer
- 1 queue serving many tills
- order of queue never changes
- front/next person in queue proceeds to till as soon as a till is available

- When my `queue` is empty, and all tills reach a value of 0
  we have the correct total time required to process all customers

---- DATA STRUCTURE ----
- tills can be managed using an OBJECT
  - will hold total time remaining for customer at that specific till
- using input ARRAY (copy?)
  - unshift values to pull from array, adding customers to till
    - minutes used @ till, counting down -- when countdown hits `0` get the next person in the cue

---- ALGORITHM ----
High level:
1. Given a till count, build an object holding the tills, each till's key is a number, value is `0`

2. From the queue, add the next customer FOR EACH available till (value represents customer checkout time), AS LONG AS the till's value is `0`

3. Everytime we check for a till's availability, we add 1 minute to the `totalTime`, and we decrement each till's value by 1

4. ONCE there are no customers remaining, AND all available tills have a value of 0 (processing time elapsed), we can return the `totalTime`

EXAMPLE:
4 -> 2
3 -> 3
2 -> 4
1 -> 5
3 -> 6
2 -> 7
1 -> 8
4 -> 9
3 -> 10
2 -> 11
1 -> 12
0 && que empth => 12

[10,2,3,3] 2
1 10 -> 9
2 2 -> 1
tt = 1
1 9 -> 8
2 1 -> 0
tt = 2
1 8 -> 7
2 3 -> 2
tt = 3


HELPER: createTills(numberOfTills)
- initizlize a value `obj` equal to {}
- for the number of tills starting at number = 1
  - add the number for that till as a key, and it's value is 0 to `obj`
- return the `obj`

Low level:
- initialize a variable `totalTime` === `-1`
- initialize a variable `tills` === return of invoked `createTills()` passing in the 2nd arguement (number of tills)
- initialize a variable `queueCopy = queue.slice()`

- WHILE the queueCopy is NOT empty && ALL values in `tills` are greater than `0` `every(callback)`
  - for each key, value in `tills`, 
    - if the value === 0
      - `unshift` the next customer in the `queueCopy`
        and set the current key equal to that value
    - decrement by `1`
  - increment my `totalTime` by `1`

- return `totalTime`
*/

function createTills(numberOfTills) {
  const obj = {};

  for (let number = 1; number <= numberOfTills; number += 1) {
    obj[number] = 0;
  }

  return obj;
}

function queueTime(queue, numberOfTills) {
  let totalTime = 0;
  const tills = createTills(numberOfTills);
  const queueCopy = queue.slice();
  const customersProcessing = [];
  let keyIndexInProcessing;

  while (true) {
    for (let key of Object.keys(tills)) {
      let customerTime = tills[key];

      if (customerTime === 0 && queueCopy.length > 0) {
        if (customersProcessing.length > 0) {
          customersProcessing.splice(keyIndexInProcessing, 1);
        }
        const newCustomerTime = queueCopy.shift();
        tills[key] = newCustomerTime;
        customersProcessing.push(newCustomerTime);
        tills[key] -= 1;
      }

      keyIndexInProcessing = customersProcessing.indexOf(key);

      if (customerTime !== 0 && customerTime < customersProcessing[keyIndexInProcessing]) {
        tills[key] -= 1
      };
    }

    totalTime += 1;
    console.log('que:', queueCopy, '; customersProcessing', customersProcessing, '; tills:', tills, '; totalTime', totalTime);

    if (queueCopy.length === 0 && Object.values(tills).every(value => value === 0)) {
      break;
    }
  }

  return totalTime;
}


console.log(queueTime([5,3,4], 1));
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10,2,3,3], 2));
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.
/*
1 10 - 1 => 9
2 2 - 1 => 1
tt => 1
1 8
2 0
tt => 2
1 7
2 3 - 1 => 2
tt => 3
1 6
2 1
tt => 4
1 5
2 0
tt => 5
1 4
2 3 - 1 => 2
tt => 6
1 3
2 1
tt => 7
1 2
2 0
tt => 8
*/


// console.log(queueTime([2,3,10], 2));
// should return 12
/*
1 2 - 1 => 1
2 3 - 1 => 2
tt => 1
1 1 - 1 => 0
2 2 - 1 => 1
tt => 2
1 10 - 1 => 9
2 1 - 1 => 0
tt => 3
1 9 - 1 => 8

*/

//console.log(queueTime([5, 2, 3], 4));
// returns 5


/*


*/