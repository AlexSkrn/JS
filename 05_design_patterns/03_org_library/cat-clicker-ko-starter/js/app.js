var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.nicknames = ko.observableArray(
    ['Tabtab', 'Mr. T']);

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

  this.currentCat = ko.observable(new Cat());

  // this.incrementCounter = function() {
  //   // this represents currentCat's binding context=scope
  //   this.clickCount(this.clickCount() + 1);
  // };

  this.incrementCounter = function() {
    // self represents the ViewModel
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

}

ko.applyBindings(new ViewModel());
