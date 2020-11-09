// Using literal notation (recommended):

const myObject = {};

// Using the Object() constructor function:

const myObject = new Object();


// const car = {
//   numberOfDoors: 4,
//   drive: function () {
//      console.log(this)
//      console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
//   }
// };
//
// const letsRoll = car.drive;
//
// letsRoll();


var car = {
  numberOfDoors: 4,
  drive: function () {
     console.log(this)
     console.log(this.location)
     console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  }
};

var letsRoll = car.drive;

letsRoll();
