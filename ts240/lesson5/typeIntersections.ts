/*
type Mammal = {
  name: string;
  legs: number;
}

type TrunkedAnimal = {
  trunkLength: number;
}

type Elephant = Mammal & TrunkedAnimal;

const ellie: Elephant = {
  name: "Ellie",
  legs: 4,
  trunkLength: 6,
}

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Review = {
  id: string;
  productId: string;
  rating: number;
  comment: string;
};

type ProductWithReviews = Product & {
  reviews: Review[];
}
*/

// 1
/*
type Product = {
  name: string;
  price: number;
}

type Shipping = {
  weight: number;
  shippingCost: number;
}

type ShippableProduct = Product & Shipping;
*/

// 2
interface Product {
  name: string;
  price: number;
}

interface Shipping {
  weight: number;
  shippingCost: number;
}

interface ShippableProduct extends Product, Shipping {};