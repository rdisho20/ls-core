/*function swapName(name) {
  return name.split(' ').reverse().join(', ');
}
*/

function swapName(name) {
  const parts = name.split(' ');
  const lastName = parts.pop();

  return `${lastName}, ${parts.join(' ')}`;
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Sir Winston Pickles'));    // "Pickles, Sir Winston"