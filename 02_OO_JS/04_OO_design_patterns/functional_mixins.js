// constructor function - implicates prototypal inheritance
function City(name, population) {
  this.name = name;
  this.population = population;

  this.identify = function () {
    console.log(`${this.name}'s population is ${this.population}.`);
  };
}

//  invoke the function with the new operator:
const sanFrancisco = new City('San Francisco', 870000); // create a new object

console.log(sanFrancisco);
// {
//   name: 'San Francisco',
//   population: 870000,
//   identify: function () {
//     console.log(`${this.name}'s population is ${this.population}.`);
//   };
// }

// factory function - returns an object, but isn't itself a class or constructor
function Basketball(color) {
  return {
    color: color,
    numDots: 35000
  };
}

const orangeBasketball = Basketball('orange');  // Basketball() returns an object directly

console.log(orangeBasketball);
// { color: 'orange', numDots: 35000 }

// Factory function example:
function Radio(mode) {
  let on = false;

  return {
    mode: mode,
    turnOn: function () {
      on = true;
    },
    isOn: function () {
      return on;        // this object is closing over the variable "on" (i.e. preserves its state)
    }
  };
}

let fmRadio = Radio('fm');

fmRadio.on;
//undefined

fmRadio.isOn();
// false

fmRadio.turnOn();

fmRadio.isOn();
// true

// A functional mixin is a composable factory function that receives a _mixin_as an argument,
// copies properties and methods from that mixin, and returns a new object
function CoffeeMaker(object) {
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    }
  });
}

const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });
// {
//   style: 'percolator',
//   pourAll: function () {
//     needsRefill = true;
//   },
//   isEmpty: function () {
//     return needsRefill;
//   }
// }

// functional mixins are composable; we can use them as individual
// pieces of code that add specific properties like an assembly line
function IceCreamFactory(obj) {
  let isCold = true;

  return Object.assign({}, obj, {
    melt: function () {
      isCold = false;
    },
    isCold: function () {
      return isCold;
    }
  });
}

// let iceCream = IceCreamFactory({});

function ConeFactory(obj) {
  let isDry = true;

  return Object.assign({}, obj, {
    soggy: function () {
      isDry = false;
    },
    isDry: function () {
      return isDry;
    }
  });
}

let iceCreamCone = IceCreamFactory(ConeFactory({}));

console.log(iceCreamCone);
// {soggy: ƒ, isDry: ƒ, melt: ƒ, isCold: ƒ}
