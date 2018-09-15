var previousButton = document.querySelector('.team-prev-button');
var nextButton = document.querySelector('.team-next-button');
var navigation = document.querySelector('.team-slider-nav');

nextButton.addEventListener('click', function () {
   clearInterval(intervalId);
   activateNextSlide()
});
previousButton.addEventListener('click', function () {
   clearInterval(intervalId);
   activatePreviousSlide()
});

var intervalId = setInterval(function () {
   activateNextSlide()
}, 2000);

function activateNextSlide() {
   var element = document.querySelector('.team-items div:first-child');
   element.parentElement.appendChild(element);

   var current = navigation.querySelector('.active');
   var next = current.nextElementSibling || navigation.querySelector('span');

   current.classList.remove('active');
   next.classList.add('active');
}

function activatePreviousSlide() {
  var element = document.querySelector('.team-items div:last-child');
  element.parentElement.prepend(element);

  var current = navigation.querySelector('.active');
  var previous = current.previousElementSibling || navigation.querySelector('span:last-child');

  current.classList.remove('active');
  previous.classList.add('active');
}
