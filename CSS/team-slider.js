//JS

// var previousButton = document.querySelector('.features__previous-button');
// var nextButton = document.querySelector('.features__next-button');
// var navigation = document.querySelector('.features__navigation');

// nextButton.addEventListener('click', function () {
//   clearInterval(intervalId);
//   activateNextSlide()
// });
// previousButton.addEventListener('click', function () {
//   clearInterval(intervalId);
//   activatePreviousSlide()
// });

// var intervalId = setInterval(function () {
//   activateNextSlide()
// }, 2000);

// function activateNextSlide() {
//   var element = document.querySelector('.feature-items section:first-child');
//   element.parentElement.appendChild(element);

//   var current = navigation.querySelector('.active');
//   var next = current.nextElementSibling || navigation.querySelector('span');

//   current.classList.remove('active');
//   next.classList.add('active');
// }

// function activatePreviousSlide() {
//   var element = document.querySelector('.feature-items section:last-child');
//   element.parentElement.prepend(element);

//   var current = navigation.querySelector('.active');
//   var previous = current.previousElementSibling || navigation.querySelector('span:last-child');

//   current.classList.remove('active');
//   previous.classList.add('active');
// }




// HTML //
/* <section id="features" class="features">
    <div class="container">
      <h2>Features</h2>

      <div class="features__navigation">
        <span class="active">1</span>
        <span>2</span>
        <span>3</span>
      </div>

      <div class="feature__carousel">
        <div class="features__previous-button"></div>
        <div class="features__next-button"></div>

        <div class="feature-items">
          <section>
            <h3>Team manager</h3>
            <p>To make your team (well, honestly a pair) great again.</p>
          </section>

          <section>
            <h3>Challenges</h3>
            <p>When there's something strange in the neighbourhood.</p>
          </section>

          <section>
            <h3>Tournaments</h3>
            <p>Because noone likes tracking tournament results and counting to ten.</p>
          </section>
        </div>
      </div>
    </div>
  </section> */




  
//CSS

//   .feature-items section {
//     display: none;
//     background: white;
//     padding: 20px;
//     box-sizing: border-box;
//     width: 100%;
//     margin-bottom: 10px;
//     box-shadow: 0 5px 10px rgba(0,0,0,0.4);
//   }
  
//   .feature-items section:first-child {
//     display: block;
//     opacity: 1;
//     animation: show 3s;
//   }
  
//   @keyframes show {
//     0% {
//       opacity: 0;
//     }
  
//     100% {
//       opacity: 1;
//     }
//   }
  
//   .features__previous-button,
//   .features__next-button {
//     display: inline-block;
//     width: 0;
//     margin: 7px 0 0 10px;
//     border: 10px solid transparent;
//     position: absolute;
//     top: calc(50% - 10px);
//     cursor: pointer;
//     vertical-align: top;
//   }
  
//   .features__next-button {
//     border-left-color: white;
//     right: -30px;
//   }
  
//   .features__previous-button {
//     border-right-color: white;
//     left: -40px;
//   }
  
//   .feature__carousel {
//     position: relative;
//   }
  
//   .features__navigation {
//     text-align: left;
//   }
  
//   .features__navigation span {
//     padding: 10px;
//     margin-bottom: 20px;
//     display: inline-block;
//   }
//   .features__navigation .active {
//     background: white;
//   }
  