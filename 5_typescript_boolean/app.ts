let pending: boolean;
pending = true;

pending = false;

// NOT operator
const pending2: boolean = true;
const notPending = !pending2;

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result: boolean = completed && hasError;
console.log(result);

// OR operator
result = completed || hasError;
console.log(result);

function changeStatus(status: boolean): boolean {
  // ...
  return false;
}
