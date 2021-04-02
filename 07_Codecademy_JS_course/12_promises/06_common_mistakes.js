// Mistake 1: Nesting promises instead of chaining them.
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})

// Mistake 2: Forgetting to return a promise.
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {      // .then() is invoked on a promise with the same
  console.log(someVal);  // settled value as the original promise
})
