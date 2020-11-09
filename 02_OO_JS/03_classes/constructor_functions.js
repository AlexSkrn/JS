function SoftwareDeveloper(name) {
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}

// Use 'new' to invoke/call the constructor function to instantiate/create a new object
let developer = new SoftwareDeveloper('Alex');

console.log(developer);

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();

console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }


function Developer(name) {
  this.name = name;
}

let dev = new Developer('Veronika');

typeof dev
// "object"

dev instanceof Developer;
// true


var dog = {
  bark: function () {
    console.log('Woof!');
  },
  barkTwice: function () {
    bark();
    bark();
  }
};
