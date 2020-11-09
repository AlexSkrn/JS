
// In Chrome, cmd + option + J to open developer tools

alert("alex");
alert('skrn');


for (var i = 0; i < 10; i++) {
  console.log(i);
}

document.getElementsByTagName("h1")[0].style.color = "#ff0000";

document.body.addEventListener('click', function () {
     var myParent = document.getElementsByTagName("h1")[0];
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});
