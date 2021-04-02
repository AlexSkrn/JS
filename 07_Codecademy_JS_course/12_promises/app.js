const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(successValue) {
  console.log(successValue);
}
function handleFailure(rejectionReason) {
  console.log(rejectionReason);
}
// .then() will return a promise with the same settled value as the promise
// it was called on if no appropriate handler was provided
checkInventory(order).then(handleSuccess, handleFailure);

// $ node app.js
// Thank you. Your order was successful.
