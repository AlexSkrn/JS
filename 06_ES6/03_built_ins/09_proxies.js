// Proxy constructor - new Proxy();
// It takes two items:
// 1) the object that it will be the proxy for
// 2) the handler, i.e. an object containing the list of methods it will handle
//    for the proxied object

// the handler object is made up of 1 of 13 different "traps"
// a trap is a function that will intercept calls to properties let you run code
// if a trap is not defined, the default behavior is sent to the target object

var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'

// The get trap is used to "intercept" calls to properties
// the handler object has a get method (called a "trap" since it's being used in a Proxy)
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status;
// logs out the richard object (not the agent object!) and
// the name of the property being accessed (`status`)
// When the code agent.status; is run on the last line, because the get trap exists,
// it "intercepts" the call to get the status property and runs the get trap function.
// This will log out the target object of the proxy (the richard object) and then logs out
// the name of the property being requested (the status property).

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];  // will access the property on the target object and will return it
    }
};
const agent = new Proxy(richard, handler);
agent.status;
// (1)logs the richard object,
// (2)logs the property being accessed,
// (3)returns the text in richard.status


const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
agent.status;
// returns the text `He's following many leads, so you should offer a contract as soon as possible!`

// The set trap will change a property
const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay
