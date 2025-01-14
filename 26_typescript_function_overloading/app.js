function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(add(1, 2)); // 3
console.log(add('Hello', 'World')); // HelloWorld
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.count());
console.log(counter.count(5));
