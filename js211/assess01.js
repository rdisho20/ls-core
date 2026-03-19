// 1

function checkScope() {
  console.log(a);
  console.log(b);

  var a = 'Hello';
  var b = 'World';

  console.log(a);
  console.log(b);
}

checkScope();

/*
Code will output:
undefined
undefined
'Hello'
'World'

We get this output due to concepts called variable scope, hoisting & TDZ

Hoisting encompasses the other two, what I mean is when JS runtime reads the code structure
first there is a declaration phase, during this phase, the function declaration (& its implementation)
hoisted to the top as is our variable declarations `a` and `b`.

Continuing, to explain first 2 lines as being undefined,
during our execution phase, we hoist our var a and var b declarations after the function is hoisted,
but they are not assigned at this phase.  Because of variable scope, these variables are not initially
read by JS runtime as being in lexical scope of `checkscope` because their declarations are w/ `var`,
meaning they are function scoped or global scoped (in this case global scoped).  it would be different
if they were declared w/ `let` or `const` which are block scoped

Next, When we execute the code, `a` and `b` first reference un-initialized variables and this is becuase they are
still in the temporal dead zone.  They remain their until they receive their values which is after the 
first 2 console.log calls.  Once they are assigned, our second group of console.log calls are referencing values
'Hello' & 'World' therefore we log to the console those values instead of `undefined`.
*/


// 2
function updateIngredients(list) {
  list.pop();
  list.push('cheese');
  return list;
}

let groceryList = ['bread', 'milk', 'eggs'];
let newList = updateIngredients(groceryList);

console.log(groceryList);
console.log(newList);

/*
logs:
['bread', 'milk', 'cheese']
['bread', 'milk', 'cheese']

This is because when we pass the original array ['bread', 'milk', 'eggs'] to updateIngredients,
we're passing in a reference value (pointer that points to object in the heap).  That means
when passing a pointer to an object into a function, we can destructively mutate the list
in that function since our parameter in this case `list` gets passed the actual object that is in the heap.

Any destructive actions (mutations) on the object inside the function changes it everywhere else. That is why
when we assigned the return value of the function when called w/ arguement `groceryList`, our `newList`
now stores a new pointer but that pointer points to the same object in the heap as `groceryList` does.
Thus, logged same array object to console.
*/


// 3

function selectFruits(produce) {
  return Object.entries(produce).reduce((newObj, [key, value]) => {
    if (value == 'Fruit') {
      newObj[key] = 'Fruit';
    }

    return newObj;
  }, {})
}

let produce = {
  apple: 'Fruit', carrot: 'Vegetable', pear: 'Fruit', broccoli: 'Vegetable',
};

console.log(selectFruits(produce)); // Expected { apple: 'Fruit', pear: 'Fruit' }