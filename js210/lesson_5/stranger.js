function greetings(arr, obj) {
  let fullName = arr.join(" ");
  let string = `Hello, ${fullName}!  Nice to have a ${obj.title} ${obj.occupation} around.`;
  console.log(string);
  return string;
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.