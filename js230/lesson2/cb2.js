let elem0 = document.querySelector('#elem0');
let elem1 = document.querySelector('#elem1');
let elem4 = document.querySelector('#elem4');

elem0.addEventListener('click', event => alert(event.currentTarget.id));
elem1.addEventListener('click', event => alert(event.currentTarget.id), true);
elem4.addEventListener('click', event => alert(event.currentTarget.id));