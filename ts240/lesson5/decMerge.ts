/*
interface Mammal {
    name: string;
    legs: number;
}
*/

/*
import { Mammal } from "./animals";

interface Mammal {
  color: string;
}
*/

/*
interface Student {
  id: number;
  name: string;
}

interface Student {
  classList: Array<string>;
}
*/

/*
interface Mammal {
  name: string;
  legs: number;
}

interface Elephant extends Mammal {
  trunkLength: number;
}

const ellie: Elephant = {
  name: "Ellie",
  legs: 4,
  trunkLength: 6,
}
*/

interface Mammal {
  name: string;
  legs: number;
}

interface Tusked {
  tuskCount: number;
  tuskColor: string;
}

interface Elephant extends Mammal, Tusked {
  trunkLength: number;
}

const ellie: Elephant = {
  name: "Ellie",
  legs: 4,
  tuskCount: 2,
  tuskColor: "ivory",
  trunkLength: 6,
}

