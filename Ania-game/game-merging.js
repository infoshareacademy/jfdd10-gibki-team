function letsPlay() {

    //WYGENEROWANIE PLANSZY

    //główny kontener planszy
    var boardContainer = document.querySelector('#boardWrapper');

    //przykładowa plansza: _-empty cell,s-startDoors,e-endDoors,l-drabina,b-banana 
    var boardData = [
        'e___b___b_____b_____',
        '_b____l_b________l__',
        'b___l_________b_____',
        'b_l_____b________l__',
        '_b____l___b___l____s',//hugo startuje z pozycji s
    ]

    //wygenerowanie grida na elementy plaszy, nadanie mu klasy .grid i przypięcie do boardContainera
    var grid = document.createElement('div');
    grid.classList.add('grid');
    boardContainer.appendChild(grid);

    //wygenerowanie i przypięcie do grida wierszy wg schematu planszy
    for (var j = 0; j < boardData.length; j += 1) {
        var row = document.createElement('div');
        row.classList.add('gridRow');

        grid.appendChild(row); //przypięcie wygenerowanego wiersza z pętli poniżej do grida

        var rowData = boardData[j];
        var size = rowData.length;

        //stworzenie komórek (cells) w obrębie wiersza (row) wg schematu planszy
        for (var i = 0; i < size; i += 1) {
            var cell = document.createElement('div');
            cell.classList.add('emptyCell'); //nadanie komórce (cell) klasy domyślnej .emptyCell
            if (rowData[i] === 's') {
                cell.classList.add('startDoors');
            }
            if (rowData[i] === 'e') {
                cell.classList.add('endDoors');
            }
            if (rowData[i] === 'l') {
                cell.classList.add('ladder');
            }
            if (rowData[i] === 'b') {
                cell.classList.add('banana');
            }
            row.appendChild(cell); //przypięcie pojedynczej komórki (cell) do wiersza (row) - cała pętla tworzy pojedynczy wiersz
        }
    }

    //wygenrowanie Huga (pozycja przodem) i ustawienie na pozycji startowej
    var hugo = document.createElement('div');
    hugo.classList.add('hugo');
    hugo.classList.add('hugoFront');
    var startDoors = document.querySelector('.startDoors');
    startDoors.appendChild(hugo);

    //Ruch Huga
    // var rightOffset = 0;
    // var bottomOffset = 0;
    // var velocity = 0;
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

    var CONTROLS = {
        LEFT: isLeftArrowPressed = true,
        UP: iUpArrowPressed = true,
        RIGHT: isRightArrowPressed = true,
        DOWN: isDownArrowPressed = true
    }

    var ladder = document.querySelectorAll('.ladder');
    var hugoLeft = grid.clientWidth - hugo.clientWidth;
    var hugoTop = grid.clientHeight - hugo.clientHeight;
    var floor = row;
    var level = grid;

    hugo.style.left = hugoLeft + 'px'; //tu dodajemy px do stringa bo wartosc musi byc w pixelach
    hugo.style.top = hugoTop + 'px';
    hugo.style.bottom = hugoTop + hugo.clientHeight + 'px';


    var state = 'floor'


    function isStateLadder() {
        return state === 'ladder';
    }
    function isStateFloor() {
        return state === 'floor';
    }

    // funckje odpowiadajace za ruch hugo wzgl darbin i brzegow planszy
    function isOnLeft(ladder) {
        return hugo.offsetLeft + hugo.clientWidth < ladder.offsetLeft;
    }
    function isOnRight(ladder) {
        return hugo.offsetLeft > ladder.offsetLeft + ladder.clientWidth;
    }
    function isOnSameLevel(ladder) {
        var hugoBottom = hugo.offsetTop + hugo.clientHeight;
        var ladderBottom = ladder.offsetTop + ladder.clientHeight;
        return hugoBottom === ladderBottom;
    }
    function isInCollisionWithLadders(ladders) {
        var inCollision = false
        ladders.forEach(function (ladder) {
            if (isOnSameLevel(ladder) && !isOnRight(ladder) && !isOnLeft(ladder)) {
                inCollision = true;
            }
        })
        return inCollision;

    }
    function isAboveLadders(ladders) {
        var isAbove = false;
        ladders.forEach(function (ladder) {
            var hugoBottom = hugo.offsetTop + hugo.clientHeight;
            var ladderTop = ladder.offsetTop; // ladder.offsetTop + ladder.clientHeight;
            if (hugoBottom === ladderTop) {
                isAbove = true;
            }
        })
        return isAbove;
        // stoi nad drabina
    }

    // kiedy hugo moze sie poruszac
    function canMoveLeft() {
        return hugo.offsetLeft > 0;
    }
    function canMoveRight() {
        return hugo.offsetLeft + hugo.clientWidth < level.clientWidth;
    }
    function staysOnFloor(ladders) {
        var stays = false;
        ladders.forEach(function (ladder) {
            if (isOnSameLevel(ladder)) {
                stays = true;
            }
        });
        return stays;
    }

    // okreslenie ruchow Hugo gora, dol, prawo, lewo wzgl floor i drabin
    function availableMoves() {
        var moves = [];
        var ladders = document.querySelectorAll('.ladder');

        if (isStateFloor()) {
            console.log('floor');
            if (canMoveLeft()) {
                moves.push(CONTROLS.LEFT);
                // L
            }
            if (canMoveRight()) {
                moves.push(CONTROLS.RIGHT);
                // R
            }
            // if (isAboveLadders(ladders)) {
            //     // moves.push(CONTROLS.DOWN);
            //     // D
            // }
            if (isInCollisionWithLadders(ladders)) {
                moves.push(CONTROLS.UP);
                // U
            }
        }
        if (isStateLadder()) {
            console.log('ladder');
            if (!staysOnFloor(ladders)) {
                moves.push(CONTROLS.UP);
                moves.push(CONTROLS.DOWN);
                // U D
            }
            if (staysOnFloor(ladders) && !isAboveLadders(ladders)) {
                moves.push(CONTROLS.UP);
                moves.push(CONTROLS.LEFT);
                moves.push(CONTROLS.RIGHT);
                // U R L 
            }
            if (staysOnFloor(ladders) && isAboveLadders(ladders)) {
                // moves.push(CONTROLS.DOWN);
                moves.push(CONTROLS.LEFT);
                moves.push(CONTROLS.RIGHT);
                // D L R
            }
        }
        return moves;
    }


    // Ruch Huga - obliczenia
    setInterval(function () {
        var moveSpeed = 1;
        var avMoves = availableMoves();
        function isAvailableMove(move) {
            // return true;
            return avMoves.find(function (m) {
                return m === move;
            })


            if (isLeftArrowPressed && isAvailableMove(CONTROLS.LEFT)) {
                hugoLeft -= moveSpeed * 3.5;
                hugo.style.left = hugoLeft + 'px';
                state = 'floor';
            } else {
                if (isRightArrowPressed && isAvailableMove(CONTROLS.RIGHT)) {
                    hugoLeft += moveSpeed * 3.5;
                    hugo.style.left = hugoLeft + 'px';
                    state = 'floor';
                } else {
                    if (isUpArrowPressed && isAvailableMove(CONTROLS.UP)) {
                        hugoTop -= moveSpeed * 1.7;
                        hugo.style.top = hugoTop + 'px';
                        state = 'ladder';
                    } else {
                        if (isDownArrowPressed && isAvailableMove(CONTROLS.DOWN)) {
                            hugoTop += moveSpeed * 1.7;
                            hugo.style.top = hugoTop + 'px';
                            state = 'ladder';
                        } else {
                            velocity = 0;
                        }
                    }
                }
            }
        }
            eatBanana(hugo)
    }, dTime)

}

