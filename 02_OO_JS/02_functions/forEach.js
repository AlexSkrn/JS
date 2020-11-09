// forEach() doesn't return anything

array.forEach(function callback(currentValue, index, array) {
    // function code here
});


function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
}
[1, 5, 2, 4, 6, 3].forEach(logIfOdd);
// 1
// 5
// 3

[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});
// 1
// 5
// 3

// anonymous function as an argument
[1, 5, 2, 4, 6, 3].forEach(function (n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});
// 1
// 5
// 3

var favoriteFlavors = ['cookie dough', 'salted caramel', 'toffee'];

favoriteFlavors.forEach(function(flavor) {
  debugger;
  console.log('I enjoy ' + flavor + ' ice cream!');
});
