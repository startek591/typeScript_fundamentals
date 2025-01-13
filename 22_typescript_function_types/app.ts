let add: (x: number, y: number) => number;

add = function (x: number, y: number) {
  return x + y;
};

let result = add(10, 20);
console.log(result);

let add2: (a: number, b: number) => number = function (
  x: number,
  y: number
) {
  return x + y;
};

let results2 = add2(10, 20);
console.log(results2);

let add3 = function (x: string, y: string) {
  return x.concat(y).length;
};

let result3 = add3('Hello', 'World');
console.log(result3);
