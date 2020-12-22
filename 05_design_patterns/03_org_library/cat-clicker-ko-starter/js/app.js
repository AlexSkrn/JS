var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.nicknames = ko.observableArray(
    ['Tabtab', 'Mr. T']);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.level = ko.computed(function() {
    if (this.clickCount() >= 3 && this.clickCount() < 13) {
      return 'Infant';
    }
    else if (this.clickCount() >= 13 && this.clickCount() < 20) {
      return 'Teen';
    }
    else if (this.clickCount() >= 20) {
      return 'Old';
    }
    else {
      return 'Newborn';
    }
  }, this);
}

ko.applyBindings(new ViewModel());
