

function letsPlay() {

    //WYGENEROWANIE PLANSZY

    //główny kontener planszy
    // 
    boardGenerator();
    waterRising();
    
    //wygenrowanie Huga (pozycja przodem) i ustawienie na pozycji startowej
    var hugo = document.createElement('div');
    hugo.classList.add('hugo');
    hugo.classList.add('hugoFront');
    var startDoors = document.querySelector('.startDoors');
    startDoors.appendChild(hugo);

    //Ruch Huga
    var rightOffset = 0;
    var bottomOffset = 0;
    var velocity = 0;
    var isLeftArrowPressed = false;
    var isRightArrowPressed = false;
    var isUpArrowPressed = false;
    var isDownArrowPressed = false;
    var dTime = 10;

    // Listening for user input - move: left, right, up, bottom
    window.addEventListener('keydown', function (event) {
        if (event.code === 'ArrowLeft') {
            isLeftArrowPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'ArrowLeft') {
            isLeftArrowPressed = false;
        }
    })
    window.addEventListener('keydown', function (event) {
        if (event.code === 'ArrowRight') {
            isRightArrowPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'ArrowRight') {
            isRightArrowPressed = false;
        }
    })
    window.addEventListener('keydown', function (event) {
        if (event.code === 'ArrowUp') {
            isUpArrowPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'ArrowUp') {
            isUpArrowPressed = false;
        }
    })
    window.addEventListener('keydown', function (event) {
        if (event.code === 'ArrowDown') {
            isDownArrowPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'ArrowDown') {
            isDownArrowPressed = false;
        }
    })


// Ruch Huga - obliczenia
setInterval(function () {
    hugoDrawns(hugo);
    if (pauseCounter === 1) {
        return;
    }
    if (isLeftArrowPressed && rightOffset <= 474 && (hugovsfloor(hugo))) {
        isTurboOn() ? velocity = 0.1 : velocity = 0.06;
        rightOffset = rightOffset + velocity * dTime;
        hugo.style.right = rightOffset + 'px';
    } else {
        if (isRightArrowPressed && rightOffset >= 1 && (hugovsfloor(hugo))) {
            isTurboOn() ? velocity = 0.1 : velocity = 0.06;
            rightOffset = rightOffset - velocity * dTime;
            hugo.style.right = rightOffset + 'px';
        } else {
            if (isUpArrowPressed && bottomOffset >= 0 && bottomOffset <= 440 && (hugovsladderstop(hugo))) {
                isTurboOn() ? velocity = 0.1 : velocity = 0.06;
                bottomOffset = bottomOffset + velocity * dTime;
                hugo.style.bottom = bottomOffset + 'px';
            } else {
                if (isDownArrowPressed && bottomOffset >= 1 && bottomOffset <= 403 && (hugovsladdersbot(hugo))) {
                    isTurboOn() ? velocity = 0.1 : velocity = 0.06;
                    bottomOffset = bottomOffset - velocity * dTime;
                    hugo.style.bottom = bottomOffset + 'px';
                } else {
                    velocity = 0;
                }
            }
        }
    }
    eatBanana(hugo)
    hugoWins()
}, dTime)

}

