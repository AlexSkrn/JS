let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

// async functions which invoke myPromise()
async function noAwait() {
 let value = myPromise();  // await keyword left off!
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }  -- function execution wasn’t paused
           // console.log()  was executed before the promise had resolved
yesAwait(); // Prints: Yay, I resolved!
