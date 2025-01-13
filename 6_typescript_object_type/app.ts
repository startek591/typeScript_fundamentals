let employee: object;

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

console.log(employee);

let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

employee2 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

console.log(employee2);

let employee3: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

console.log(employee3);

let vacant: {} = {};
console.log(vacant.toString());
