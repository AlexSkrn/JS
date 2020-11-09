// filter() method is similar to the map() method:
//
// It is called on an array
// It takes a function as an argument
// It returns a new array

// the function passed to filter() is used as a test,
// and only items in the array that pass the test are included in the new array

var names = ['David', 'Richard', 'Veronika'];

var shortNames = names.filter(function(name) {
  return name.length < 6;
});
