var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});


var myArray = [1, 2, 3];

var newArray = myArray.map(function(elem) {
  elem += 100;
  return elem;
});
