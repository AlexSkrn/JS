// <event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);

// Note:
// .removeEventListener() requires the same exact listener function as the one
// passed to .addEventListener()

function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);
