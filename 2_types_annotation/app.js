// Types annotations in variables
// let variableName: type;
// let variableName: type = value;
// const constantName: type = value;
var counter;
counter = 1;
// counter = 'Hello'; compile error
// Error:
// Type '"Hello"' is not assignable to type 'number'.
// let counter: number = 1;
// Primitive types
var userName = 'John';
var userAge = 25;
var activeUser = true;
// Type annotation examples
// let arrayName: type[];
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
// Objects
var person;
person = {
    name: 'John',
    age: 25,
};
// Functions arguments and return types
var greeting;
greeting = function (name) {
    return "Hello, ".concat(name, "!");
};
