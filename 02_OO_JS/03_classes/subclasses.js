// Inheritance in JavaScript is all about setting up the prototype chain
// An object (instance) is secretly linked to its constructor function's prototype object
// through that instance's __proto__ property

const bear = {
  claws: true,
  diet: 'carnivore'
};

function PolarBear() {
  // ...
}

PolarBear.prototype = bear;

const snowball = new PolarBear();

snowball.color = 'white';
snowball.favoriteDrink = 'cola';

console.log(snowball.claws);
// true

console.log(snowball.diet);
// 'carnivore'

console.log(snowball.__proto__);
Object.getPrototypeOf(snowball);
// { claws: true, diet: 'carnivore' }

console.log(snowball.__proto__ === bear);
// true

// Question: What does waffle.__proto__ refer to?
function GuineaPig (name) {
  this.name = name;
  this.isCute = true;
}

const waffle = new GuineaPig('Waffle');
// When the new instance of GuineaPig is created, the special property waffle.__proto__
// is set to GuineaPig.prototype. This secret link allows instances of the GuineaPig
// constructor to access properties of GuineaPig.prototype


// Object.create() takes in a single object as an argument, and returns a new object
// with its __proto__ property set to what argument is passed into it

const mammal = {
  vertebrate: true,
  earBones: 3
};

const rabbit = Object.create(mammal);
console.log(rabbit); // the new rabbit object is blank, with no properties of its own
// {}


console.log(rabbit.__proto__ === mammal); // rabbit is secretly linked to mammal
// true

console.log(rabbit.vertebrate);
// true

console.log(rabbit.earBones);
// 3


// Subclass Example
function Animal (name) {  // A constructor function: Parent function
  this.name = name;
}

Animal.prototype.walk = function () {  // "walk" method defined on "Animal.prototype"
  console.log(`${this.name} walks!`);
};

// Cat (Child function) inherits from Animal
function Cat (name) { // A constructor function
  Animal.call(this, name);  // Calling super-constructor on the Cat's instance. "this" will be set to the Cat's instance
  this.lives = 9;
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;  // Otherwise, constructor will point to Animal

Cat.prototype.meow = function () {
  console.log('Meow!');
};

const bambi = new Cat('Bambi');

bambi.meow();
//  Meow!
bambi.walk();
// Bambi walks!
bambi.name;
// "Bambi"
