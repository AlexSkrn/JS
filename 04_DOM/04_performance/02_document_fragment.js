// DocumentFragment is a minimal document object that has no parent.
// a lightweight version of Document

// document fragment isn't part of the active document tree structure,
// changes made to the fragment don't affect the document, cause reflow, or incur any performance impact
var fragment = document.createDocumentFragment();  // uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    var newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once
