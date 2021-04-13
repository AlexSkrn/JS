// XHR GET request
// AJAX Asynchronous JavaScript And XML

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  // check if the request has finished
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
 }
};

xhr.open('GET', url);  // creates a new request
xhr.send();
