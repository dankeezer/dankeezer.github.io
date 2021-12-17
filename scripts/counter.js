window.onload = visitor();

function visitor() {
  preloadImages([
      "../images/counter-0.gif",
      "../images/counter-1.gif",
      "../images/counter-2.gif",
      "../images/counter-3.gif",
      "../images/counter-4.gif",
      "../images/counter-5.gif",
      "../images/counter-6.gif",
      "../images/counter-7.gif",
      "../images/counter-8.gif",
      "../images/counter-9.gif",
  ]);

  var visitorNumberArray = Math.floor(Math.random() * 999999).toString().split("");
  visitorNumberArray.forEach(updateCounterDigits)
}

function preloadImages(array) {
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.onload = function() {
      var index = list.indexOf(this);
      if (index !== -1) {
        list.splice(index, 1);
      }
    }
    list.push(img);
    img.src = array[i];
  }
}

function updateCounterDigits(value, index, array) {
  document.getElementById(`counterDigit-${index}`).src = `images/counter-${value}.gif`;
}
