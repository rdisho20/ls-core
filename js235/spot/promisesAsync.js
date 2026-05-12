// function walk(node, callback) {
//   // do something with the node
//   callback(node)

//   // recursively call the children
//   for(let i = 0; i < node.children.length; i++) {
//     walk(node.children[i], callback);
//   }
// }

// walk(document.body, node => console.log(node.tagName));

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World")
  }, 1000)
})

// all promises give us a `then` method
// What is the argument
// When does it run
// What does it return

// then method registers a callback which is executed when the promise
// resolves successfuly. The arg to the callback is the resolved value
// of the promise

// pr
// .then(res => {
//   console.log('success callback', res);
// })
// .catch(err => console.log('Reject callback', err))

console.log(1)
async function main() {
  console.log(3);
  // const result = await pr;
  // console.log(5);
  // console.log(result);
  return pr
    .then(result => {
      console.log(5);
      console.log(result);
    })
}
console.log(2);
main();
console.log(4);
