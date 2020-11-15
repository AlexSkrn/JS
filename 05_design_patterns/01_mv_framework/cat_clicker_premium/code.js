var cats =  ["Tom", "Bob", "Red"];
var images = ["tom.jpg", "bob.jpg", "red.png"];
var counts = [0, 0, 0];
var activeCatIndex;

function incrementCounter(catName) {
  // cat element must exist
  var elem = document.getElementById('p' + catName);
  var catNum = cats.indexOf(catName)
  counts[catNum] += 1;
  elem.textContent = catName + ' (# clicks=' + counts[catNum] + ')';
  // console.log('click!')
};

function createCat(catName) {
  var fragment = document.createDocumentFragment();
  var newCat = document.createElement('p');
  var newImg = document.createElement('img');
  var catNum = cats.indexOf(catName)

  // Adding title to the image
  newCat.textContent = catName + ' (# clicks=' + counts[catNum] + ')';
  newCat.id = 'p' + catName;
  fragment.appendChild(newCat);

  // Adding the cat image
  newImg.src = images[catNum];
  newImg.id = catName;
  fragment.appendChild(newImg);

  activeCatIndex = catNum;

  newImg.addEventListener('click', incrementCounter.bind(null, catName), false);

  document.body.appendChild(newCat);
  document.body.appendChild(newImg);
};

function removeCat(catName) {
  var catElem = document.getElementById('p' + catName);
  var imgElem = document.getElementById(catName);
  document.body.removeChild(catElem);
  document.body.removeChild(imgElem);
};

// create a list of cats
for (var i=0; i<cats.length; i++) {
  var elem = document.createElement('p');
  var catName = cats[i];
  elem.textContent = catName;

  elem.addEventListener('click', (function(cat) {
    return function() {
      if (activeCatIndex != undefined) {
        removeCat(cats[activeCatIndex]);
    }
      createCat(cat)
    };
  })(catName));

  document.body.appendChild(elem);
};
