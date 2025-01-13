// let arrayName: type[];

let skills: string[] = [];
skills[0] = 'Problem Solving';
skills[1] = 'Programming';

skills.push('Software Design');

// Declare it a variable and assign an array of strings to it:
let skills2: string[] = [
  'Problem Solving',
  'Programming',
  'Software Design',
];

let skill = skills2[0];
console.log(typeof skill);

// Storing values of mixed types
let scores: (string | number)[] = [
  'Programming',
  5,
  'Software Design',
  4,
];

console.log(scores);
