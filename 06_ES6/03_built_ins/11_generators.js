// usual function runs to completion
function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();

// generator function
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
getEmployee();
// getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}
const generatorIterator = getEmployee();
generatorIterator.next(); // runs the code to completion

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;  // needs yield to be a generator
    }

    console.log('the function has ended');
}


function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;  // Note this change
    }

    console.log('the function has ended');
}

const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"

// QUIZ
// How many times will the iterator's .next() method need to be called to fully
// complete/"use up" the udacity generator function below:

function* udacity() {
    yield 'Richard';
    yield 'James'
}

// It will be called one more time than there are yield expressions in the generator function.
// The first call to .next() will start the function and run to the first yield.
// The second call to .next() will pick up where things left off and run to the second yield.
// The third and final call to .next() will pick up where things left off again and run
// to the end of the function.


function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello World!'); // send data into the generator
// the line above logs to the console: Your response is "Hello World!"!


function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
positions.join('\n');

// QUIZ QUESTION
// What will happen if the following code is run?
function* createSundae() {
    const toppings = [];

    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);

    return toppings;
}

var it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();
// {value: Array(3), done: true}
// done: true
// value: (3) ["sprinkles", "whipped cream", undefined]
// __proto__: Object

// Because the first call to .next() passes in some data.
// But that data doesn't get stored anywhere.
// The last call to .next() should have some data since it's being yielded
// into the last call to toppings.push().
