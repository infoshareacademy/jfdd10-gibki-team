var time = 32000;  // <-- ustawienie czasu trwania gry w milisekundach!
var timerId;

// --------\/-------- LICZENIE CZASU --------\/-------- //
function timeCounter(id) {
    // zabezpieczenie, żeby timer nie odpalał się kilka razy:
    if (id) {
        return id;
    }
    var intervalId = setInterval(function () {
        time = time - 1000;
        // jeżeli skończy się czas wyświetlaj okienko z wynikiem:
        if (time <= 0) {
            clearInterval(intervalId);
            endGame('Time is up');
        }
        console.log(time);
        showTime();
    }, 1000);
    return intervalId;
};
// --------/\-------- LICZENIE CZASU --------/\-------- //

// --------\/-------- PAUZOWANIE --------\/-------- //
function pauseTime() {
    clearInterval(timerId);
    // wyśietlaj okienko z informacją o pauzie:
    endGame('Paused. Press <space> to play.');
}

function unPause() {
    //usuwaj oknienka z informacją o pauzie:
    document.querySelectorAll('.endGame').forEach(function (node) {
        node.remove();
    });
}

var pauseCounter = 0;
// --------/\-------- PAUZOWANIE --------/\-------- //

// --------\/-------- AKCJE DLA KLAWISZY --------\/-------- //
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
                    unPause();
                    pauseCounter = 0;
                }
                break;
        };
    });
};
timer();
// --------/\-------- AKCJE DLA KLAWISZY --------/\-------- //

// --------\/-------- OKNO ZAKRYWAJĄCE GRĘ --------\/-------- //
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
    // document.querySelector('.grid').style.display = 'none';           // <------ DO ODKOMENTOWANIA gdy używamy game.js
}
// --------/\-------- OKNO ZAKRYWAJĄCE GRĘ --------/\-------- //

// --------\/-------- WYŚWIETLANIE CZASU --------\/-------- //
function showTime() {
    // czyszczenie starej informacji po zmianie czasu:
    document.querySelectorAll('.showTime').forEach(function (node) {
        node.remove();
    });
    // utworzenie <div class="showTime"></div>:
    var body = document.querySelector('body');
    var showTime = document.createElement('div');
    body.appendChild(showTime);
    showTime.classList.add('showTime');
    // utworzenie <span></span> i ostylowanie sekund...
    var clockStyler = document.createElement('span');
    showTime.appendChild(clockStyler);
    var seconds = Math.floor((time / 1000));
    clockStyler.innerText = seconds;
    clockStyler.classList.add('normal');
    // w zależności ile czasu zostało:
    if (seconds <= 30) {
        clockStyler.classList.add('halfTime');
    }
    if (seconds <= 20) {
        clockStyler.classList.add('stayFocus');
    }
    if (seconds <= 10) {
        clockStyler.classList.add('warning');
    }
    // wyświetlanie pozostałych sekund i kolorowanie w zależności od pozostałego czasu:
    var prefix = document.createTextNode('Game ends in ');
    var suffix = document.createTextNode(' seconds');

    showTime.appendChild(prefix);
    showTime.appendChild(clockStyler);
    showTime.appendChild(suffix);
}
// --------/\-------- WYŚWIETLANIE CZASU --------/\-------- //


// --------\/-------- ODPALANIE GRY --------\/-------- //
function startGame () {
    
}
// --------/\-------- ODPALANIE GRY --------/\-------- //


// --------\/-------- WYŁĄCZANIE GRY --------\/-------- //

// --------/\-------- WYŁĄCZANIE GRY --------/\-------- //