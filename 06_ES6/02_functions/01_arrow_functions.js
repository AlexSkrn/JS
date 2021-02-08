// passing a regular function to the map() method
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) {
  return name.toUpperCase();
});

// passing an arrow function ( => ) to the map() method
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);


const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

// passing a regular function
const longNames = names.filter(function(name) {
  return name.length > 6;
});

// passing an arrow function expression
const longNames = names.filter( name => name.length > 6 );

// storing an arrow function in a variable
const greet = name => `Hello ${name}!`;
greet('Alex');
// Hello Alex!

// if there are two+ items in the parameter list, or if there are zero items in the list,
// then you need to wrap the list in parentheses:

// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Alex!');
sayHi();
// Hello Alex!

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');
// Here's your chocolate ice cream in a waffle cone.


// Concise vs block body syntax
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});

//
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black'];

const crazyColors = colors.map( color => {
      const jumble = color.split('').reverse();
      return jumble.join('') + '!';
});

// alternatively
const crazyColors = colors.map( color => color.split('').reverse().join('') + '!' );
