var previousButton = document.querySelector('.team-prev-button');
var nextButton = document.querySelector('.team-next-button');
var navigation = document.querySelector('.team-slider-nav');

nextButton.addEventListener('click', function () {
   clearInterval(intervalId);
   if (window.matchMedia("(max-width:576px)").matches) {
   activateNextSlide()
   }
});
previousButton.addEventListener('click', function () {
   clearInterval(intervalId);
   if (window.matchMedia("(max-width:576px)").matches) {
   activatePreviousSlide()
   }
});

var intervalId = setInterval(function () {
  if (window.matchMedia("(max-width:576px)").matches) {
    activateNextSlide()
  }
}, 2500);

function activateNextSlide() {
   var element = document.querySelector('.team-items section:first-child');
   element.parentElement.appendChild(element);

   var current = navigation.querySelector('.active');
   var next = current.nextElementSibling || navigation.querySelector('span');

   current.classList.remove('active');
   next.classList.add('active');
}

function activatePreviousSlide() {
  var element = document.querySelector('.team-items section:last-child');
  element.parentElement.prepend(element);

  var current = navigation.querySelector('.active');
  var previous = current.previousElementSibling || navigation.querySelector('span:last-child');

  current.classList.remove('active');
  previous.classList.add('active');
}
