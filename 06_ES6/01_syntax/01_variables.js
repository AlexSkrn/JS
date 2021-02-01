// using 'var' considered bad practice and should be avoided

function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

// this is equivalent to:
function getClothing(isCold) {
  var freezing, hot;
  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

getClothing(false);
// return 'undefined' rather then 'ReferenceError: freezing is not defined'
// 'cos 'var' is scoped to the function rather than the block

function getClothing(isCold) {
  if (isCold) {
    let freezing = 'Grab a jacket!';  // or 'const'
  } else {
    let hot = 'It’s a shorts kind of day.';  // or 'const'
    console.log(freezing);
  }
}

getClothing(false);
// Uncaught ReferenceError: freezing is not defined

// Variables declared with 'let' can be reassigned, but can’t be redeclared in the same scope.
// Use 'let' to declare variables when you plan on changing the value of a variable later in your code
let instructor = 'James';
instructor = 'Richard';
console.log(instructor);
// Richard

// Variables declared with 'const' must be assigned an initial value, but can’t be
// redeclared in the same scope, and can’t be reassigned
// Use 'const' when you don’t plan on reassigning new values to a variable

// 'const' is the strictest way to declare a variable, we suggest that you always declare
// variables with 'const' because it'll make your code easier
// to reason about since you know the identifiers won't change throughout the lifetime of your program
