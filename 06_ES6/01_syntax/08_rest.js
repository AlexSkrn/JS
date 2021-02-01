const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

// 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

function printPackageContents(...items) {
  for (const item of items) {
    console.log(item);
  }
}

printPackageContents('cheese', 'eggs', 'milk');

// Variadic functions take an indefinite number of arguments

// Previously, arguments object is an array-like object that is available as a local variable inside all functions

function sum() {  // no parameters which is misleading
  let total = 0;
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

// Now, you can rewrite the sum() function to read more clearly.
function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}
