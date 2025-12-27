function strings(str1, str2, str3, str4, str5) {
  return {
    first: str1,
    middle: [str2, str3, str4].sort(),
    last: str5
  };
}

let array = ["dog", "log", "nog", "hog", "bog"];
let { first, middle, last } = strings(...array);

console.log(array);
console.log(first);
console.log(middle);
console.log(last);


/*
function qux(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
let { first, last, middle } = qux(...arr);

console.log(first);
console.log(last);
console.log(middle);
*/