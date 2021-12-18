window.onload = visitor();

function visitor() {
  var counterDigits = []
  for(var i = 0; i < 10; i++){
    counterDigits.concat(`../images/counter-${i}.gif`);
  }
  preloadImages([counterDigits]);

  var visitorNumberArray = Math.floor(Math.random() * 99999).toString().split("");
  var zeros = (visitorNumberArray.length - 6) * -1;

  for(var i = 0; i < zeros; i++){
    visitorNumberArray = ["0"].concat(visitorNumberArray);
  }

  visitorNumberArray.forEach(updateCounterDigits);
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
