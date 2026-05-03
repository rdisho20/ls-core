let todoItems = [
  {id: 1, title: 'Homework'},
  {id: 2, title: 'Shopping'},
  {id: 3, title: 'Calling Mom'},
  {id: 4, title: 'Coffee with John'},
];

/*
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

  generateDeleteDialog() {
    const dialogueOverlay = document.createElement('div');
    const dialogueBox = document.createElement('div')
    document.body.appendChild(dialogueOverlay);
    dialogueOverlay.appendChild(dialogueBox);
    dialogueOverlay.classList.add('delete-dialogue');
  },

  init() {
    this.generateList();
    this.generateDeleteDialog();


  }
}

App.init();
*/

class App {
  constructor(todos) {
    this.todosData = todos;
    this.todosList = document.getElementById('todos');
    this.renderTodos();
    this.createDeleteDialogue();
    console.log(this.dialogueBox);
    console.log(this.dialogueOverlay);
  }

  renderTodos() {
    this.todosData.forEach(todo => {
      let html = `
        <li data-id="${todo.id}">${todo.title}
          <span class="delete-button">
            <button data-id=${todo.id}>Delete</button>
          </span>
        </li>
      `

      this.todosList.insertAdjacentHTML('beforeend', html);
    })
  }

  createDeleteDialogue() {
    this.dialogueOverlay = document.createElement('div');
    this.dialogueBox = document.createElement('div')
    document.body.appendChild(this.dialogueOverlay);
    this.dialogueOverlay.appendChild(this.dialogueBox);
    this.dialogueOverlay.classList.add('delete-dialogue');
  }

  handleClicks() {
    document.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') return;
      /*const todo = */
      this.dialogueBox.innerHTML = `
        <p>Are you sure you want to delete ""?</p>
      `
    })
  }

  getTodo(id) {
    // [...this.todosList.children].find
  }
}

new App(todoItems);
