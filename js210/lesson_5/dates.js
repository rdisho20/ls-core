function dateSuffix(date) {
  if (date >= 4 && date <= 20) {
    return String(date) + "th";
  } else if (date % 10 === 1) {
    return String(date) + "st";
  } else if (date % 10 === 2) {
    return String(date) + "nd";
  } else if (date % 10 === 3) {
    return String(date) + "rd";
  } else {
    return String(date) + "th";
  }
}


function formattedMonth(dateObj) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[dateObj.getMonth()];
}


function formattedDay(dateObj) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[dateObj.getDay()]
}


function formattedDate(dateObj) {
  let month = formattedMonth(dateObj);
  let day = formattedDay(dateObj);
  let date = dateSuffix(dateObj.getDate());
  return `Today's date is ${day}, the ${date} of ${month}.`;
}


function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}


function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}


let today = new Date();

console.log(formattedDate(today));
console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());


let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow));


let nextWeek = new Date(today.getTime());
nextWeek.setDate(today.getDate() + 7);
console.log(formattedDate(nextWeek));
console.log(today.toDateString() === nextWeek.toDateString());

// Date value passed: 2013-03-01T01:10:00
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));