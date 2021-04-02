// Promises are objects that represent the eventual outcome of an asynchronous operation
// three states: Pending, Fulfilled, Rejected

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);


const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!');
  }
}
const myFirstPromise = new Promise(executorFunction);

// synchronous example
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
function myExecutor(resolve, reject
) {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);
