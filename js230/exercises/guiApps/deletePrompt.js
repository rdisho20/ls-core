let todoItems = [
  {id: 1, title: 'Homework'},
  {id: 2, title: 'Shopping'},
  {id: 3, title: 'Calling Mom'},
  {id: 4, title: 'Coffee with Elphaba'},
];

const App = {
  generateList() {
    const todos = document.getElementById('todos');
    
    todoItems.forEach(todo => {
      let html = `
        <li id="${todo.id}">${todo.title}
          <span class="delete-button">
            <input type="submit" value="Delete">
          </span>
        </li>
      `

      todos.insertAdjacentHTML('beforeend', html);
    })
  },

  init: function() {
    this.generateList();
  }
}

App.init();