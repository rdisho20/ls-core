/*
interface UserProfile {
  name: string;
  age: number;
  email: string;
}
*/

/*
interface Accounts {
  [key: string]: string;
}

interface Accounts {
  [username: string]: string;
}
*/

/*
interface Accounts {
  [username: string]: UserProfile;
}

type UserProfile = {
  name: string;
  age: number;
  email: string;
}
*/

/*
interface UserProfile {
  readonly [key: string]: string;
}

const user: UserProfile = {
  name: "Ryan",
  email: "hello@hello.com",
}
*/

/*
interface MyJSONData {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | MyJSONData
    | Array<string | number | boolean | null | MyJSONData>;
}
*/

/*
interface User {
  [key: number]: string;
}

const obj: User = {
  1: "jane",
  2: "30",
  3: "female"
}
*/

/*
type User = Map<number, string | number>;

const obj: User = new Map();
obj.set(1, "jane");
obj.set(2, 30);
obj.set(3, "female");
*/