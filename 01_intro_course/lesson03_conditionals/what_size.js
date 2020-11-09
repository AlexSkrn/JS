let sizeS	= {width: 18, length:	28,	sleeve: 8.13};
let sizeM	= {width: 20,	length: 29,	sleeve: 8.38};
let sizeL	= {width: 22,	length: 30,	sleeve: 8.63};
let sizeXL =	{width: 24,	length: 31,	sleeve: 8.88};
let size2XL	= {width: 26,	length: 33,	sleeve: 9.63};
let size3XL	= {width: 28,	length: 34,	sleeve: 10.13};

function whatSize (shirtWidth, shirtLength, shirtSleeve) {
  var size;
  if (
      (shirtWidth >= sizeS.width && shirtWidth < sizeM.width ) &&
      (shirtLength >= sizeS.length && shirtLength < sizeM.length) &&
      (shirtSleeve >= sizeS.sleeve && shirtSleeve < sizeM.sleeve)
     ) {
    size = 'S';
  }
  else if (
      (shirtWidth >= sizeM.width && shirtWidth < sizeL.width ) &&
      (shirtLength >= sizeM.length && shirtLength < sizeL.length) &&
      (shirtSleeve >= sizeM.sleeve && shirtSleeve < sizeL.sleeve)
     ) {
    size = 'M';
  }
  else if (
      (shirtWidth >= sizeL.width && shirtWidth < sizeXL.width ) &&
      (shirtLength >= sizeL.length && shirtLength < sizeXL.length) &&
      (shirtSleeve >= sizeL.sleeve && shirtSleeve < sizeXL.sleeve)
     ) {
    size = 'L';
  }
  else if (
      (shirtWidth >= sizeXL.width && shirtWidth < size2XL.width ) &&
      (shirtLength >= sizeXL.length && shirtLength < size2XL.length) &&
      (shirtSleeve >= sizeXL.sleeve && shirtSleeve < size2XL.sleeve)
     ) {
    size = 'XL';
  }
  else if (
      (shirtWidth >= size2XL.width && shirtWidth < size3XL.width ) &&
      (shirtLength >= size2XL.length && shirtLength < size3XL.length) &&
      (shirtSleeve >= size2XL.sleeve && shirtSleeve < size3XL.sleeve)
     ) {
    size = '2XL';
  }
  else if (
      (shirtWidth >= size3XL.width) &&
      (shirtLength >= size3XL.length) &&
      (shirtSleeve >= size3XL.sleeve)
     ) {
    size = '3XL';
  }
  else {
    size = 'NA';

  }

  console.log(size)
  return size

}

// Tests

console.assert(whatSize(18, 28, 8.13) === 'S');
console.assert(whatSize(19.99, 28.99, 8.379) === 'S');
console.assert(whatSize(20, 29, 8.38) === 'M');
console.assert(whatSize(22, 30, 8.63) === 'L');
console.assert(whatSize(24, 31, 8.88) === 'XL');
console.assert(whatSize(26, 33, 9.63) === '2XL');
console.assert(whatSize(27.99, 33.99, 10.129) === '2XL');
console.assert(whatSize(28, 34, 10.13) === '3XL');
console.assert(whatSize(18, 29, 8.47) === 'NA');
