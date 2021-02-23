// Promise constructor function - new Promise()
// resolve method is used to indicate that the request completed successfully
// reject is used if the request fails
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( /* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
    }, Math.random() * 2000);
});

// a Promise will immediately return an object
const myPromiseObj = new Promise(function (resolve, reject) {
    // sundae creation code
});
// that object has a .then() method that takes two functions
// 1) the function to run if the request completed successfully
// 2) the function to run if the request failed to complete
mySundae.then(function(sundae) {
    console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {  // receives the error message "Sorry, we're out of that flavor :-(" 
    console.log(msg);
    self.goCry(); // not a real method
});
