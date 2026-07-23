"use strict";
const computer = {
    manufacturer: "LG",
    model: "XX710",
    year: 2017,
};
let smartphone = {
    manufacturer: "Apple",
    model: "iPhone X",
    year: 2017,
    hasHeadphoneJack: false,
};
let anotherSmartphone = smartphone;
console.log(typeof smartphone);
console.log(typeof anotherSmartphone);
