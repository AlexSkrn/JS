// an object's .prototype property points to just one object
// JavaScript only supports single inheritance
// A mixin supplies properties and methods that can be shared
// Object.assign() copies own properties into a given object


const aircraft = {
  flies: true
};

const helicopter = Object.create(aircraft);  // helicopter has no properties of its own

console.log(helicopter.flies);  // helicopter is prototype-linked to aircraft
// true

// Mixins
// Single source object
let target = { letter: 'a', number: 11 };

let source = { number: 7 };

Object.assign(target, source);  // modifies then returns the target object

console.log(target);
// { letter: 'a', number: 7 }


// Multiple source objects
const duck = {
  hasBill: true
  feet: "orange"
};
const beaver = {
  hasTail: true
};
const otter = {
  hasFur: true,
  feet: 'webbed'  // Note name collision here
};

const platypus = Object.assign({}, duck, beaver, otter);  // order matters

console.log(platypus);
// { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }

// platypus object is not prototype-linked to the three other objects
platypus.constructor;
// Object()

platypus.isPrototypeOf(duck);
// false

duck.isPrototypeOf(platypus);
// false

platypus.isPrototypeOf(beaver);
// false

beaver.isPrototypeOf(duck);
// false

platypus.isPrototypeOf(otter);
// false

otter.isPrototypeOf(platypus);
// false
