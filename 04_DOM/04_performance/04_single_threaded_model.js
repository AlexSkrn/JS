function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
appendNewMessage();

// create nested functions
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage();
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();

//  JavaScript engine keeps a call stack (basically a list) of the functions that are running
