/*
given a nested array of nodes and their children
generate the html

- get the parent
- for each child, create the child element and append to parent element
- for each child, get their children and repeat the above steps
*/

function arrayToNodes(nodes) {
  const parentElement = document.createElement(nodes[0]);

  if (nodes[1].length == 0) {
    return parentElement;
  }

  for (let i = 0; i < nodes[1].length; i += 1) {
    const node = nodes[1][i];
    const childElement = arrayToNodes(node);
    parentElement.appendChild(childElement);
  }

  return parentElement;
}

/*
[TAG, [...children]]
[P, []] - parentTag = P
*/

// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

const tree = arrayToNodes(nodes);
document.body.appendChild(tree);