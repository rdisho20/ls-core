document.addEventListener('DOMContentLoaded', e => {
  let nav = document.querySelector('ul');
  let articles = [...document.querySelectorAll('article')];

  function addHighlightClass(element) { element.classList.add('highlight'); }
  function removeHighlightClass(element) { element.classList.remove('highlight'); }

  nav.addEventListener('click', e => {
    console.log(e.target);
    let highlighted = document.querySelector('.highlight');
    if (e.target.tagName === 'A') {
      if (highlighted) {
        removeHighlightClass(highlighted);
      }
      let article = document.querySelector(e.target.getAttribute('href'));
      addHighlightClass(article);
    }
    
  }, true)

  document.querySelector('main').addEventListener('click', e => {
    const article = e.target.closest('article');
    const highlighted = document.querySelector('.highlight');
    console.log(article);
    if (!article) {
      if (!highlighted) {
        addHighlightClass(e.currentTarget);
      } else if (highlighted !== e.currentTarget) {
        removeHighlightClass(highlighted);
        addHighlightClass(e.currentTarget);
      }

      return;
    }

    e.stopPropagation();

    if (!highlighted) addHighlightClass(article);
    else if (highlighted !== article) {
      removeHighlightClass(highlighted);
      addHighlightClass(article);
    }
  });
})