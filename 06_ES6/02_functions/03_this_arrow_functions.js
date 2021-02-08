// With arrow functions, the value of 'this' is based on the function's surrounding context
// i.e. the value of 'this' inside an arrow function is the same as the value of 'this' outside the function

// Regular function
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++;
    console.log('scoop added!');
  }, 500);
};

const dessert = new IceCream();  // The function passed to setTimeout() is called without new,
dessert.addScoop();              // without call(), without apply(), and without a context object.
// scoop added!                  // Value of 'this' inside function is global object and NOT dessert object
console.log(dessert.scoops);
// 0

console.log(scoops);  // A new scoops variable was created (with a default value of undefined)
// NaN                // and was then incremented (undefined + 1 results in NaN)


// One way around this is to use closure:
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
// instead of using 'this' inside the function, it sets the cone variable to 'this' and
// then looks up the 'cone' variable when the function is called
console.log(dessert.scoops);
// 1

// With arrow functions:
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream: arrow functions inherit their 'this' value from the surrounding context
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();  // value of 'this' inside addScoop() refers to dessert
console.log(dessert.scoops);
// 1
// Since this outside of the arrow function refers to dessert, 
// the value of 'this' inside the arrow function will also refer to dessert
