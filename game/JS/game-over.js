var time = 6000;
var timerId;

function timeCounter(id) {
    if (id) {
        return id;
    }
    var intervalId = setInterval(function () {
        time = time - 1000;
        if (time <= 0) {
            clearInterval(intervalId);
            endGame('Time is up');
        }
        console.log(time);
    }, 1000);
    return intervalId;
};

function pauseTime() {
    clearInterval(timerId);
}

var pauseCounter = 0;

function timer() {
    window.addEventListener('keydown', function (event) {
        switch (event.code) {
            case "ArrowLeft":
                timerId = timeCounter(timerId);
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
                    pauseTime();
                } else {
                    timerId = timeCounter();
                    pauseCounter = 0;
                }
                break;
        };
    });
};

timer();

function endGame(reason) {
    var boardWrapper = document.querySelector('#boardWrapper');
    var endWindow = document.createElement('div');
    boardWrapper.appendChild(endWindow);
    endWindow.classList.add('endGame');
    var endMessage = document.createElement('p');
    endWindow.appendChild(endMessage);
    endMessage.classList.add('timeIsUp');
    endMessage.innerText = reason;
}
