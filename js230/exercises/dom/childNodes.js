/*
counts child nodes
*/

function countDescendents(node) {
  let count = 0;
  const childrenArray = [...node.childNodes];

  childrenArray.forEach(node => {
    count += countDescendents(node) + node.childNodes.length;
  })

  return count;
}

function childNodes(id) {
  const node = document.getElementById(String(id));
  const directCount = node.childNodes.length;
  const indirectCount = countDescendents(node);

  console.log([directCount, indirectCount]);
}

childNodes(1);
childNodes(4);
childNodes(8);
childNodes(9);

/*
For each element inside the parent node, we can calculate how many times that parentNode
appears when checking node.parentNode
*/


/*
div id "1" - DIRECT: 9, INDIRECT: 12
  direct child nodes:
  - #text, h1, #text, p, #text, a, #text, div, #text
  indirect child nodes:
  - (h1) #text, em
  - (em) #text
  - (p) #text, span, #text
  - (span) #text
  - (a) strong
  - (strong) #text
  - (div) p
  - (p) a
  - (a) #text

h1 id "2" - DIRECT: 2, INDIRECT: 1
  direct:
  - #text, em
  indirect:
  - (em) #text

em id "3" - DIRECT: 1
  direct:
  - #text

p id "4" - DIRECT: 3, INDIRECT: 1
  direct:
  - #text, span, #text
  indirect:
  - (span) #text

span id "5" - DIRECT: 1
  direct:
  - #text

a id "6" - DIRECT: 1, INDIRECT: 1
  direct:
  - strong
  indirect:
  - (strong) #text

strong id "7" - DIRECT: 1
  direct:
  - #text

div id "8" - DIRECT: 1, INDIRECT: 2
  direct:
  - p
  indrect:
  - (p) a
  - (a) #text

p id "9" - DIRECT: 1, INDIRECT: 1
  direct:
  - a
  indirect:
  - (a) #text

a id "10" - DIRECT: 1
  direct:
  - #text
*/