// example
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'


// example
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {  // onFulfilled
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {  // onRejected
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
