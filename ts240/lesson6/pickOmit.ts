/*
interface User {
  name: string;
  email: string;
  age: number;
}

type NameOnly = Pick<User, "name">;
const user: NameOnly = { name: "John" };

type NameAndAge = Pick<User, "name" | "age">;
const user2: NameAndAge = { name "John", age: 35 };


type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string[];
  size: string[];
  image: string;
}

type ProductListing = Pick<Product, "name" | "price" | "image">;
type ProductDetail = Pick<Product, "description" | "size" | "color">;
type EmailOnly = Omit<User, "name" | "age">;
type WithoutEmail = Omit<User, "email">;
*/