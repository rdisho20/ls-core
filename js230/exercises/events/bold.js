function makeBold(element) {
  element.style.fontWeight = 'bold';

  let boldedEvent = new CustomEvent('bolded');

  element.dispatchEvent(boldedEvent);
}

let sectionElement = document.querySelector('section');

sectionElement.addEventListener('bolded', (e) => {
  e.currentTarget.classList.add('highlight');
});

makeBold(sectionElement);

console.log(sectionElement.classList.contains('highlight'));  // true
console.log(sectionElement.style.fontWeight);  // bold