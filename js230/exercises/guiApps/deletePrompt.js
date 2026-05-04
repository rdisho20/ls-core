let todoItems = [
  {id: 1, title: 'Homework'},
  {id: 2, title: 'Shopping'},
  {id: 3, title: 'Calling Mom'},
  {id: 4, title: 'Coffee with John'},
];

class App {
  constructor(todos) {
    this.todosData = todos;
    this.todosList = document.getElementById('todos');
    this.renderTodos();
    this.createDeleteDialogue();
    this.handleClicks();
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
    this.dialogueOverlay.classList.add('delete-dialogue-container');
    this.dialogueBox.classList.add('delete-dialogue-box');
  }

  displayDialogue(e) {
    const todo = this.getTodo(e.target.dataset.id)
    this.todoElement = todo[0];
    this.todoItem = todo[1];
    this.dialogueBox.innerHTML = `
      <p>Are you sure you want to delete "${this.todoItem.title}"?</p>
      <div class="confirmation-buttons">
        <button class="yes">Yes</button> <button class="no">No</button>
      </div>
    `
  }

  deleteTodo() {
    let index = this.todosData.findIndex(todo => 
      todo.id === this.todoItem.id
    );
    this.todosData.splice(index, 1);
    this.todoElement.remove();
  }

  handleClicks() {
    document.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') return;
      if (e.target.textContent === "Delete") {
        this.displayDialogue(e);
        this.dialogueOverlay.style.visibility = 'visible';
      }

      try {
        if (e.target.classList.contains('yes')) {
          this.deleteTodo();
          this.dialogueOverlay.style.visibility = 'hidden';
        } else if (e.target.classList.contains('no')) {
          this.dialogueOverlay.style.visibility = 'hidden';
        }
      } catch (error) {
        console.error(error, error.message);
        this.dialogueOverlay.style.visibility = 'hidden';
      }
    })
  }

  getTodo(id) {
    const todoElement = [...this.todosList.children].find(todo => todo.dataset.id == id);
    const todoItem = this.todosData.find(todo => todo.id == id);
    return [todoElement, todoItem];
  }
}

const todos = new App(todoItems);
