function add(a: number, b: number): number {
  return a + b;
}

let sum = add(10, 20);
console.log(sum); // 30

function echo(message: string): void {
  console.log(message.toUpperCase());
}
echo('Hello, World!'); // HELLO, WORLD!
