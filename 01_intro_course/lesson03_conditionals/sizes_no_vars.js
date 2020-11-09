var size;
if (
    (shirtWidth >= 18 && shirtWidth < 20 ) &&
    (shirtLength >= 28 && shirtLength < 29) &&
    (shirtSleeve >= 8.13 && shirtSleeve < 8.38)
   ) {
  size = 'S';
  console.log(size);
}
else if (
    (shirtWidth >= 20 && shirtWidth < 22 ) &&
    (shirtLength >= 29 && shirtLength < 30) &&
    (shirtSleeve >= 8.38 && shirtSleeve < 8.63)
   ) {
  size = 'M';
  console.log(size);
}
else if (
    (shirtWidth >= 22 && shirtWidth < 24 ) &&
    (shirtLength >= 30 && shirtLength < 31) &&
    (shirtSleeve >= 8.63 && shirtSleeve < 8.88)
   ) {
  size = 'L';
  console.log(size);
}
else if (
    (shirtWidth >= 24 && shirtWidth < 26 ) &&
    (shirtLength >= 31 && shirtLength < 33) &&
    (shirtSleeve >= 8.88 && shirtSleeve < 9.63)
   ) {
  size = 'XL';
  console.log(size);
}
else if (
    (shirtWidth >= 26 && shirtWidth < 28 ) &&
    (shirtLength >= 33 && shirtLength < 34 ) &&
    (shirtSleeve >= 9.63 && shirtSleeve < 10.13)
   ) {
  size = '2XL';
  console.log(size);
}
else if (
    (shirtWidth >= 28) &&
    (shirtLength >= 34) &&
    (shirtSleeve >= 10.13)
   ) {
  size = '3XL';
  console.log(size);
}
else {
  size = 'NA';
  console.log(size);
}

// Textbook solution
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 21;
var shirtLength = 99;
var shirtSleeve = 8.40;

var size = "NA";

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
    size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);
