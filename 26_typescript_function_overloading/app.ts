function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  throw new Error('Invalid arguments');
}

console.log(add(1, 2)); // 3
console.log(add('Hello', 'World')); // HelloWorld

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

class Counter {
  private current = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }

      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

let counter = new Counter();
console.log(counter.count());
console.log(counter.count(5));
