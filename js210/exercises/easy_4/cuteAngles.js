const DEGREE = '\u00B0';
const MINUTES_TO_DEGREE = 60;
const SECONDS_TO_MINUTE = 60;


function dms(degrees) {
  let minutes;
  let seconds;

  if (degrees % 10 === 0) {
    minutes = '0'.padStart(2, '0');
    seconds = '0'.padStart(2, '0');
    console.log(`${degrees}${DEGREE}${minutes}'${seconds}"`);
    return `${degrees}${DEGREE}${minutes}'${seconds}"`
  }

  degrees = String(degrees).split('.');
  let forMinutes = `.${degrees[1]}`;
  minutes = getMinutes(forMinutes);
  let forSeconds = Number.isInteger(minutes) ? '0' : `.${String(minutes).split('.')[1]}`;
  seconds = Math.floor(getSeconds(forSeconds));
  minutes = Math.floor(minutes);

  console.log(`${degrees[0]}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`);
  return `${degrees[0]}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}


function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}


function getMinutes(number) {
  number = parseFloat(number);
  if (number === 0) {
    return 0;
  }
  return number * 60;
}


function getSeconds(number) {
  number = parseFloat(number);
  if (number === 0) {
    return 0;
  }
  return number * 60;
}


// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");