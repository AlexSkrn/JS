/*
comment
comment
*/
var celsius = 12;
var fahrenheit = (celsius * 1.8 + 32 );
console.log(fahrenheit);

var quote = "Stay awhile and listen!";
console.log(quote[6]);

quote.charAt(6);

// Pick a string. Your string can have any number of characters.
var my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0.
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);


var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

var res = 1.1111.toFixed(2)
typeof(res) // "string"


// string formatting
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib)
