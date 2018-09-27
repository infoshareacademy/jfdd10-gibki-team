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

    function hugoOnLadderUp(hero) {
    var ladders = document.querySelectorAll('.ladder'); //nodeList
    var heroPositionY = hero.getBoundingClientRect().bottom;
    var heroPositionX = hero.getBoundingClientRect().x + hero.getBoundingClientRect().width/2;    
        for (var i = 0 ; i < ladders.length ; i++) {
            if ((Math.abs(heroPositionX - ladders[i].getBoundingClientRect().x - ladders[i].getBoundingClientRect().width/2) < 10) && (heroPositionY <= ladders[i].getBoundingClientRect().bottom) && (heroPositionY > ladders[i].getBoundingClientRect().top)) {
                return true;    
            }
        }
    }
    function hugoOnLadderDown(hero) {
        var ladders = document.querySelectorAll('.ladder'); //nodeList
        var heroPositionY = hero.getBoundingClientRect().bottom;
        var heroPositionX = hero.getBoundingClientRect().x + hero.getBoundingClientRect().width/2;    
            for (var i = 0 ; i < ladders.length ; i++) {
                if ((Math.abs(heroPositionX - ladders[i].getBoundingClientRect().x - ladders[i].getBoundingClientRect().width/2) < 10) && (heroPositionY < ladders[i].getBoundingClientRect().bottom) && (heroPositionY >= ladders[i].getBoundingClientRect().top)) {
                    return true;    
                }
            }
        }
    // Ruch Huga - obliczenia
    setInterval(function () {
        if (isLeftArrowPressed && rightOffset <= 474 && (bottomOffset === 0 || bottomOffset === 100 || bottomOffset === 200 || bottomOffset === 300 || bottomOffset === 400)) {
            velocity = 0.1;
            rightOffset = rightOffset + velocity * dTime;
            hugo.style.right = rightOffset + 'px';
        } else {
            if (isRightArrowPressed && rightOffset >= 1 && (bottomOffset === 0 || bottomOffset === 100 || bottomOffset === 200 || bottomOffset === 300 || bottomOffset === 400)) {
                velocity = 0.1;
                rightOffset = rightOffset - velocity * dTime;
                hugo.style.right = rightOffset + 'px';
            } else {
                if (isUpArrowPressed && bottomOffset >= 0 && bottomOffset <= 440 && hugoOnLadderUp(hugo)) {
                    velocity = 0.1;
                    bottomOffset = bottomOffset + velocity * dTime;
                    hugo.style.bottom = bottomOffset + 'px';
                } else {
                    if (isDownArrowPressed && bottomOffset >= 1 && bottomOffset <= 403 && hugoOnLadderDown(hugo)) {
                        velocity = 0.1;
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
