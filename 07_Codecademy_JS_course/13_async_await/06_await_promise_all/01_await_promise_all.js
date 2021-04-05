// Another way to take advantage of concurrency/asynchronicity when we have
// multiple promises which can be executed simultaneously is to await a Promise.all()

// We can pass an array of promises as the argument to Promise.all(),
// and it will return a single promise

// This promise will resolve when all of the promises in the argument array have resolved.

// This promise’s resolve value will be an array containing the resolved values
// of each promise from the argument array.
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]);
  }
}

// Promise.all() also has the benefit of failing fast, meaning it won’t wait
// for the rest of the asynchronous actions to complete once any one has rejected

// Promise.all() is a good choice if multiple asynchronous tasks are all required,
// but none must wait for any other before executing
