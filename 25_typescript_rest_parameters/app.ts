function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));

function combine(...args: (number | string)[]): [number, string] {
  let total = 0;
  let str = '';
  args.forEach((arg) => {
    if (typeof arg === 'number') {
      total += arg;
    } else {
      str += arg;
    }
  });

  return [total, str];
}

const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');

console.log({ total });
console.log({ str });
