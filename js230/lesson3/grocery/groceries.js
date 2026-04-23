document.addEventListener('DOMContentLoaded', e => {
  const form = document.querySelector('form');
  const list = document.getElementById('grocery-list');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const itemName = form.elements.name.value;
    let quantity = form.elements.quantity.value;
    const parsed = parseInt(quantity, 10);
    if (!quantity || Number.isNaN(parsed)) quantity = '1';
    const listItem = document.createElement('li');
    listItem.textContent = `${quantity} ${itemName}` + (quantity > 1 ? 's' : '');
    list.appendChild(listItem);
    form.reset();
  })

  form.addEventListener('contextmenu', e => {  // right click 'Add' button clears list
    e.preventDefault();
    list.innerHTML = '';
    form.reset();
  })
})