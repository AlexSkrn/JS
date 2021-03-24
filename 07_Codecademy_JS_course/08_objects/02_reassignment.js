// Mutating object's properties
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

// Reassigning the variable value doesn't work
let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {  // body of tryReassignment() has no knowledge of the 'spaceship' variable
  obj = {  // 'obj' parameter of the tryReassignment() function is a variable in its own right
    identified : false,
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified : false,
  'transport type': 'flying'
}; // Regular reassignment still works.
