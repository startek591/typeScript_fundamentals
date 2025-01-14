function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));

function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let colors = ['red', 'green', 'blue', 'yellow', 'black'];
console.log(getRandomStringElement(colors));

// One option - not type safe
function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));

// TypeScript generics come to the rescue
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
let numbers2 = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers2);
console.log(randomEle);

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

let result = merge(
  { name: 'John' },
  { jobTitle: 'Frontend Developer' }
);
console.log(result);
