// for loop's downside is having to keep track of the counter and exit condition
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

// for...in loop eliminates the counting logic and exit condition
// but still have to use an index to access the values of the array
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}

// Because for...in loops loop over all enumerable properties, this means
// if you add any additional properties to the array's prototype,
// then those properties will also appear in the loop
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}

// for...of loop is used to loop over any type of data that is iterable
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

for (const digit of digits) {
  if (digit % 2 === 0) {  // skip even numbers
    continue;
  }
  console.log(digit);
}
