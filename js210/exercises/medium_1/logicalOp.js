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