// Create a function now, package it up with some variables, and save it to run later.
// The process of a function retaining access to its scope is called a closure.

// We can use closure to make certain parts of an app private

// In this example, the inner function "closes over" number.
function remember(number) {
    return function() {
        // debugger;
        return number;
    }
}

var returnedFunction = remember(5);

console.log( returnedFunction() );
// 5


// A closure is:
//
// The function itself, and
// The code (but more importantly, the scope chain of) where the function is declared

// When a function is declared, it locks onto the scope chain

function outerFunction() {
  let num1 = 5;

  return function(num2) {
    console.log(num1 + num2);
  };
}

let result = outerFunction();

result(10);
// 15



function myCounter() {
  let count = 0;

  return function () {
    // debugger;
    count += 1;
    return count;
  };
}

let counter = myCounter();

counter(); // 1

counter(); // 2

counter.count;
// undefined

count;
// undefined
