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
    this.boundContextMenuClick = this.contextMenuClickCallback.bind(this);
    this.boundDialogueOverlayClick = this.dialogueOverlayCallback.bind(this);
    this.renderTodos();
    this.createDeleteDialogue();
    this.creatContextMenus();
    this.handleClicks();
    this.handleContextMenu();
  }

  renderTodos() {
    this.todosData.forEach(todo => {
      let html = `
        <li data-id="${todo.id}">${todo.title}
          <span data-id="${todo.id}" class="delete-button">
            <button data-id=${todo.id} class="delete">Delete</button>
          </span>
        </li>
      `
      this.todosList.insertAdjacentHTML('beforeend', html);
    })
  }

  creatContextMenus() {
    this.todosData.forEach(todo => {
      let html = `
        <div data-id="${todo.id}" class="context-menu">
          <ul>
            <li class="edit-todo">
              <a href="#" class="edit-todo">Edit Todo</a>
            </li>
            <li class="show-details">
              <a href="#" class="show-details">Show Details</a>
            </li>
            <li class="delete" data-id=${todo.id}>
              <a href="#" class="delete" data-id="${todo.id}">Delete</a>
            </li>
          </ul>
        </div>
      `
      document.body.insertAdjacentHTML('beforeend', html);
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
    this.todo = this.getTodo(e.target.dataset.id)
    this.dialogueBox.innerHTML = `
      <p>Are you sure you want to delete "${this.todo.item.title}"?</p>
      <div class="confirmation-buttons">
        <button class="yes">Yes</button> <button class="no">No</button>
      </div>
    `
    this.dialogueOverlay.style.visibility = 'visible';
  }

  deleteTodo() {
    let index = this.todosData.findIndex(todo => 
      todo.id === this.todo.item.id
    );
    this.todosData.splice(index, 1);
    this.todo.element.remove();
  }

  handleClicks() {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.context-menu')) {
        this.hideContextMenu();
      }
      if (e.target.closest('.context-menu')) {
        if (e.target.classList.contains('delete')) {
          this.hideContextMenu();
        }
      }
      if (e.target.tagName !== 'BUTTON') return;
      if (e.target.classList.contains("delete")) {
        this.displayDialogue(e);
      }

      if (e.target.classList.contains('yes')) {
        this.deleteTodo();
        this.dialogueOverlay.style.visibility = 'hidden';
      } else if (e.target.classList.contains('no')) {
        this.dialogueOverlay.style.visibility = 'hidden';
      }
    })

    this.dialogueOverlay.addEventListener('click', this.boundDialogueOverlayClick);
  }

  handleContextMenu() {
    this.todosList.addEventListener('contextmenu', (e) => {
      if (e.target.dataset.id === undefined) return;
      e.preventDefault();
      try {
        if (this.contextMenu.dataset.id !== e.target.dataset.id) {
          console.log("checking ids");
          this.contextMenu.style.display = 'none';
          this.contextMenu = this.getContextMenu(e.target.dataset.id);
        }
      } catch (error) {
        this.contextMenu = this.getContextMenu(e.target.dataset.id);
      }
      this.contextMenu.style.display = 'block';
      this.contextMenu.style.left = e.clientX + 'px';
      this.contextMenu.style.top = e.clientY + 'px';
      this.contextMenu.addEventListener('click', this.boundContextMenuClick);
    })
  }

  getTodo(id) {
    const todoElement = [...this.todosList.children].find(todo => todo.dataset.id == id);
    const todoItem = this.todosData.find(todo => todo.id == id);
    return { element: todoElement, item: todoItem };
  }

  getContextMenu(id) {
    const contextMenus = document.querySelectorAll(".context-menu");
    return [...contextMenus].find(menu => {
      return menu.dataset.id === id;
    })
  }

  hideContextMenu() {
    try {
      this.contextMenu.style.display = 'none';
      this.contextMenu.removeEventListener('click', this.boundContextMenuClick);
      return;
    } catch (error) {
      return;
    }
  }

  dialogueOverlayCallback(e) {
    if (!e.target.classList.contains('delete-dialogue-container')) return;
    this.dialogueOverlay.style.visibility = 'hidden';
  }

  contextMenuClickCallback(e) {
    console.log("handle context menu 2nd handler listening...");
    if (!e.target.classList.contains('delete')) return;
    e.preventDefault();
    try {
      this.displayDialogue(e);
    } catch (error) {
      return;
    }
  }
}

new App(todoItems);
