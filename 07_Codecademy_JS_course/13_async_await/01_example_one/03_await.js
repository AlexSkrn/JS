// await is an operator: it returns the resolved value of a promise
// await halts the execution of our async function until a given promise is resolved

async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
