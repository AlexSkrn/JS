// default export
// menu.js
let Menu = {};
export default Menu; // in ES6, export default in place of module.exports
// module.exports is usually used for Node.js development and ES6 syntax
// is used for front-end development

// order.js
import Menu from './menu';


// named exports
// menu.js
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};

export { specialty, isVegetarian };
// or
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

// order.js
import { specialty, isVegetarian } from './menu';
console.log(specialty);
// or, accordingly
import { chefsSpecial, isVeg } from './menu';
import {isLowSodium as saltFree} from 'Menu';
import * as Carte from './menu';  // import the entire module as an alias:

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();


// menu.js
export let specialty = '';
export function isVegetarian() {
};
function isLowSodium() {
};

// combining named exports and default exports
// menu.js
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

// alternatively
export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
};
export let isLowSodium = function() {
};
let isGlutenFree = function() {
};

export default isGlutenFree;


// Combining Import Statements
import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';
