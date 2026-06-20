const elem = document.getElementById('main-title');
const newElem = document.createElement('H2');
newElem.textContent = 'New Title';

document.replaceChild(newElem, elem);