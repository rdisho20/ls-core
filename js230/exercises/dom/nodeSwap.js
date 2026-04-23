/*
input: 2 element ids : arguments
output: returns true for valid swaps, undefined for invalid
- swap positions of elements represented by the ids (side effect)

-r
explicit:
- assume that nodes will have a value for the id attribute
- 2 arguments will always be provided
*/

function isChild(possibleParent, possibleChild) {
  if ([...possibleParent.children].includes(possibleChild)) return true;
  return false;
}

function getSecondPosition(parent, child) {
  const children = [...parent.children];
  for (let idx = 0; idx < children.length; idx += 1) {
    const currentChild = children[idx];
    if (child === currentChild) return idx;
  }
}

function nodeSwap(firstId, secondId) {
  const firstElement = document.querySelector(`[id="${firstId}"]`);
  const secondElement = document.querySelector(`[id="${secondId}"]`);

  if (!firstElement || !secondElement) return undefined;
  if (isChild(firstElement, secondElement) || isChild(secondElement, firstElement)) return undefined;

  const firstParent = firstElement.parentElement;
  const secondParent = secondElement.parentElement;
  const secondParentsChildren = [...secondParent.children];
  let secondPosition = getSecondPosition(secondParent, secondElement);

  const replaced = firstParent.replaceChild(secondElement, firstElement);

  for (let idx = 0; idx < secondParentsChildren.length; idx += 1) {
    const currentNode = secondParentsChildren[idx];
    if (idx === secondPosition) {
      secondParent.insertBefore(replaced, currentNode);
      return true;
    }
  };

  // didn't find a spot? insert replaced to last child position
  secondParent.appendChild(replaced);
  return true;
}

// at least one of the id attributes doesn't exist
//console.log(nodeSwap(1, 20));
// undefined

// at least one of the nodes is a "child" of the other
//console.log(nodeSwap(1, 4));
// undefined
//console.log(nodeSwap(9, 3));
// undefined

// one swap
console.log(nodeSwap(1, 2));

// multiple swaps
console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));