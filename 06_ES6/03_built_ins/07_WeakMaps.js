// 1) a WeakMap can only contain objects as keys
// 2) a WeakMap is not iterable
// 3) a WeakMap does not have a .clear() method

let book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
let book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
let book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

library.set('The Grapes of Wrath', false);
// Uncaught TypeError: Invalid value used as weak map key(…)

book1 = null;  // remove item from WeakMap object
