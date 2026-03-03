/*
function makeList() {
  const todos = [];

  return function(todo) {
    if (todo === undefined) {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        todos.forEach(todo => console.log(todo));
      }
      return;
    }

    if (todos.includes(todo)) {
      removeTodo(todo);
      console.log(`${todo} removed!`);
    } else if (!todos.includes(todo)) {
      addTodo(todo);
      console.log(`${todo} added!`);
    }
  }
}
*/

function makeList() {
  let todos = [];

  return {
    remove(todo) {
      const index = todos.indexOf(todo);
      todos.splice(index, 1);
      console.log(`${todo} removed!`);
    },
    
    add(todo) {
      todos.push(todo);
      console.log(`${todo} added!`);
    },

    list() {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        todos.forEach(todo => console.log(todo));
      }
    },

    getTodos() {
      return todos;
    }
  }
}


let list = makeList();
list.add('peas'); // peas added!
list.list(); // peas
list.add('corn'); // corn added!
list.list(); // peas, corn
list.remove('peas'); // peas removed!
list.list(); // corn
console.log(list.getTodos());