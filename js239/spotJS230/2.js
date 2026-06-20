function addClassToLinks() {
  const anchorElements = document.querySelectorAll('#content a');
  anchorElements.forEach(elem => {
    elem.classList.add('highlight-link');
  })
}