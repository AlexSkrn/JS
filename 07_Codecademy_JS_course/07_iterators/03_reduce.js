// returns a single value
// 'accumulator' starts off as the value of the first element in the array and
// the 'currentValue' starts as the second element

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

// can also take an optional second parameter (first argument being the callback function)
// to set an initial value for accumulator

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117
