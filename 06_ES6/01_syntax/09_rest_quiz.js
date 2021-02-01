/*
 * Programming Quiz: Using the Rest Parameter (average() should return 0)
 */

// your code goes here

function average(...items) {
    let average = 0;
    let sum = 0;
    for (let item of items) {
        sum += item;
    }
    if (items.length > 0) {
        average = sum/items.length;
    }
    return average;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
