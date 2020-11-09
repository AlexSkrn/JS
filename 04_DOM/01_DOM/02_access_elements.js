// #header {           // selecting by ID: .document.getElementById()
//     color: 'red';
// }
//
// .header {          // selecting by class: .document.getElementsByClassName()
//     color: 'red';
// }
//
// header {          // selecting by tag: .document.getElementsByTagName()
//     color: 'red';
// }

// DOM selection model

// .querySelector() Returns A Single Element

// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');

// The querySelectorAll Method

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');

// Quiz
// Write the .querySelectorAll() code to find all paragraph elements that are
// descendents of elements that have the class: articles

// Solution:
// FIrst find all elements that have class article, then find paragraphs within each of those article class element
document.querySelectorAll('.articles p');

// the list returned by .querySelectorAll() is a NodeList

const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}
