/*
Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array.
The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings,
so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". 
*/

function getSiblings(node, callback) {
  const parent = node.parentElement
  const siblings = [];

  if (node === document.body) {
    return siblings;
  }

  const parentChildren = []
  for (let idx = 0; idx < parent.children.length; idx += 1) { 
    const tagName = callback(parent.children[idx]);
    parentChildren.push(tagName);
  }

  siblings.push(parentChildren);
  return siblings.concat(getSiblings(parent, callback));
}

function domTreeTracer(id) {
  const nodeById = document.getElementById(String(id));
  
  const traced = getSiblings(nodeById, function(node) {
    return node.tagName;
  })

  return traced;
}

console.log(domTreeTracer(22));


/* LS Solution w/o recursion

function domTreeTracer(id) {
  let currentElement = document.getElementById(id);
  let parentElement;
  const domTree = [];

  do {
    parentElement = currentElement.parentNode;
    let children = getTagNames(parentElement.children);
    domTree.push(children);

    currentElement = parentElement;
  } while (parentElement.tagName !== 'BODY');

  return domTree;
}

function getTagNames(htmlCollection) {
  const elementsArray = Array.from(htmlCollection);
  return elementsArray.map(({tagName}) => tagName);
}
*/

// ...

/* LS Solution w/ recursion (no callback)

function getSiblings(node) {
  const parent = node.parentElement;
  const siblings = [];

  if (node === document.body) return siblings;

  const parentChildren = [];
  for (let idx = 0; idx < parent.children.length; idx += 1) {
    parentResult.push(parent.children[idx].tagName);
  }

  siblings.push(parentChildren);
  return siblings.concat(getSiblings(parent));
}

function domTreeTracer(id) {
  const nodeById = document.getElementById(String(id));
  return getSiblings(nodeById);
}
*/

// ...

/* Eddie P's solution

function domTreeTracer(elementId) {
  let family = [];

  function recurse(element) {
    let parent = element.parentNode;
    let children = [...parent.children];
    children = children.map(child => child.tagName);
    family.push(children);

    if (element.id === "1") return;
    recurse(parent);
  }
  recurse(document.getElementById(elementId));
  return family;
}
*/