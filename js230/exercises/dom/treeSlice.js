/*
Implement a function, sliceTree, that is "similar" to the Array.prototype.slice method, but this time for a DOM tree.
The sliceTree function takes two arguments: the start index which is the parent node's id attribute and,
the end index which is the innermost child node's id attribute. The function returns an array of tagNames.
Take note of the following when implementing the sliceTree function:

- It's similar to slice but different in the sense that slice isn't inclusive on the right hand side.
- The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
- Only consider element nodes.
- Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
- If the id attribute of the start or end index is not in the DOM, return undefined.
- If the slice is not feasible — there's no path connecting the element at the starting index to the ending index — return undefined.

-P
input:
- integer (start index, parent node's id attribute)
- integer (end index, innermost child's id attribute)
output:
- array of tagNames

-Rules
explicit:
- start-end inclusive
- end index doesn't have to be "innermost child"
- only consider element nodes (no #text nodes)
- only elements that have 'body' as an ancestor are sliceable (NO html, head, meta, title etc.)
- if Id attribute of start or end index not @ DOM, return undefined
- if slice NOT feasible - no path connecting element @ start index to ending index - return undefined

implicit:
- Only include shared descendents, NO siblings
- IF going backwards,
    if starting's parent's id is less than 'ending' id, NOT feasible, return undefined
    if ending id less than 1, return undefined
- if starting or ending id is less than 1, return undefined

-Tests
> sliceTree(1, 4);
= ["ARTICLE", "HEADER", "SPAN", "A"]
> sliceTree(1, 76);
= undefined
> sliceTree(2, 5); // NO siblings
= undefined
> sliceTree(5, 4);
= undefined
> sliceTree(1, 23);
= ["ARTICLE", "FOOTER"]
> sliceTree(1, 22);
= ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
> sliceTree(11, 19);
= ["SECTION", "P", "SPAN", "STRONG", "A"]

-Data Structure
starting w/ starting element's children, find which descendent is the ancestor
to the element w/ the ending id

for each id starting from 'start' to 'end'

...no obvious data structure atm

-Algorithm
e.g.
> sliceTree(1, 22);
= ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]

1. Given a starting id, get the element and push its tagName to a `result` array

2. for each id, starting w/ the ending id
    For each of the starting elements children, determine if it is the ancestor of the element w/ the current id
    if it is, add the element tagName to a second resulting array

3. reverse the second resulting array and conactenate it to the first resulting array

4. return the final result


HELPER isAncestor(node, id)
for every child and its children
    if the current node id matches original id passed in, return true
    otherwise return false

HELPER areSiblings(first, second)
get both elements by their ids
then check if they are both in one of the parent's .children arrays

Low level:
- convert id to string equivalent
- start w/ a `result` array []
- for each id, starting w/ the ending id, iterating backwards
    - for each of the starting element's children
        - if isAncestor(id) returns true, add the tagName to the `result` array
    - if the current id matches an id of one of the starting element's children, BREAK out of loop **********

- concatinate the starting element tagName w/ `result`
- return `result` reversed
*/

function sliceTree(start, end) {
  const startElement = document.getElementById(String(start));
  const endElement = document.getElementById(String(end));
  let result = [];

  if (start < 1 || end < 1 || startElement === null || endElement === null) {
    return undefined;
  }

  if (areSiblings(startElement, endElement)) {
    return undefined;
  }

  // start's root is less than undefined
  if (start > end) {
    const startRoot = document.getElementById(String(start)).closest('article');
    if (parseInt(startRoot.id, 10) < end) return undefined;
  }

  for (let id = end; id >= start; id -= 1) {
    let currentParent = document.getElementById(String(id)).parentElement;
    //console.log(currentParent.children);
    for (let index = 0; index < currentParent.children.length; index += 1) {
      //console.log(index);
      const currentChild = currentParent.children[index];
      //console.log(id, 'currentChild', currentChild.id, currentChild.tagName);
      if (isAncestor(currentChild, id)) {
        result.push(currentChild.tagName);
        //console.log(`pushing-- current index position = ${index}; current id: ${id}`)
        //console.log(result);
      }
    }
  }

  //result = result.reverse();
  //result.unshift(startElement)
  return result.reverse();
}

function areSiblings(first, second) {
  const parent = first.parentElement;
  const children = [...parent.children];
  if (children.includes(second)) return true;
}

function isAncestor(node, id) {
  if (node.id == id) {
    //console.log(`${node.tagName}, node.id: ${node.id}, id: ${id}`, 'recursion breaks')
    return true;
  }

  for (let i = 0; i < node.children.length; i++) {
    const currentNode = node.children[i];
    return isAncestor(currentNode, id);
  }

  return false;
}


console.log('1, 4', sliceTree(1, 4));
// ["ARTICLE", "HEADER", "SPAN", "A"]
console.log('1, 76', sliceTree(1, 76));
// undefined


/*
console.log(sliceTree(2, 5)); // NO siblings; passed
// undefined
console.log(sliceTree(5, 4));
// undefined
*/


console.log(sliceTree(1, 23));
// ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
// ["SECTION", "P", "SPAN", "STRONG", "A"]

