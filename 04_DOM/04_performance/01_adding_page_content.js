// Adding page content and measuring running time
var t0 = performance.now();

for (let i = 1; i <= 200; i++) {
    var newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}

var t1 = performance.now();
console.log('This code took ' + (t1 - t0) + ' milliseconds.');

// Improved code
var startingTime = performance.now();

var myCustomDiv = document.createElement('div');  // create a parent container element outside of the loop

for (let i = 1; i <= 200; i++) {
  var newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;

  myCustomDiv.appendChild(newElement);  // append all new paragraph elements to this parent container
}

document.body.appendChild(myCustomDiv);  // append this parent container to the <body> element

var endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
