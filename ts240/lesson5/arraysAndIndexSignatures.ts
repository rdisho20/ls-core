/*
interface UserEmails {
  [key: string]: string;
}

interface UserEmails {
  [key: number]: string;
}

let emails: UserEmails;

emails = {
  0: ""
}
*/

type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray) {
  if (Array.isArray(arr)) {
    return [...arr]
      .filter(item: string | number => typeof item === "string")
      .map(str => str.toUpperCase());
  } else {
    return [];
  }
}

const result = processCustomArray(customArray);
console.log(result);

