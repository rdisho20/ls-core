/*
-Problem
input: none
output: array of nodes (nested array likely)
- first element: tagName
- second element: array w/ children
  - each child is part of array
  - first element: tagName
  - second element: array w/ children

-Data Structure
array w/ tagName and children sub-array

-Algorithm
For each element in the document starting w/ `document.body`,
- get its tag name, and add its children to an array, as part of this element's array
- where each child is an array w/ tagName and its children array

- When a child has no children (length 0), move up to its parent to check the 'next child'
- if there is no 'next child', then move up to its parent to check the 'next child'
- if there is no 'next child', then move up to its parent to check the 'next child' and so on...

HELPER function (node):
  // get this node's tagName

  // turn node.children (HTMLCollection) into a real array

  // for each child element, recursively call helper(child)
  // and collect those results into an array

  // return ["TAGNAME", childrenArray]
*/

function helper(node) {
  const results = [];
  const name = node.tagName;
  const children = [...node.children];

  for (let i = 0; i < children.length; i++) {
    results.push(helper(children[i]));
  }

  return [name, results];
}

function nodesToArr() {
  return helper(document.body);
}

console.log(nodesToArr());
// ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// OR
/*
["BODY", [
  ["HEADER", []],
  ["MAIN", []],
  ["FOOTER", []]]]
*/
