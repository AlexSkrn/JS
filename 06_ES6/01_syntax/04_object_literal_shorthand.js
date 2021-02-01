let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);
// Object {type: "quartz", color: "rose", carat: 21.29}

// equivalent to:
let gemstone = { type, color, carat };

// Adding methods to objects
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {  // anonymous function is  assigned to property 'calculateWorth'
    // will calculate worth of gemstone based on type, color, and carat
  }
};

// Shorthand method names:
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }  // drop the function keyword
};
