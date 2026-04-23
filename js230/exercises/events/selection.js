/*
element.setAttribute("hidden", "hidden")
element.removeAttribute("hidden")

input: html element
output: (side effect) - hide all values not in its corresponding 'animalClassMap' property value

If a selection changes in the 'Classifications' menu
  get the value of the selection
  for each element in that value's animalClassMap property value
    for each key, value in animalClassMap
      if the current element is not
*/

  /* select bear? 
  given the selection 'bear'
  check the animal map's bear value, hide each classification not in the 'bear' map value
  */

document.addEventListener('DOMContentLoaded', e => {
  const form = document.querySelector('form');
  const classifications = document.getElementById('animal-classifications');
  const animals = document.getElementById('animals');
  const classMap = {
    'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    'Mammal': ['Bear', 'Whale'],
    'Bird': ['Ostrich'],
  }
  const animalMap = {
    'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Turtle': ['Vertebrate', 'Cold-blooded'],
    'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Salmon': ['Vertebrate', 'Cold-blooded'],
    'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
  }

  function updateMenu(menu, selection, map) {
    if (selection.value !== 'Classifications' && selection.value !== 'Animals') {
      [...menu.children].forEach(option => {
        if (!map[selection.value].includes(option.value)) {
          option.setAttribute('hidden', 'hidden');
        } else if (option.hasAttribute("hidden")) option.removeAttribute('hidden');
      })
    }
  }

  function resetForm() {
    [...classifications.children].forEach(option => {
      if (option.hasAttribute("hidden")) option.removeAttribute('hidden');
    });

    [...animals.children].forEach(option => {
      if (option.hasAttribute("hidden")) option.removeAttribute('hidden');
    });

    classifications.value = 'Classifications';
    animals.value = 'Animals';
  }
  
  form.addEventListener('input', e => {
    if (e.target === animals) {
      const selection = [...animals.children].find(element => element.value === e.target.value);
      updateMenu(classifications, selection, animalMap);
    } if (e.target === classifications) {
      const selection = [...classifications.children].find(element => element.value === e.target.value);
      updateMenu(animals, selection, classMap);
    }
  })

  document.getElementById('clear').addEventListener('click', e => {
    e.stopPropagation();
    resetForm();
  })
})