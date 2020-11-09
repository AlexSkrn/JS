// map() method returns a new array; it does not modify the original array

var names = ['David', 'Richard', 'Veronika'];

var nameLengths = names.map(function(name) {
  return name.length;
});

// [5, 7, 8]
