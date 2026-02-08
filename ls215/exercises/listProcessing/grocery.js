/*
input: 2 dimensional array that represents a grocery list
output: one-dimensional array

Rules:
1. each element @ grocery list ● fruit name & number representing desired quantity of fruit
2. @ output array, each fruit name appears the number of times its desired quantity
  - 'apple', 3? => 'apple', 'apple', 'apple'

---- DATA STRUCTURE ----
Use input array as is, for each item, return a new array with the number of elements the item is desired

---- ALGORITHM ----
1. Given a grocery list, for each item, return an array w/ the fruit name the amount of times desired
2. return the new 2 dimensional array flattened to a 1 dimensional array

Low level:
- Given an array, map each element
  pushing to new element, number of times fruit is desired `element[0]` is fruit name, `element[1]` is its desired count
  - For `idx = 0` up to AND including `count`, push fruit name to array
  - return the array

- return the `newArray` w/ `.flat()` to flatten it
*/

function buyFruit(groceryList) {
  const list = groceryList.map(fruit => {
    const result = [];
    const name = fruit[0];
    const count = fruit[1];
    
    for (let idx = 1; idx <= count; idx += 1) {
      result.push(name);
    }

    return result;
  })

  return list.flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]