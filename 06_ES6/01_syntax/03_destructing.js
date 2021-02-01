const point = [10, 25, -34];

const [x, y, z] = point;

// or ignore and disard values

const [x, , z] = point;


// from an object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

let {color} = gemstone;


const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;

getArea();
// NaN

// When you destructure the object and store the getArea() method into the getArea variable,
// it no longer has access to 'this' in the circle object which results in an area that is NaN.

/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, ,, two, ,,, three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
