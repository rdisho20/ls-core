document.addEventListener('DOMContentLoaded', (e) => {
  const main = document.querySelector('main');
  main.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (e.currentTarget === e.target) alert('main');
    else alert('sub');
  })
})