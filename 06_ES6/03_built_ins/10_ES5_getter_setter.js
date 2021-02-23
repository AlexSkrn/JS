// With ES5's getter and setter methods, you need to know before hand the properties
// that are going to be get/set
var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};

obj.age; // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4

obj.weight = 120; // set a new property on the object
obj.weight; // logs just 120

// With ES6 Proxies, we do not need to know the properties beforehand
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4

proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120
