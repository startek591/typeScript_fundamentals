const el = document.querySelector('input[type="text"]');
const input = el as HTMLInputElement;

console.log(input.value);

let enteredText = (el as HTMLInputElement).value;

let input2 = <HTMLInputElement>(
  document.querySelector('input[type="text"]')
);
console.log(input2.value);
