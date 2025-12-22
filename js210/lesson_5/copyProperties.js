function copyProperties(obj1, obj2) {
  let keys = Object.keys(obj1)
  for (let i = 0; i < keys.length; i++) {
    obj2[keys[i]] = obj1[keys[i]];
  }

  console.log(keys.length);
  return keys.length;
}


let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }