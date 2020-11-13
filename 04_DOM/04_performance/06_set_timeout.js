setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);  // in milliseconds

// setTimeout() is an API provided by the browser, the call to setTimeout() gives
// the sayHi() function over to the browser which starts a timer

// After the timer is finished, the sayHi() function moves to the Queue.

// If the Call Stack is empty, then the sayHi() function is moved to the Call Stack and executed.

// this technique can help us to convert potentially long-running code to one that's broken up
// to allow for the browser to handle user interactions

let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();

// If you try running this code on a page, you can still interact with the page while the code is running.
// It doesn't lock up or freeze the page because of the setTimeout() calls.
