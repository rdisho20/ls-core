type Device = {
  manufacturer: string,
  model: string,
  year: number
}

const computer: Device = {
  manufacturer: "LG",
  model: "XX710",
  year: 2017,
}

let smartphone = {
  manufacturer: "Apple",
  model: "iPhone X",
  year: 2017,
  hasHeadphoneJack: false,
}

let anotherSmartphone: Device = smartphone;

console.log(typeof smartphone);
console.log(typeof anotherSmartphone);