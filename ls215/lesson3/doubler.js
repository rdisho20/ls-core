/*
"Write a function called doubler that doubles every value in an array"
*/

// Generic test cases; typical input values that we expect 
doubler([1, 2, 'hi']);                                            // [1, 4, 'hihi']
doubler([4.5, 34]);                                               // [9.0, 68]
doubler(['6', { first: 'cat', second: 'dog' }, 'world']);          // ['66', { first: 'cat', second: 'dog' }, { first: 'cat', second: 'dog' }, 'worldworld']
doubler([3, NaN]);                                                 // [6, NaN]
doubler([10, '', 11]);                                             // [20, '', 22]
doubler([99, , 100]);                                              // [198, 200]
doubler([10, 12.5, [1, , 3]]);                                     // [20, 25, [1, 3], [1, 3]]
doubler([]);                                                       // []
doubler(['catdog', 'spongebob', 33], ['hello world', 'cat', 9]);   // ['catdogcatdog', 'spongebobspongebob', 66]
doubler('Char array');                                             // ['CC','hh', 'aa', 'rr', '  ', 'aa', 'rr', 'rr', 'aa', 'yy']
doubler(45);                                                       // [8, 10]
doubler({ first: 1, second: 2, third: 'cheese' });                 // [2, 4, 'cheesecheese']
doubler(undefined);                                                // 'Invalid Input'
doubler(NaN);                                                      // 'Invalid input'
doubler({});                                                       // 'Invalid input'

// Edge test cases; less common input values that may require special handling
