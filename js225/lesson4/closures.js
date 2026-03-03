/*
function makeCounterLogger(start) {
  return function(end) {
    if (start < end) {
      for (let i = start; i <= end; i += 1) {
        console.log(i);
      }
    } else {
      for (let i = start; i >= end; i -= 1) {
        console.log(i);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
*/


function makeList() {
  const todos = [];

  return function(todo) {
    let args = new Array(...arguments);

    if (args.length === 0) {
      if (todos.length === 0) {
        console.log('The list is empty.');

        return;
      }

      todos.forEach(todo => console.log(todo));

      return;
    }

    if (todos.includes(todo)) {
      removeTodo(todo, todos);
      console.log(`${todo} removed!`);

      return;
    } else if (!todos.includes(todo)) {
      addTodo(todo, todos);
      console.log(`${todo} added!`);

      return;
    }
  }
}

function removeTodo(todo, todos) {
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
}

function addTodo(todo, todos) {
  todos.push(todo);
}


let list = makeList();

list(); // The list is empty.
list('make breakfast'); // make breakfast added!
list('read book'); // read book added!

list(); // make breakfast, read book

list('make breakfast'); // make breakfast removed!
list(); // read book