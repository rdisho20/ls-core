/*
implement:
- search for contacts
- adding contacts
- editing/deleting contacts
- create tags
- add/remove tags from user
*/

const tagsList = ['work', 'friend'];

class Contact {
  constructor(data) {
    this.renderContact(data);
  }

  renderContact({ id, full_name: fullName, email, phone_number: phoneNumber, tags }) {
    const contactsDiv = document.getElementById('contacts');
    const html = `
      <div class="contact-card" data-id="${id}">
        <p>
          <span class="attribute" data-key="fullName">Full Name:</span> ${fullName}
        </p>
        <p>
          <span class="attribute" data-key="email">Email:</span> ${email}
        </p>
        <p>
          <span class="attribute" data-key="phoneNumber">Phone:</span> ${phoneNumber}
        </p>
        <ul class="tags" data-key="tags">
          <li class="tag-label">Tags:</li>
        </ul>
      </div>
    `

    contactsDiv.insertAdjacentHTML('beforeend', html);
    const tagsElement = document.querySelector(`.contact-card[data-id="${id}"] ul.tags`);

    if (tags) {
      tags = tags.split(',');
      tags.forEach(tag => {
        const li = document.createElement('LI');
        li.textContent = tag;
        li.classList.add('tag');
        tagsElement.append(li);
      })
    } else {
      const li = document.createElement('LI');
      li.classList.add('no-tags')
      li.textContent = 'NONE, ADD ONE!';
      tagsElement.append(li);
    }

    const buttonsHTML = `
      <button class="edit" data-id="${id}">EDIT</button>
      <button class="delete" data-id="${id}">DELETE</button>
    `
    tagsElement.parentNode.insertAdjacentHTML('beforeend', buttonsHTML);
  }
}


class App {
  constructor() {
    this.renderTagsFilterMenu();
    this.renderAllContacts();
    this.createEventListeners();
  }

  async renderAllContacts() {
    const contacts = await this.getAllContacts();
    contacts.forEach(data => {
      new Contact(data);
      document.querySelector(`.edit[data-id="${data.id}"]`)
        .addEventListener('click', this.handleEditUserPopUp.bind(this));
      document.querySelector(`.delete[data-id="${data.id}"]`)
        .addEventListener('click', this.handleDeleteUser.bind(this));
    })
  }

  createEventListeners() {
    const form = document.getElementById('create-contact-form');
    form.addEventListener('submit', this.handleCreateContact.bind(this));
    const tagsContainer = document.querySelector('.tags-container');
    tagsContainer.addEventListener('change', this.handleTagFilter.bind(this));
    const addTagForm = document.getElementById('add-tag');
    addTagForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = e.target.firstElementChild.value;
      console.log(input);
      tagsList.push(input);
      console.log(tagsList);
      const container = document.querySelector('.tags-container');
      container.replaceChildren();
      this.renderTagsFilterMenu.call(this);
    })
  }

  renderTagsFilterMenu() {
    const container = document.querySelector('.tags-container');
    tagsList.forEach(tag => {
      const div = document.createElement('DIV')
      const input = document.createElement('INPUT');
      input.type = 'checkbox';
      input.name = tag;
      const label = document.createElement('LABEL');
      label.textContent = tag;
      label.htmlFor = tag;
      div.append(input, label);
      container.append(div);
    })
  }

  /*
  input: event, output: displaying filtered contacts each 'change'

  Get all contacts, then returned filters array of contacts then for each contact
  */

  async handleTagFilter(e) {
    console.log(e.target.name);
    const tag = e.target.name;
    let contacts = await this.getAllContacts();
    if (e.target.checked) {
      contacts = contacts.filter(contact => contact.tags.includes(tag));
      this.renderFilteredContacts.call(this, contacts);
    }
    // maybe need to adjust when changes to unchecked,... then if any of the other inputs aren't 'checked' remove all children
    // then re-render all contacts
  }

  renderFilteredContacts(contacts) {
    contacts.forEach(data => {
      new Contact(data);
      document.querySelector(`.edit[data-id="${data.id}"]`)
        .addEventListener('click', this.handleEditUserPopUp.bind(this));
      document.querySelector(`.delete[data-id="${data.id}"]`)
        .addEventListener('click', this.handleDeleteUser.bind(this));
    })
  }

  handleCreateContact(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    formData.tags = '';
    const json = JSON.stringify(formData);
    this.createContact(json);
    document.getElementById('contacts').replaceChildren();
    this.renderAllContacts();
  }

  handleDeleteUser(e) {
    const userData = this.getContactCardData(e.target.dataset.id);
    if (confirm(`Are you sure you want to delete user`)) {
      e.target.parentNode.remove();
      this.deleteUser(e.target.dataset.id);
      alert(`You successfully deleted user with name "${userData.fullName}"`)
    }
  }

  handleEditUserPopUp(e) {
    const id = e.target.dataset.id;
    const userData = this.getContactCardData(id);
    let userTags = userData.tags.split(',');
    userTags = userTags[0] === '' ? [] : userTags;
    const tagsHTML = userTags.length === 0
      ? 'NONE'
      : userTags.reduce((accum, tag, idx, arr) => {
        if (idx === arr.length - 1) {
          accum += tag;
        } else {
          accum += tag + ', ';
        }

        return accum;
      }, '');

    console.log('tags list:', tagsList, 'user tags:', userTags);
    const availableTagsSelectHTML = tagsList.reduce((accum, tag) => {
      if (!userTags.includes(tag)) {
        console.log('user does not have tag:', tag);
        accum += `<option value="${tag}" data-value="${tag}">${tag}</option>`;
      }

      return accum;
    }, '');

    const html = `
      <div class="edit-overlay">
        <div class="edit-form">
          <form data-id="${id}" method="post" action="/api/contacts/:id">
            <h2>Edit Contact</h2>
            <label name="full_name">
              Full Name: 
              <input name="full_name" placeholder="Please Enter Full Name" value="${userData.fullName}" required>
            </label>
            <label name="email">
              Email: 
              <input name="email" type="email" placeholder="example@example.com" value="${userData.email}" required>
            </label>
            <label name="phone_number">
              Phone number:
              <input name="phone_number" maxlength="10" value="${userData.phoneNumber}">
            </label>
            <p>Existing Tags: ${tagsHTML}</p>
            <p>Tags to Add: <span id="tags-to-add"></span></p>
            <label name="tags">
              <select name="tags">
                <option value="">Select tag to add</option>
                ${availableTagsSelectHTML}
              </select>
              <button id="contact-tag-add-button">ADD Tag</button>
            </label>
            <button type="submit">Save Changes</button>
            <button id="cancel-button">CANCEL</button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', html);
    document.querySelector(`.edit-form > [data-id="${id}"]`)
      .addEventListener('submit', this.handleEditUser.bind(this));
    document.getElementById('cancel-button').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.edit-overlay').remove();
    })
    document.getElementById('contact-tag-add-button').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newTagsElement = document.getElementById('tags-to-add');
      const selectedTagToAdd = e.target.previousElementSibling.value;
      if (!selectedTagToAdd) return;

      newTagsElement.textContent += `${selectedTagToAdd}, `
      const tagOptionElem = document.querySelector(`[data-value="${selectedTagToAdd}"]`);
      tagOptionElem.remove();
    }, true);
  }

  async handleEditUser(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    await this.editUser(id);
    document.querySelector('.edit-overlay').remove();
    alert("User updated!");
  }

  updateContactCardDisplay(id, tags) {
    const cardTagsList = document.querySelector(`.contact-card[data-id="${id}"] .tags`);
    const noTags = document.querySelector(`.contact-card[data-id="${id}"] .no-tags`);
    if (noTags) noTags.remove();

    tags.forEach(tag => {
      const li = document.createElement('LI');
      li.textContent = tag;
      li.classList.add('tag');
      cardTagsList.append(li);
    })
  }

  /* ########################################

  [DONE] Implement Delete User route/handler
  [DONE] Implement overlay for EDIT user
  [DONE] Implement EDIT user route
  [DONE]Include tags -> getContactCardData function
  [DONE] Format existing tags in edit user popup
  [DONE] Create store for all tags in the system
  [DONE] Implement drop down menu of available tags to add that haven't been added
  [DONE] Implement event listener on 'contact-tag-add-button', when clicked, 
    add current value (tag) to Tags to add
  [DONE] Implement getting tags for the editUser request body
  [DONE] Implementing adding tag to a user
  [DONE] Implement if saving w/o adding tags, ensure that existing tags are not replaced w/ ''
  
  [ACTIVE] Implement adding tags
  Implement search for contact
  Implement select tag to show all contacts w/ those tags

  ######################################## */


  getContactCardData(id) {
    const data = {}
    const card = document.querySelector(`.contact-card[data-id="${id}"]`);
    [...card.children].forEach(child => {
      if (!child.classList.contains('tags') && child.tagName !== 'BUTTON') {
        const splitProperty = child.textContent.trim().split(' ');
        if (splitProperty.length > 2) {
          data[child.firstElementChild.dataset.key] = [splitProperty[2], splitProperty[3]].join(' ');
        } else {
          data[child.firstElementChild.dataset.key] = splitProperty[1];
        }
      } else if (child.classList.contains('tags')) {
        const tags = [];
        [...child.children].forEach(tag => {
          if (!tag.classList.contains('tag-label') && tag.textContent !== 'NONE, ADD ONE!') {
            tags.push(tag.textContent);
          }
        })
        data[child.dataset.key] = tags.join(',');
      }
    });
    
    return data;
  }

  async getContactById(id) {
    const form = document.getElementById('search');
    const url = form.action.replace(':id', id);
    const response = await fetch(url)
    const json = await response.json();
    return json;
  }

  async getAllContacts() {
    const response = await fetch('/api/contacts');
    const json = await response.json();
    return json;
  }

  async deleteUser(id) {
    await fetch(`api/contacts/${id}`, {
      method: 'DELETE',
    })
  }

  async editUser(id) {
    let form = document.querySelector(`.edit-form > [data-id="${id}"]`);
    form = new FormData(form);
    form = Object.fromEntries(form);
    const contact = await this.getContactById(id);
    let tagsToAdd = document.getElementById('tags-to-add').textContent;
    console.log(tagsToAdd);
    tagsToAdd = tagsToAdd.split(', ');
    tagsToAdd.pop();

    this.updateContactCardDisplay(id, tagsToAdd);

    tagsToAdd = tagsToAdd.join(',');
    form.tags = contact.tags + ',' + tagsToAdd;
    console.log('tags:', form.tags);
    const json = JSON.stringify(form);
    console.log(json);

    await fetch(`api/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    });
  }

  async createContact(json) {
    const form = document.getElementById('create-contact-form');
    await fetch(form.action, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json,
    })
    form.reset();
  }
}

const app = new App();