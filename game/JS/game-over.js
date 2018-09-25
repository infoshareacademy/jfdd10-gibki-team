var time = 6000;  // <-- ustawienie czasu trwania gry!
var seconds = Math.floor((time/1000));
var timerId;

function timeCounter(id) {
    // zabezpieczenie, żeby timer nie odpalał się kilka razy:
    if (id) {
        return id;
    }
    var intervalId = setInterval(function () {
        time = time - 1000;
        // jeżeli skończy się czas wyskakuje okienko Time is up z wynikiem:
        if (time <= 0) {
            clearInterval(intervalId);
            endGame('Time is up');
        }
        console.log(seconds);
    }, 1000);
    return intervalId;
};

function pauseTime() {
    clearInterval(timerId);
    // TODO wyskakuje okienko z informacją PAUZA:
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
showTime();
timer();

function endGame(reason) {
    // tworzymy wyskakujące okienko na koniec gry:
    var boardWrapper = document.querySelector('#boardWrapper');
    var endWindow = document.createElement('div');
    boardWrapper.appendChild(endWindow);
    endWindow.classList.add('endGame');
    var endMessage = document.createElement('p');
    endWindow.appendChild(endMessage);

    // w przypadku gdy gra kończy się przegraną (skończył się czas):
    endMessage.classList.add('timeIsUp');
    endMessage.innerText = reason;

    // chcemy schować grida z grą:
    document.querySelector('.grid').style.display = 'none';
}

// wyświetlanie czasu:
function showTime() {
    var body = document.querySelector('body');
    var showTime = document.createElement('div');
    body.appendChild(showTime);
    showTime.classList.add('showTime');
    showTime.innerText = 'Game ends in ' + clock + ' seconds';
    // wyświetlanie w ostylowany sposób sekund...
    var clock = document.createElement('span');
    showTime.appendChild(clock);
    clock.innerText = seconds;
    // w zależności ile czasu zostało:
    for (seconds < 20) {
        clock.classList.add('stayFocus');
    }
    for (seconds <=10) {
        clock.classList.add('warning');
    }
    // wyświetlanie pozostałych sekund i kolorowanie w zależności od pozostałego czasu:

    
 


}
