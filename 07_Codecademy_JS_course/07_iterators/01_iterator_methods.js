// Iterators accept callback functions as arguments

// .forEach() Loops through array and executes callback function for each element
//            During each execution, curr element is passed as arg to callback function.
//            Return value for .forEach() will always be undefined

// .map()     Returns a new array

// .filter()  Returns a new array
//            Callback function should return true or false

// forEach
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const groceries = ['mango', 'papaya', 'pineapple', 'apple'];
groceries.forEach(groceryItem => console.log(groceryItem));

function printGrocery(element){
  console.log(element);
}
groceries.forEach(printGrocery);


// map
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

// filter
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
