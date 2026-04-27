// 1
/*
function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000)
  }
}

delayLog();
*/


// 2
/*
1, 5, 9, 13, 2, 10, 6, 14
*/

// 3
/*
1. f
2. g
3. d
4. z
5. n
6. s
7. q

LS: g, f, d, z, n, s, q
Notice that g still comes before f even though the timeout duration defaults to 0.
The reason for this behavior is that while the function can execute immediately already,
it will not execute until the next event cycle. We'll discuss this further soon.
*/

// 4
/*
function afterNSeconds(callback, timeDuration) {
  setTimeout(callback, timeDuration * 1000);
}
*/
