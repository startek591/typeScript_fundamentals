// Types annotations in variables
// let variableName: type;
// let variableName: type = value;
// const constantName: type = value;

let counter: number;
counter = 1;

// counter = 'Hello'; compile error

// Error:
// Type '"Hello"' is not assignable to type 'number'.

// let counter: number = 1;

// Primitive types
let userName: string = 'John';
let userAge: number = 25;
let activeUser: boolean = true;

// Type annotation examples
// let arrayName: type[];

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

// Objects
let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
};

// Functions arguments and return types
let greeting: (name: string) => string;

greeting = function (name: string) {
  return `Hello, ${name}!`;
};
