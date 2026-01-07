function wordCap(string) {
  return string
    .split(' ')
    .map(word => {
      // handle empty word; transform non-empty word to capitalized form
    })
    .join(' ');
}


console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'