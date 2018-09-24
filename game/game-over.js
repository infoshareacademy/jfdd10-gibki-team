var time = 6000;
var timerId;

function activateTimer() {
    var intervalId = setInterval(function () {
        time = time - 1000;
        if (time <= 0) {
            clearInterval(intervalId);
        }
        console.log(time);
    }, 1000);
    return intervalId;
};

function pauseTimer() {
    var remainingTime = remainingTime + time;
    clearInterval(timerId);
}

var pauseCounter = 0;

function timer() {
    window.addEventListener('keydown', function (event) {
        switch (event.code) {
            case "ArrowLeft":
                timerId = activateTimer();
                break;
            case "ArrowRight":

                break;
            case "ArrowUp":

                break;
            case "ArrowDown":

                break;
            case "Space":
                pauseCounter += 1;
                if (pauseCounter % 2 !== 0) {
                    pauseTimer();
                } else {
                    timerId = activateTimer();
                    pauseCounter = 0;
                }
                break;
        };
    });
};

timer();










// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
