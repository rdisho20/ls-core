/*
interface Jewelry {
  age: number;
  material: string;
  hasGem: boolean;
}

interface Art {
  age: number;
  artist: string;
  medium: string;
}

interface Furniture {
  age: number;
  type: string;
  material: string;
}

function describeItem<T extends { age: number }>(item: T) {
  if (item.age < 10) {
    console.log(
      `This item is ${item.age} years old. It's still got that fresh style!`
    );
  } else if (item.age < 100) {
    console.log(
      `This item is ${item.age} years old, giving it that touch of character!`
    );
  } else {
    console.log(
      `Wow! This item is ${item.age} years old. This is a true antique, with a history that speaks volumes!`
    );
  }
}

let necklace: Jewelry = { age: 98, material: "gold", hasGem: true };
describeItem(necklace);

let painting: Art = {
  age: 450,
  artist: "Leonardo da Vinci",
  medium: "oil painting",
};
describeItem(painting)

let chair: Furniture = { age: 2, type: "chair", material: "oak" };
describeItem(chair);

describeItem({ age: 12 });

describeItem({
  price: 400000,
  artist: "Jean-Michel Basquiat",
  material: "mixed media",
})
*/

function getProperty<T, K extends keyof T>(
  obj: T, key: K
): T[K] {
  return obj[key];
}
