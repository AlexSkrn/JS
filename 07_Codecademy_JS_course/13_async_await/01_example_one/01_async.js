// async function declarations
// async functions always return a promise
async function myFunc() {
  // Function body here
};

myFunc();

// async function expressions
const myFunc = async () => {
  // Function body here
};

myFunc();


// If there’s nothing returned from the function, it will return a promise with
//   a resolved value of undefined.
// If there’s a non-promise value returned from the function, it will return
//   a promise resolved to that value.
// If a promise is returned from the function, it will simply return that promise
async function fivePromise() {
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5
