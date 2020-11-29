// Split code into data (so called model), controller, and views

var data = {
  cats: ["Tom", "Bob", "Red"],
  images: ["tom.jpg", "bob.jpg", "red.png"],
  counts: [0, 0, 0],
  activeCatIndex: null
};

var controller = {
  getImages: function(){
    return data["images"];
  },
  updateCounts: function(catNum){
    data["counts"][catNum] += 1;
  },
  getCats: function(){
    return data["cats"];
  },
  getActiveCatIndex: function() {
    return data["activeCatIndex"];
  },
  updateActiveCatIndex: function(newIndex) {
    data["activeCatIndex"] = newIndex;
  },
  getCounts: function() {
    return data["counts"];
  },
  init: function() {
    viewList.createListCats();
  }
};

var viewList = {
  createListCats: function(){
    var cats = controller.getCats();
    for (var i=0; i<cats.length; i++) {
      var elem = document.createElement('p');
      var catName = cats[i];
      elem.textContent = catName;

      elem.addEventListener('click', (function(cat) {
        return function() {
          var activeCatIndex = controller.getActiveCatIndex();
          if (activeCatIndex != null) {
            cats = controller.getCats()
            viewCatImages.removeCat(cats[activeCatIndex]);
        }
          viewCatImages.createCat(cat);
        };
      })(catName));

      document.body.appendChild(elem);
    };
  },
};

var viewCatImages = {
  createCat: function(catName) {
    var fragment = document.createDocumentFragment();
    var newCat = document.createElement('p');
    var newImg = document.createElement('img');
    var cats = controller.getCats();
    var catNum = cats.indexOf(catName)

    // Adding title to the image
    var counts = controller.getCounts();
    newCat.textContent = catName + ' (# clicks=' + counts[catNum] + ')';
    newCat.id = 'p' + catName;
    fragment.appendChild(newCat);

    // Adding the cat image
    newImg.src = controller.getImages()[catNum];
    newImg.id = catName;
    fragment.appendChild(newImg);

    controller.updateActiveCatIndex(catNum);

    newImg.addEventListener('click', this.incrementCounter.bind(null, catName), false);

    document.body.appendChild(newCat);
    document.body.appendChild(newImg);
  },
  removeCat: function(catName) {
    var catElem = document.getElementById('p' + catName);
    var imgElem = document.getElementById(catName);
    document.body.removeChild(catElem);
    document.body.removeChild(imgElem);
  },
  incrementCounter: function(catName) {
    // cat element must exist
    var elem = document.getElementById('p' + catName);
    var catNum = controller.getCats().indexOf(catName)
    controller.updateCounts(catNum);
    elem.textContent = catName + ' (# clicks=' + controller.getCounts()[catNum] + ')';
    // console.log('click!')
  },

};

controller.init()
