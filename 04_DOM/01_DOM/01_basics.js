// characters
// tags
// tokens
// nodes
// DOM == a web page API for scripts (or, the parsed representation of the page)

// Node ~= Class in OO Programming
// node ~= object

// Element -> Node -> EventTarget

// https://developer.mozilla.org/en-US/docs/Web/API lists all
// available interfaces == types of objects

var bodyEl = document.body;

bodyEl.baseURI;  // interface exposed by a Node object
// "https://developer.mozilla.org/en-US/docs/Web/API/Node"


// selects the DOM element with an ID of "sidebar"
const sidebarElement = document.getElementById('sidebar');

// searches within the "sidebar" element for any elements with a class of "sub-heading"
const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');
