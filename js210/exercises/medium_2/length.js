const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // the array dawg
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // the array dawg plus <empty x1>
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript'] OMG what?!
console.log(languages.length); // 1 mah d00d

languages.length = 3;
console.log(languages); // javascript and <empty 2x> OMG
console.log(languages.length); // 3, dang!

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // 'js d00d', empty x1 dawg, 'Python' YOOOO
console.log(languages[1]); // undefined dawg, cuz no value there
console.log(languages.length); // it's a sweet 3!