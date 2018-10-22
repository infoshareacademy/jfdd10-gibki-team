var dscrpreviousButton = document.querySelector('.dscr-prev-button');
var dscrnextButton = document.querySelector('.dscr-next-button');
var dscrnavigation = document.querySelector('.dscr-slider-nav');

dscrnextButton.addEventListener('click', function () {
   clearInterval(dscrintervalId);
   if (window.matchMedia("(max-width:992px)").matches) {
   dscractivateNextSlide()
   }
});
dscrpreviousButton.addEventListener('click', function () {
   clearInterval(dscrintervalId);
   if (window.matchMedia("(max-width:992px)").matches) {
   dscractivatePreviousSlide()
   }
});

var dscrintervalId = setInterval(function () {
  if (window.matchMedia("(max-width:992px)").matches) {
    dscractivateNextSlide()
  }
}, 2500);

function dscractivateNextSlide() {
    var element = document.querySelector('.dscr-items section:first-child');
   element.parentElement.appendChild(element);

   var current = dscrnavigation.querySelector('.dscractive');
   var next = current.nextElementSibling || dscrnavigation.querySelector('span');

   current.classList.remove('dscractive');
   next.classList.add('dscractive');
}

function dscractivatePreviousSlide() {
  var element = document.querySelector('.dscr-items section:last-child');
  element.parentElement.prepend(element);

  var current = dscrnavigation.querySelector('.dscractive');
  var previous = current.previousElementSibling || dscrnavigation.querySelector('span:last-child');

  current.classList.remove('dscractive');
  previous.classList.add('dscractive');
}
