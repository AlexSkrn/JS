/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
var T = 60;

while (T >= 0) {
  if (T === 50) {
    console.log('Orbiter transfers from ground to internal power');
  }
  else if (T === 31) {
    console.log('Ground launch sequencer is go for auto sequence start');
  }
  else if (T === 16) {
    console.log('Activate launch pad sound suppression system');
  }
  else if (T === 10) {
    console.log('Activate main engine hydrogen burnoff system');
  }
  else if (T === 6) {
    console.log('Main engine start');
  }
  else if (T === 0) {
    console.log('Solid rocket booster ignition and liftoff!');
  }
  else {
    console.log(`T-${T} seconds`);
  }
  T = T - 1
}


// SOLUTION
// Let us take an iteration variable, that represent the remaining Time in seconds
n = 60

// While loop with a stop condition
while (n >= 0) {
    if (n === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else if (n === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if (n === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if (n === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if (n === 6) {
        console.log("Main engine start");
    }
    else if (n === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else{
        console.log("T-"+n+" seconds");
    }

    //Never forget to decrement/increment the iteration variable in a while loop
    // Otherwise, you loop will run infinite iterations
    n = n-1;
}
