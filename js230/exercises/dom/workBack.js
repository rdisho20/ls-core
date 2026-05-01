console.log(document.head.childNodes.length); // 3
console.log(document.head.children[0].tagName); // 'TITLE'
console.log(document.head.textContent);
// "
//    Title
//  "
console.log(document.body.children.length); // 3
console.log(document.body.childNodes.length); // 5
console.log(document.querySelector('div').parentNode.parentNode.tagName); // 'BODY'
console.log(document.querySelector('div section').children[2].nextElementSibling); // null
console.log(document.querySelectorAll('div').length); // 1

let nodeA = document.body.firstElementChild;
console.log(document.querySelector('footer').children.length); // 1
console.log(document.querySelector('body').replaceChild(
  document.querySelector('footer'), document.body.firstElementChild).tagName); // 'HEADER'
console.log(document.body.appendChild(nodeA)); // <header>Header</header>

console.log(document.querySelector('section').textContent.split("\n").map(function(text) {
  return text.trim();
}).filter(function(text) {
  return text.length > 0;
})); // ["H1", "Hello", "World"]

console.log(document.querySelector('section').children); // HTMLCollection(3) [h1, p, p]
console.log(document.querySelector('section').textContent);
// "
//           H1
//           Hello
//           World
//         "

console.log(document.querySelector('span.emphasis').parentNode.tagName); // 'FOOTER'