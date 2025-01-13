var pending;
pending = true;
pending = false;
// NOT operator
var pending2 = true;
var notPending = !pending2;
var hasError = false;
var completed = true;
// AND operator
var result = completed && hasError;
console.log(result);
// OR operator
result = completed || hasError;
console.log(result);
function changeStatus(status) {
    // ...
    return false;
}
