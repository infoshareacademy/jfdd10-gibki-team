// TODO: to na sam początek wszystkiego:
var intervalsManager = (function () {
    var intervalIds = [];
    return {
        addInterval: function (fun, time) {
            var id = setInterval(fun, time)
            intervalIds.push(id);
            return id;
        },
        clearAllIntervals: function () {
            intervalIds.forEach(function (intervalId) {
                clearInterval(intervalId)
            })
        }
    }
})()

// TODO: to na sam koniec:
intervalsManager.clearAllIntervals()

var time = 30000;  // <-- FIXME: ustawienie czasu trwania gry w milisekundach!
var timerId;

// --------\/-------- LICZENIE CZASU --------\/-------- //
function timeCounter(id) {
    // zabezpieczenie, żeby pause nie odpalał się kilka razy:
    if (id) {
        return id;
    }
    var intervalId = intervalsManager.addInterval(function () {
        time = time - 1000;
        // jeżeli skończy się czas wyświetlaj okienko info o przegranej:
        if (time <= 0) {
            clearInterval(intervalId);
            youLoose();
        }
        // jeżeli dojdziemy do wyjścia wyświetlaj okienko z info o wygranej i wynikiem:
        if (hugoWins() === true) {
            clearInterval(intervalId);
            youWon();
        }
        // TODO: do usunięcia console.log:
        console.log(time);
        showTime();
    }, 1000);
    return intervalId;
};
// --------/\-------- LICZENIE CZASU --------/\-------- //

// --------\/-------- PAUZOWANIE --------\/-------- //
function pauseOn() {
    clearInterval(timerId);
    // wyświetlaj okienko z informacją o pauzie:
    popUp('timeIsUp', 'Paused. Press Space to play.');
    document.querySelector('.grid').style.visibility = 'hidden';
}

function pauseOff() {
    //usuwaj oknienka z informacją o pauzie:
    document.querySelectorAll('.popup').forEach(function (node) {
        node.remove();
        document.querySelector('.grid').style.visibility = 'visible';
    });
}

var pauseCounter = 0;

function pause() {
    window.addEventListener('keydown', function (event) {
        switch (event.code) {
            case "Space":
                if (time < 1) {
                    return;
                }
                pauseCounter += 1;
                if (pauseCounter % 2 !== 0) {
                    pauseOn();
                } else {
                    timerId = timeCounter();
                    pauseOff();
                    pauseCounter = 0;
                }
                break;
        };
    });
};
pause();
// --------/\-------- PAUZOWANIE --------/\-------- //

// --------\/-------- OKNO ZAKRYWAJĄCE GRĘ --------\/-------- //
function popUp(type, text) {
    // sprawdzamy czy okienko już się nie wyświetla i jak się wyświetla to je usuwamy
    // zanim wyświetlimy następne (zabezpieczenie przed utworzeniem dwóch okienek):
    document.querySelectorAll('.popup').forEach(function (node) {
        node.remove();
    });
    // tworzymy wyskakujące okienko:
    var boardWrapper = document.querySelector('#boardWrapper');
    var popupWindow = document.createElement('div');
    boardWrapper.appendChild(popupWindow);
    popupWindow.classList.add('popup');
    var message = document.createElement('p');
    popupWindow.appendChild(message);
    message.classList.add(type);
    message.innerHTML = text;

    return message;
}
// --------/\-------- OKNO ZAKRYWAJĄCE GRĘ --------/\-------- //

// --------\/-------- PRZEGRANA --------\/-------- //
// w przypadku gdy gra kończy się przegraną (skończył się czas):
function youLoose() {
    var message = popUp('timeIsUp', 'You loose - time is up!');

    return message;
}
// --------/\-------- PRZEGRANA --------/\-------- //

// --------\/-------- WYGRANA --------\/-------- //
// w przypadku gdy gra kończy się przegraną (skończył się czas):
function youWon() {
    var message = popUp('youWon', 'Congratulations! You Won');

    return message;
}
// --------/\-------- WYGRANA --------/\-------- //

// --------\/-------- WYŚWIETLANIE CZASU --------\/-------- //
function showTime() {
    // czyszczenie starej informacji po zmianie czasu:
    document.querySelectorAll('.showTime').forEach(function (node) {
        node.remove();
    });
    // utworzenie <div class="showTime"></div>:
    var infoPanel = document.querySelector('.infoPanel');
    var showTime = document.createElement('div');
    infoPanel.appendChild(showTime);
    showTime.classList.add('showTime');
    // utworzenie <span></span> i ostylowanie sekund...
    var clockStyler = document.createElement('span');
    // showTime.appendChild(clockStyler);
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

// --------\/-------- ODPALANIE GRY / EKRAN STARTOWY --------\/-------- //
function startGame() {
    // ukrywamy panel boczny zapisany na sztywno w html:
    document.querySelector('.infoPanel').style.display = 'none';
    // tworzymy okienko startowe:
    var message = popUp(
        'normal',
        'Welcome in ClimbApp game!<br><br>To move use: LeftKey, RightKey, UpKey, DownKey.<br><br>To pause game press Space.<br>'
    );

    // tworzymy i osadzamy przycisk:
    var button = document.createElement('button');
    button.innerHTML = 'Play';
    message.appendChild(button);

    // dodajemy event:
    button.addEventListener('click', function () {
        document.querySelector('.infoPanel').style.display = 'flex';
        // odpalenie gry:
        letsPlay();
        document.querySelectorAll('.popup').forEach(function (node) {
            node.remove();
        });
        timerId = timeCounter(timerId);
    });
}
startGame();
// --------/\-------- ODPALANIE GRY / EKRAN STARTOWY --------/\-------- //
