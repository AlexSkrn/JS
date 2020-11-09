for (var i = 0; i < 6; i = i + 1) {
  console.log(`i = ${i}`);
}


for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}


var x = 0;
// undefined
x++;  // x = x + 1 ??
// 0
x
// 1

x = 0;
// 0

++x;
1
// x
1


// x++ or ++x // same as x = x + 1
// x-- or --x // same as x = x - 1
// x += 3 // same as x = x + 3
// x -= 6 // same as x = x - 6
// x *= 2 // same as x = x * 2
// x /= 5 // same as x = x / 5


// Rewrite the following while loop as a for loop:
var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

for (var x = 9; x >= 1; --x) {
  console.log("hello " + x);
}

// SOLUTION
for (var x = 9; x>=1; x--){
    console.log("hello " + x);
}
