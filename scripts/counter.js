window.onload = visitor();

function visitor() {
  var counterDigits = []
  for(var i = 0; i < 10; i++){
    counterDigits = counterDigits.concat(`../images/counter-${i}.gif`);
  }
  preloadImages(counterDigits);

  var visitorNumberArray = Math.floor(Math.random() * 99999).toString().split("");
  var zeros = (visitorNumberArray.length - 6) * -1;

  for(var i = 0; i < zeros; i++){
    visitorNumberArray = ["0"].concat(visitorNumberArray);
  }

  visitorNumberArray.forEach(updateCounterDigits);
}

function preloadImages() {
  var images = [];
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preloadImages.arguments[i];
  }
}

function updateCounterDigits(value, index, array) {
  document.getElementById(`counterDigit-${index}`).src = `images/counter-${value}.gif`;
}
