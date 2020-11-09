var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (var i; i < donuts.length; i++) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
}

// inline function expression
donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

// alternative option
function printDonuts(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
};

donuts.forEach(printDonuts);

// function parameters :: element, index,  array


words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

// Prints:
// Word 0 in cat,in,hat is cat
// Word 1 in cat,in,hat is in
// Word 2 in cat,in,hat is hat
