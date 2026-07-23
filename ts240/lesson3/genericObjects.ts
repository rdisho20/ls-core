type User<T1, T2> = {
  name: string,
  age: T1,
  id: T2,
}

const user: User<number, string> = {
  id: "223904702",
  name: "John Doe",
  age: 25,
}

const user2: User<string, number> = {
  id: 1,
  name: "Jane Doe",
  age: "thirty",
}

type User<T1, T2> = {
  name: string;
  age: Array<T1 | T2[]>;
  id: T2;
};