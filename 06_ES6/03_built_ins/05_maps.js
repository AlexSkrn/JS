const employees = new Map();
console.log(employees);
// Map {}


// Unlike Sets, you can’t create Maps from a list of values
// use .set() method to add key-values
const employees = new Map();

employees.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});


employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');

employees.clear();

// The .delete() method returns true if a key-value pair is successfully deleted
// from the Map object, and false if unsuccessful. The return value of .set() is
// the Map object itself if successful.

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

// false
// true

console.log(members.get('Evelyn'));
// 75.68
