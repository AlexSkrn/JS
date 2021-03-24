const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;  // callback function

timeFuncRuntime(addOneToOne);


// invoke timeFuncRuntime() with an anonymous function
timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});



const addTwo = num => num + 2;

const checkConsistentOutput = (func, val) => {
  let res1 = func(val);
  let res2 = func(val);
  if (res1 === res2) {
    return res1;
  } else {
    return 'This function returned inconsistent results';
  }
}

checkConsistentOutput(addTwo, 3);
