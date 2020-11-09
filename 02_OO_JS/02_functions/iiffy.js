// An immediately-invoked function expression (IIFE) is a function that is called
// immediately after it is defined. Utilizing an IIFE alongside closures allows
// for a private scope, which maintains privacy for variables defined within them.
// And since less variables are created, an IIFE will help to minimize pollution
// of the global environment, hindering the chances of variable name collisions.


// function declaration
function returnHello() {
  return 'Hello!';
}

// function expressions
// anonymous
const myFunction = function () {
  return 'Hello!';
};

// named
const myFunction = function returnHello() {
  return 'Hello!';
};

// Immediately-Invoked Function Expressions
(function sayHi(){
    alert('Hi there!');
  }
)();
// alternatively
(function sayHi(){
   alert('Hi there!');
}());

(function (name){
    alert(`Hi, ${name}`);
  }
)('Andrew');

(function (x, y){
    console.log(x * y);
  }
)(2, 3);
// 6

// private scope (i.e., private state)
// we don't pollute the global scope
const myFunction = (  // Immediately-Invoked Function Expressions
  function () {
    const hi = 'Hi!';  // a locally-defined variable
    return function () {  // a returned function that closes over (i.e., captures) the hi variable
      console.log(hi);
    }
  }
)();
