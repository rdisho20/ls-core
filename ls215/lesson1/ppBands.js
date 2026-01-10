function processBands(data) {
  // for every band
  // change its country -> 'Canada'
  // format its name
  return data
    .map(obj => {
      return {
        name: formatName(obj.name),
        country: 'Canada',
        active: obj.active,
      }
  });
}

function formatName(name) {
  return name
    .replace(/\./g, '')
    .split(' ')
    .map(word => {
      if (word.length === 1) {
        return word.toUpperCase();
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(' ');
}


let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));

/* should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/