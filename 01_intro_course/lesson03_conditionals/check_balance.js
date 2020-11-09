/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here

function checkBankBalance (balance, checkBalance, isActive) {
  if (!checkBalance) {
    var output = 'Thank you. Have a nice day!';
    console.log(output);
  } else {
    if (checkBalance && !isActive) {
      var output = 'Your account is no longer active.';
      console.log(output);
    } else if (isActive && balance > 0) {
      var output = `Your balance is \$${balance.toFixed(2)}.`
      console.log(output);
    } else {
      if (!isActive) {
        var output = 'Your account is no longer active.'
        console.log(output);
      } else if (balance === 0) {
        var output = 'Your account is empty.'
        console.log(output);
      } else {
        var output = 'Your balance is negative. Please contact bank.'
        console.log(output);
      }
    }
  }
  return output
}


// Tests
console.assert(checkBankBalance(325.00, true, true) === 'Your balance is $325.00.');
console.assert(checkBankBalance(325.00, true, false) === 'Your account is no longer active.');
console.assert(checkBankBalance(0, true, true) === 'Your account is empty.');
console.assert(checkBankBalance(-1, true, true) === 'Your balance is negative. Please contact bank.');
console.assert(checkBankBalance(false, false, true) === 'Thank you. Have a nice day!');

// solution
// Start only if checkBalance === true
if (checkBalance === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    }
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }
}
else {
  console.log("Thank you. Have a nice day!");
}
