// Promise.all() accepts an array of promises as its argument and returns a single promise

// failing fast
// If every promise in the argument array resolves, the single promise returned
//   from Promise.all() will resolve with an array containing the resolve value
//   from each promise in the argument array.
// If any promise from the argument array rejects, the single promise returned
//   from Promise.all() will immediately reject with the reason that promise rejected

// declare
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

// invoke
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
