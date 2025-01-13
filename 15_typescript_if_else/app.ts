// TypeScript if statement
const max = 100;
let counter = 0;

if (counter < max) {
  counter++;
}

console.log(counter);

const max2 = 100;
let counter2 = 100;

if (counter2 < max2) {
  counter2++;
}

console.log(counter2);

// TypeScript if-else statement
const max3 = 100;
let counter3 = 100;

if (counter3 < max3) {
  counter3++;
} else {
  counter3 = 1;
}

console.log(counter3);

// Ternary operator?:
const max4 = 100;
let counter4 = 100;

counter4 < max4 ? counter4++ : (counter = 1);
console.log(counter4);
