// IIFE's, local variables/functions, and a returned object literal with revealed
// data make up the structure and syntax of the Revealing Module Pattern

// "normal" module pattern
let myModude = (function () {  // return value of the entire expression is stored in variable
  function privateMethod (message) {
    console.log(message);
  }
  return {
    publicMethod: function (message) {  // return an object with a public function
      privateMethod(message);
    }
  }
})(); // IIFE - we wrap a function into paranthesis () and immediately call it with ()

// Turning it into "revealing" module pattern
// We maintain encapsulation but "reveal" certain data and functions (ie properties and methods)
let myModule = (function (){ // An IIFE (wrapper)
  function privateMethod (message) {  // The module content (variables, methods, objects, etc.)
    console.log(message);
  }

  function publicMethod (message) {  // 1st, move public function oustide of the return object
    privateMethod(message);
  }

  return {  // here you can reveal any functions
    publicMethod: publicMethod   // A returned object literal
  };
})();

myModule;  // an object with a single property
// {publicMethod: ƒ}
myModule.publicMethod("Hi there");
// Hi there

// more complex example:
let person = (function () {  // The returned object is stored in "person"
  let privateAge = 0;  // private data
  let privateName = 'Andrew';  // private data

  function privateAgeOneYear() {  // private method
    privateAge += 1;
    console.log(`One year has passed! Current age is ${privateAge}`);
  }

  function displayName() {  // private method
    console.log(`Name: ${privateName}`);
  }

  function ageOneYear() {  // private method
    privateAgeOneYear();
  }

  return {  // the returned object provides a public interface
    name: displayName,
    age: ageOneYear
  };
})();

console.log(person.name());
// 'My name is Andrew'

console.log(person.age());
// 'One year has passed! Current age is 1'

console.log(person.age());
// ''One year has passed! Current age is 2'

// Benefits:
// 1 - readability, clarity at the end of the module (i.e., the return statement) as to which
// variables or methods may be accessed publicly
// 2 - consistent syntax. "Normal" Module Pattern may contain variables and functions
// spread throughout the entire function body
