// Two uses of Module Pattern:
// 1 - create private properties
// 2 - modules are a larger unit of organization than functions or objects
// so they help partition code and provide structure as an application scales

// you generally use the Module Pattern when you just want one "version" of an object
// If you're looking to instantiate unique objects that follow a certain blueprint,
// you can write and invoke a constructor function

// we can access and re-assign values of objects' properties
let developer = {
  name: 'Veronika',
  getName: function () {
    return this.name;
  }
};

developer.getName();
// 'Veronika'

developer.name;
// 'Veronika'

developer.name = 'Not Veronika';

developer.getName();
// 'Not Veronika'

developer.name;
// 'Not Veronika'

// we can use scope and closures to create a private state
function myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

let counter = myCounter();

counter();
// 1

counter();
// 2

counter.count;
// undefined

count;
// undefined

// IIFEs can be ised for creating private state. By wrapping chemicalformula
// and molarmass in an immediately-invoked function expression, those variables are inaccessible
// from the outside world

let sodiumChloride = (function(){
  let chemicalFormula = 'NaCl';
  let molarMass = 58.44;

  return {
    getProperties: function(){
      console.log(`Formula: ${chemicalFormula}`);
      console.log(`Molar Mass: ${molarMass} g/mol`);
    }
  };
})();

sodiumChloride.getProperties();
// Formula: NaCl
// Molar Mass: 58.44 g/mol


// Module Pattern uses scope, closures, and (commonly) immediately-invoked function expressions (IIFE)
// to not only hide data from external access, but to also provide a public interface for such data
let person = (function () {
  let name = 'Veronika';

  return  {
    getName: function () {
      return name;
    },
    setName: function (myName){
      name = myName;
    }
  };
})();

person.name;
// undefined
person.getName;
// 'Veronika'

person.setName('Not Veronika');
person.getName;
// 'Not Veronika'

// Another example
let diana = (function () {
  let secretIdentity = 'Diana Prince';

  return {
    introduce: function () {
      console.log(`Hi! I am ${secretIdentity}`);
    }
  };
})();

console.log(diana.secretIdentity);
// undefined

diana.introduce();
// 'Hi! I am Diana Prince'
