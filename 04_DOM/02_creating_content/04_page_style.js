// .style.<prop>
// .cssText
// .setAttribute()
// .className
// .classList

// order of CSS specificity
// Least specific -- rules in a stylesheet
// More specific  -- rules in a <style> tag
// Most specific  -- rules in a tag's style attribute

// Element's Style Attribute
const mainHeading = document.querySelector('h1');
mainHeading.style.color = 'red';

// Setting multiple CSS styles at once
const mainHeading = document.querySelector('h1');
mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

// .setAttribute()
const mainHeading = document.querySelector('h1');
mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');

// .setAttribute() Is Not Just For Styling
const mainHeading = document.querySelector('h1');
// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');
// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';
// last two lines could've been combined into one to bypass setting an ID and just styling the element directly
mainHeading.nextElementSibling.style.backgroundColor = 'red';

// .className property returns a space-separated string of all of the element's classes
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
const mainHeading = document.querySelector('#main-heading');
// store the list of classes in a variable
const listOfClasses = mainHeading.className;
// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);
// convert this space-separated string into an array
const arrayOfClasses = listOfClasses.split(' ');
// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);
// Now we can use:
// for loop to loop through the list of class names
// use .push() to add an item to the list
// use .pop() to remove an item from the list
// set its value just by assigning: mainHeading.className = "im-the-new-class";

// .classList property (returns a DOMTokenList)
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
const mainHeading = document.querySelector('#main-heading');
// store the list of classes in a variable
const listOfClasses = mainHeading.classList;
// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);
// .add() - to add a class to the list
// .remove() - to remove a class from the list
// .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
// .contains() - returns a boolean based on if the class exists in the list or not
