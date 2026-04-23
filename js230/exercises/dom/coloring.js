/*
-p
input: integer representing number of indentations (tabs--2 spaces)
output: colored corresponding html elements

-r
explicit:
- generation is set of elements on same level :: indentation (number of tabs)
- only non-negative integers provided as arguments
implicit:
- if id argument is 0, nothing changes
- tabs are equivalent to two whitespace characters

-d
build array of elements to color
- iterate over array to add 'generation-color' class

-a (OLD)
high level:
- Given a starting index, get the element
  - add it and its siblings to a result array
  - if there are no siblings left, move up to parent, go to parent's sibling, then add it's immediate children to the array
    - repeat this process for however many elements remain

- For each element in the array, add generation-color to its classList

low level:
- assign 'currentElement' to the element at the given id
- start w/ an empty array assigned to 'result'
- while the currentElement is not null
  - while the currentElement is not null
    - add the current element to the 'result' array
    - assign 'currentElement' to the element's next sibling

  - assign the current element to the parent's next sibling's first child

- for each element in the 'result' array, add 'generation-color' to its classList

-a
traverse all nodes, get text content, split at new line, take next element sibling, count whitespace

for each element found add appropriate class
*/

const colorElements = [];

function walk(node, indentations, callback) {
  callback(node, indentations);
  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], indentations, callback);
  }
}

function buildIndentedElementsArray(node, indentations) {
  if (node.nodeType === 3) {
    if (node.nextElementSibling) {
      let whitespaceCount = node.textContent.split('\n')[1].length;
      if (whitespaceCount / 2 === indentations + 1) {
        colorElements.push(node.nextSibling);
      }
    }
  }
}

function colorGeneration(indentations) {
  walk(document.body, indentations, buildIndentedElementsArray);
  colorElements.forEach(element => {
    element.classList.add('generation-color');
  })
}

colorGeneration(1);
colorGeneration(4);
colorGeneration(7);
colorGeneration(8);
colorGeneration(3);
colorGeneration(0);
