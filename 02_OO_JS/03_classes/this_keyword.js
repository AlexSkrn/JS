// calling a constructor function with the new keyword sets this to a newly-created object.
function City(name, population) {
  this.name = name;
  this.population = population;

  this.identify = function () {
    console.log(`${this.name}'s population is ${this.population}.`);
  };
}

const sanFrancisco = new City('San Francisco', 870000);

// calling a function that belongs to an object (i.e., a method) sets this to the object itself.
const dog = {
  bark: function () {
    console.log('Woof!');
  },
  barkTwice: function () {
    this.bark();  //  this refers to dog
    this.bark();
  }
};

// calling a function on its own (i.e., simply invoking a regular function) will set this to window
function funFunction() {
  return this;
}

funFunction();
// (returns the global object, `window`)

// we can also set this ourselves
function multiply(n1, n2) {
  return n1 * n2;
}

multiply.call(window, 3, 4);
multiply.apply(window, [3, 4]);


const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};
const pride = {
  title: 'Pride and Prejudice'
};
mockingbird.describe.call(pride);  // pride object can utilize mockingbird's describe() method
mockingbird.describe.apply(pride);
// 'Pride and Prejudice is a classic novel'


const cat = {
  name: 'Bailey'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}`);  // this refers to window
}

sayHello.call(cat, 'Nice to see you');
sayHello.apply(cat, ['Hello']);


// invokeTwice calls dog.GrowOneYear as a function and "this" refers to window
function invokeTwice(cb) {
   cb();  // now this refers to window
   cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;  // "this" refers to dog when growOneYear is invoked as a method
  }
};

dog.growOneYear();
// (this works as expected)
dog.age;
// 6

invokeTwice(dog.growOneYear);
// undefined
dog.age;
// 6

// To fix this, use an anonimous closure to close over the "dog" object
invokeTwice(function () {
  dog.growOneYear();  // growOneYear() method is directly called onto the dog object
});

dog.age;
// 7

// Or, use the "bind" method on "growOneYear"
// "bind" returns a new function that, when called, has "this" set to the provided object
const myGrow = dog.growOneYear.bind(dog);
invokeTwice(myGrow);
dog.age;
// 7

// Example:
const driver = {
  name: 'Danica',
  displayName: function () {
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: 'Fusion'
};

driver.displayName.bind(car);  // "borrow" the displayName() method from driver for the car object to use
