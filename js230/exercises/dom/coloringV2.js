/*
Given a generation, starting at 0 up to the generation (inclusive)
  get the generation's children
for each element in 'children', add 'generation-color' class list
*/

function colorGeneration(generation) {
  let currentGen = 1;
  let currentParent = document.body;
  let children;
  while (currentGen <= generation) {
    children = currentParent.children;
    if (currentGen === generation) {
      [...children].forEach(element => {
        element.classList.add('generation-color');
      })
    }
    currentGen += 1;
  }
}

//colorGeneration(1);
colorGeneration(4);
colorGeneration(7);
colorGeneration(8);
colorGeneration(3);
colorGeneration(0);
