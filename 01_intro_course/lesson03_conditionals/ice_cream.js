
function printIceCream (flavor, vessel, toppings) {

if ((flavor === 'vanilla' || flavor === 'chocolate') &&
    (vessel === 'cone' || vessel === 'bowl') &&
    (toppings === 'sprinkles' || toppings === 'peanuts')
   ) {
     var customerOrder = `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`;
     console.log(customerOrder);
     return customerOrder;}
}

// Tests

console.assert(printIceCream('chocolate', 'cone', 'sprinkles') === "I'd like two scoops of chocolate ice cream in a cone with sprinkles.");

console.assert(printIceCream('vanilla', 'cone', 'peanuts') === "I'd like two scoops of vanilla ice cream in a cone with peanuts.");
