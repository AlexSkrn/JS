var cats =  ["Tom", "Bob"];
var images = ["img.jpg", "img.jpg"];
var counts = [0, 0];

function create_cat(cat, image) {
  var fragment = document.createDocumentFragment();
  var newCat = document.createElement('p');
  var newImg = document.createElement('img');

  // Adding title to the image
  newCat.textContent = cat;
  newCat.id = 'p' + cat;
  fragment.appendChild(newCat);

  // Adding the cat image
  newImg.src = image;
  newImg.id = cat;
  fragment.appendChild(newImg);

  document.body.appendChild(newCat);
  document.body.appendChild(newImg);
};

function increment_counter(id, cat_num){
  var elem = document.getElementById('p' + id);
  counts[cat_num] += 1;
  elem.textContent = id + ' (# clicks=' + counts[cat_num] + ')';
  // console.log('click!')
};

// Create the cat images
for (let i=0; i<cats.length; i++) {
  create_cat(cats[i], images[i]);
}

// Add click counters
for (let i=0; i<cats.length; i++) {
  var elem = document.getElementById(cats[i]);
  elem.addEventListener('click', increment_counter.bind(null, elem.id, i), false);
}
