let intervalId;  // adding here because value not part of DOM

document.addEventListener('DOMContentLoaded', (e) => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');

  textField.addEventListener('click', (e) => {
    e.stopPropagation();
    textField.classList.add('focused');

    if (!intervalId) {
      intervalId = setInterval(() => textField.classList.toggle('cursor'), 500);
    }
  })

  document.addEventListener('keydown', (e) => {
    console.log(e);
    if (textField.classList.contains('focused')) {
      if (e.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1);
      } else if (e.key.length === 1) {
        content.textContent += e.key;
      }
    }
  })

  document.addEventListener('click', (e) => {
    clearInterval(intervalId);
    intervalId = undefined;
    textField.classList.remove('focused');
    textField.classList.remove('cursor');
  })
})

