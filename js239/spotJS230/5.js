/*
<div id="button-container">
  <button data-action="save">Save</button>
  <button data-action="delete">Delete</button>
  <button data-action="edit">Edit</button>
</div>
*/

document.getElementById('button-container').addEventListener('click', (e) => {
  if (!e.target.tagName === 'BUTTON') return;
  console.log(e.target.dataset.action);
})