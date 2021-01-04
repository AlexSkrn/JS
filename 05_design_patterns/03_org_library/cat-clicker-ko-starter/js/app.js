// Problem
// - Make all cats show up in the list
// - Make currentCat change  when I click on a cat in the list

var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            nicknames: ['Tabtab', 'Mr. T']

        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            nicknames: ['Tig']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            nicknames: ['Mr. S']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            nicknames: ['Shady']
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            nicknames: ['Nappy']
        }
    ];


var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 4) {
      title = 'Newborn';
    }
    else if (clicks < 13) {
      title = 'Infant';
    }
    else if (clicks < 21) {
      title = 'Teen';
    }
    else {
      title = 'Old';
    }
    return title;
  }, this);

};

var ViewModel = function() {
  // alternative solution, using self var to define the ViewModel
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.showCat = function(clickedCat) {
    // [ PROBLEM: how to make clickedCat object visible? ]
    // Getting index is not necessary
    // newCatIndex = self.catList.indexOf(clickedCat);
    // console.log('Cat index in the catList =' + newCatIndex);

    // self.currentCat(self.catList()[newCatIndex]);  // this works
    // I can pass the clickedCat directly
    self.currentCat(clickedCat);

  };

  this.incrementCounter = function() {
    // self represents the ViewModel
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

}

ko.applyBindings(new ViewModel());
