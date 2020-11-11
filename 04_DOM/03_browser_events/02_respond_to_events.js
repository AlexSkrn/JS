// https://developer.mozilla.org/en-US/docs/Web/Events

// EventTarget <- Node <- Element
// EventTarget is an interface implemented by objects that can receive events and may have listeners for them
// element, document, and window are the most common event targets
// both the document object and any DOM element can be an event target

// EventTarget imnterface has 3 methods:
// .addEventListener()
// .removeEventListener()
// .dispatchEvent()

// target (e.g. the document object, a <p> element) - type (a click) - listener
// <event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);

const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});


document.addEventListener('click', function () {
  console.log('The page was clicked');
});
