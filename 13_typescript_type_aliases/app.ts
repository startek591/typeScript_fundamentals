// 1) Primitive type
type Name = string;

let firstName: Name;
let lastName: Name;

// 2) Object types

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: 'John',
  age: 30,
};

// 3) Union Types
type alphanumeric = string | number;

let input: alphanumeric;
input = 100;
input = 'Hi';

// 4) Intersection Types
type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: 'John',
  age: 25,
  email: 'joe@example.com',
  phone: '(408)-123-4567',
};
