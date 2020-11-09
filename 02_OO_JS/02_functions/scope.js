// any variables defined inside a function are not available outside of
// that function. On the other hand, if there are any variables defined
// inside a block (e.g., within an if statement, or for), those variables are
// available outside of that block

// A function's scope is the set of variables available for use within
// that function. The scope of a function includes:
//
// The function's arguments
// Local variables declared within the function
// Variables from its parent function's scope
// Global variables

var globalNumber = 5;

function globalIncrementer() {
  var localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}

globalIncrementer();
console.log(globalNumber);
// 6

console.log(localNumber);
// Uncaught ReferenceError: localNumber is not defined
