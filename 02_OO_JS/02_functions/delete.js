// The delete operator is actually only effective on an object's properties;
// it isn't used to directly deallocate resources (i.e., free up memory),
// and has no effect on variables or names of functions.
//
// As such, the number passed into this immediately-invoked function expression, 2, is returned.

(function(n){
  delete n;
  return n;
})(2);
// 2


// if you simply have a one-time task (e.g., initializing an application),
// an IIFE is a great way to get something done without polluting your
// the global environment with extra variables
