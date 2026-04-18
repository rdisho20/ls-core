

/*
Tree Slicing
Implement a function, sliceTree, that is "similar" to the Array.prototype.slice method, but this time for a DOM tree. The sliceTree function takes two arguments: the start index which is the parent node's id attribute and, the end index which is the innermost child node's id attribute. The function returns an array of tagNames. Take note of the following when implementing the sliceTree function:

It's similar to slice but different in the sense that slice isn't inclusive on the right hand side.
The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
Only consider element nodes.
Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
If the id attribute of the start or end index is not in the DOM, return undefined.
If the slice is not feasible — there's no path connecting the element at the starting index to the ending index — return undefined.
Use this HTML and sample run to test out your code:

*/


/*


input: startIndex, endIndex

- get the node element of startIndex 
- get the node element of endIndex
- check if the two nodes exist
- initialize a result array
- initialize currentParent variable
- create a loop that will run until currentParent's id is equal startIndex
  - push the tag name of endIndex element to result array
  - reassign currentParent to the parent of endIndex element
  - reassign endIndex to currentParent

  console.log('1, 4', sliceTree(1, 4));
  // // ["ARTICLE", "HEADER", "SPAN", "A"]

*/

function sliceTree(startId, endId) {  
  const startElement = document.querySelector(`[id="${startId}"]`);
  const endElement = document.querySelector(`[id="${endId}"]`);

  if (startElement === null || endElement === null) return undefined;

  let result = [];
  let currentElement = endElement;

  while (currentElement !== document.body) {
    result.unshift(currentElement);

    if (currentElement.id === String(startId)) break;

    currentElement = currentElement.parentElement;
  }

  if (!result.includes(startElement)) return undefined;

  return result.map(element => element.tagName);
}

console.log(sliceTree(1, 4));
// // ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
// // undefined// 

console.log(sliceTree(2, 5));
// // undefined
console.log(sliceTree(5, 4));
// // undefined// 

console.log(sliceTree(1, 23));
// // ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
// // ["SECTION", "P", "SPAN", "STRONG", "A"]