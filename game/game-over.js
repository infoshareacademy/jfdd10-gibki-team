// var startTime, endTime;

// function start() {
//   startTime = new Date();
// };

// function end() {
//   endTime = new Date();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;

//   // get seconds 
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }



// var timeToEnd = 60000;

// function countTime() {
//     setInterval(function() {
//         timeToEnd--;
//     }, 1000);
// }


// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

// function startTimer(duration, display) {
//     var timer = duration, seconds;
//     setInterval(function () {
//         seconds = parseInt(timer % 60, 10);

//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var sixtySeconds = 60,
//         display = document.querySelector('#time');
//     startTimer(sixtySeconds, display);
// };




// window.onload = function () {
//     var display = document.querySelector('#time'),
//         timer = new CountDownTimer(5),
//         timeObj = CountDownTimer.parse(5);

//     format(timeObj.minutes, timeObj.seconds);
    
//     timer.onTick(format);
    
//     document.querySelector('button').addEventListener('click', function () {
//         timer.start();
//     });
    
//     function format(minutes, seconds) {
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ':' + seconds;
//     }
// };



// ----------- TEST ----------

document.querySelector('button').addEventListener('click', function () {
    timer.start();
});

var display = document.querySelector('#time');
display.textContent =  seconds + ' seconds';

var seconds;

function timer() {

};