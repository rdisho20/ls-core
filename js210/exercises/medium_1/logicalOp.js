console.log((false && undefined)); // true
console.log((false || undefined)); // false
console.log(((false && undefined) || (false || undefined))); // true
console.log(((false || undefined) || (false && undefined))); // true
console.log(((false && undefined) && (false || undefined))); // false
console.log(((false || undefined) && (false && undefined))); // false
console.log(('a' || (false && undefined) || '')); // true
console.log(((false && undefined) || 'a' || '')); // true
console.log(('a' && (false || undefined) && '')); // false
console.log(((false || undefined) && 'a' && '')); // false

/*
'  1  2  3  4  5  6  7  8  9 10'
'  2  4  6  8 10 12 14 16 18 20'

*/