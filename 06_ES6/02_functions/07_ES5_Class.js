// constructor function, by convention, starts with a capital letter
function Plane(numEngines) {  // constructor function that will create new Plane objects
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
// "inherited" methods are placed on the constructor function's prototype object
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

var richardsPlane = new Plane(1);  // constructor function is called with the new keyword
richardsPlane.startEngines();

var jamesPlane = new Plane(4);
jamesPlane.startEngines();
