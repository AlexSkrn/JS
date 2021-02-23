// Iterator method is available via the constant [Symbol.iterator]
// It is a zero arguments function that returns an iterator object

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());  // object becomes an iterator when it implements .next() method
// Object {value: 0, done: false}
console.log(arrayIterator.next());
// Object {value: 1, done: false}
console.log(arrayIterator.next());
// Object {value: 2, done: false}
