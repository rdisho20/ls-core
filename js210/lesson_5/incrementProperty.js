function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}


function incrementProperty(obj, str) {
  if (objectHasProperty(obj, str)) {
    obj[str] += 1;
  } else {
    obj[str] = 1;
  }

  console.log(obj[str]);
  return obj[str];
}


let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                              // { steve: 3, susie: 5, lucy: 1 }