// <parent-element>.removeChild(<child-to-remove>);


var cardContainer = $0;  // need access to parent element
// cardContainer.firstChild;  // might return whitespace (if there is any) to preserve the formatting of the underlying HTML source code
// cardContainer.firstElementChild;  // return the first element
var firstCard = cardContainer.firstElementChild;
cardContainer.removeChild(firstCard);

// example - need no access to the parent element directly
var mainHeading = document.querySelector('h1');  // select the first <h1>

mainHeading.parentElement.removeChild(mainHeading);

// .remove()
var mainHeading = document.querySelector('h1');

mainHeading.remove();
