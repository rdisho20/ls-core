const node1 = document.createElement('header');
const node2 = document.createTextNode('Dynamic Content');

node1.innerHTML = '<p>Hello World!</p>';
document.body.appendChild(node1);
document.body.firstElementChild.insertBefore(node2, node1.firstElementChild);

const node3 = document.createElement('h1');
node3.appendChild(node2);
document.body.firstElementChild.insertBefore(node3, node1.firstElementChild);

node1.setAttribute('id', 'header');
node3.classList.add('emphasis');
node3.classList.add('light');

const node4 = document.createElement('style');
const css1 = ".emphasis { font-weight: bold; }";
const css2 = ".light { color: gray; }";
node4.type = 'text/css';

node4.appendChild(document.createTextNode(css1));
node4.appendChild(document.createTextNode(css2));

document.head.appendChild(node4);