const games = new Set();
console.log(games);
// Set {}

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);
// Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

// .add() returns the Set if an item is successfully added
games.add('Banjo-Tooie');
games.add('Age of Empires');
// .delete() returns a Boolean (true or false) depending on successful deletion
games.delete('Super Mario Bros.');

games.clear()
console.log(games);
// Set {}

// length of set
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);  // NOT .length

console.log(months.has('September'));
// true

console.log(months.values());  // same as .keys()
// SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}

const iterator = months.values();
iterator.next();
// Object {value: 'January', done: false}

const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}

/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */
const myFavoriteFlavors = new Set();
for (const flavor of ["chocolate chip", "cookies and cream", "strawberry", "vanilla"]) {
    myFavoriteFlavors.add(flavor);
}

myFavoriteFlavors.delete("strawberry");

// console.log(myFavoriteFlavors);
// Set { 'chocolate chip', 'cookies and cream', 'vanilla' }
