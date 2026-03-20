function makeCounter() {
  let count = 0;

  return {
    increment() {
      count += 1;
    },
    getCount() {
      return count;
    }
  }
}

let counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());

const counter2 = makeCounter();
console.log(counter2.getCount()); // => 0