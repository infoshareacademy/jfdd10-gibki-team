createHomeButton = function (container) {
    var buttonHome = document.createElement('button');
    var linkToHome = document.createElement('a');
    linkToHome.innerText = 'Home';
    linkToHome.href = "http://gibki-team.jfdd10.is-academy.pl/";
    buttonHome.appendChild(linkToHome);
    container.appendChild(buttonHome);
}
createRestart_PlayagainButton = function (container, title) {
    var button = document.createElement('button');
    button.innerHTML = title;
    container.appendChild(button);
    button.addEventListener('click', () => window.location.reload())
}

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

var time = 45000;  // <-- FIXME: ustawienie czasu trwania gry w milisekundach!
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
            clearInterval(waterInterval);
            clearInterval(intervalId);
            youLoose();
        }
        // jeżeli utoniesz wyświetlaj okienko z info o wygranej i wynikiem:
        if (hugoDrawns()) {

            clearInterval(waterInterval);
            clearInterval(intervalId);
            youDrown();
        }
        // jeżeli dojdziemy do wyjścia wyświetlaj okienko z info o wygranej i wynikiem:
        if (hugoWins() === true) {
            clearInterval(waterInterval);
            clearInterval(intervalId);
            youWon();
        }
        // TODO: do usunięcia console.log:
        // console.log(time);
        showTime();
    }, 1000);
    return intervalId;
};
// --------/\-------- LICZENIE CZASU --------/\-------- //

// --------\/-------- PAUZOWANIE --------\/-------- //
function pauseOn() {
    clearInterval(timerId);
    // wyświetlaj okienko z informacją o pauzie:
    var message = popUp('timeIsUp', 'Paused. Press Space to play.');
    document.querySelector('.grid').style.visibility = 'hidden';
    // ukrywamy panel boczny zapisany na sztywno w html:
    document.querySelector('.infoPanel').style.visibility = 'hidden';
    // tworzymy i osadzamy przycisk Restart:
    createRestart_PlayagainButton(message, 'Restart')
    // tworzymy i osadzamy przycisk Home:
    createHomeButton(message);
}

function pauseOff() {
    //usuwaj oknienka z informacją o pauzie:
    document.querySelectorAll('.popup').forEach(function (node) {
        node.remove();
        document.querySelector('.grid').style.visibility = 'visible';
        document.querySelector('.infoPanel').style.visibility = 'visible';
    });
}

var pauseCounter = 0;

function pause() {
    window.addEventListener('keydown', function (event) {
        switch (event.code) {
            case "Space":
                if (time < 1 || hugoDrawns() || hugoWins()) {
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
    var message = popUp('timeIsUp', 'Unlucky... Time is up!');
    document.querySelector('.grid').style.visibility = 'hidden';
    document.querySelector('.infoPanel').style.visibility = 'hidden';
    // tworzymy i osadzamy przycisk Play again:
    createRestart_PlayagainButton(message, 'Play again')
    // tworzymy i osadzamy przycisk Home:
    createHomeButton(message);
    return message;
}

function youDrown() {
    var message = popUp('timeIsUp', 'Unlucky... Enjoy the swim!');
    document.querySelector('.grid').style.visibility = 'hidden';
    document.querySelector('.infoPanel').style.visibility = 'hidden';
    // tworzymy i osadzamy przycisk Play again:
    createRestart_PlayagainButton(message, 'Play again')
    // tworzymy i osadzamy przycisk Home:
    createHomeButton(message);
    return message;
}
// --------/\-------- PRZEGRANA --------/\-------- //

// --------\/-------- WYGRANA --------\/-------- //
// w przypadku gdy gra kończy się przegraną (skończył się czas):
function youWon() {
    var message = popUp('youWon', 'Congratulations! You Won');
    document.querySelector('.grid').style.visibility = 'hidden';
    document.querySelector('.infoPanel').style.visibility = 'hidden';
    // tworzymy i osadzamy przycisk Play again:
    createRestart_PlayagainButton(message, 'Play again')
    // tworzymy i osadzamy przycisk Home:
    createHomeButton(message);
    return message;
}
// --------/\-------- WYGRANA --------/\-------- //

// --------\/-------- WYŚWIETLANIE CZASU --------\/-------- //
function showTime() {
    const showTimeSecondsContainer = document.querySelector(".showTimeSecondsContainer");
    var seconds = Math.floor((time / 1000));
    showTimeSecondsContainer.innerText = seconds;
    showTimeSecondsContainer.classList.add('normalText');
    // w zależności ile czasu zostało:
    if (seconds <= 25) {
        showTimeSecondsContainer.classList.add('halfTime');
    }
    if (seconds <= 15) {
        showTimeSecondsContainer.classList.add('stayFocus');
    }
    if (seconds <= 10) {
        showTimeSecondsContainer.classList.add('warning');
    }
}
// --------/\-------- WYŚWIETLANIE CZASU --------/\-------- //

// --------\/-------- ODPALANIE GRY / EKRAN STARTOWY --------\/-------- //
function startGame() {
    // ukrywamy panel boczny zapisany na sztywno w html:
    document.querySelector('.infoPanel').style.display = 'none';
    // tworzymy okienko startowe:
    var message = popUp(
        'normal',
        'Welcome to the ClimbApp game<br><br>To move use: Left / Right / Up / Down arrows<br><br>Press Space to pause game<br><br>Trust in bananas to get Turbo Speed!<br><br>Be careful of rising water...<br>'
    );

    // tworzymy i osadzamy przycisk Play:
    var buttonPlay = document.createElement('button');
    buttonPlay.innerHTML = 'Play';
    message.appendChild(buttonPlay);

    // tworzymy i osadzamy przycisk Home:
    createHomeButton(message);

    // dodajemy event dla Play:
    buttonPlay.addEventListener('click', function () {
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
