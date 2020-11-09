const button = document.getElementById('button');

// we immediately invoke a function that returns another function
// And since the returned function has access to the internal variable, count,
// a private scope is created -- effectively protecting the data

// Containing count in a closure allows us to retain the data from each click
button.addEventListener('click', (function() {
  let count = 0;

  return function() {  // the returned function closes over the count variable
    // debugger;
    count += 1;

    if (count === 2) {
      alert('This alert appears every other press!');
      count = 0;
    }
  };
})()
);
