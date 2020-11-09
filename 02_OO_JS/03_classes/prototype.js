// function Dog(age, weight, name) {
//   this.age = age;
//   this.weight = weight;
//   this.name = name;
//   this.bark = function () {
//     console.log(`${this.name} says woof!`);
//   };
// }

function Dog(age, weight, name) {
  this.age = age;
  this.weight = weight;
  this.name = name;
}

Dog.prototype.bark = function () {
    console.log(`${this.name} says woof!`);
};

dog1 = new Dog(2, 60, 'Java');

dog2 = new Dog(4, 55, 'Jodi');

dog1.bark();

dog2.bark();

// By adding methods to the prototype, memory is saved as more Dog objects
// are instantiated (because that function does not need to be recreated
// each time an instance of Dog is created). Along with being more efficient,
// we also don't have to update
// all objects individually should be decide to change a method. ???

const myArray = [1, 2, 3];

myArray.join('');

console.dir(myArray);  // see __proto__

// hasOwnProperty()
function Phone() {
  this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;

const myPhone = new Phone();

const own = myPhone.hasOwnProperty('operatingSystem');

console.log(own);
// true

const inherited = myPhone.hasOwnProperty('screenSize');

console.log(inherited);
// false


// isPrototypeOf() takes a single argument: an object whose prototype chain is to be searched
// it checks whether or not an object exists in another object's prototype chain
const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

function Mouse() {
  this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true

// Object.getPrototypeOf()
const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }

// The constructor Property returns a reference to the constructor function
// that created that object;
// every object has this property
function Longboard() {
  this.material = 'bamboo';
}

const board = new Longboard();
console.log(board.constructor);
// function Longboard() {
//   this.material = 'bamboo';
// }

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

console.log(rodent.constructor);
// function Object() { [native code] }
