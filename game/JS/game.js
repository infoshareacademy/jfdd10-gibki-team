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
hugo.classList.add('hugoFront');
var startDoors = document.querySelector('.startDoors');
startDoors.appendChild(hugo);
var ladders = document.querySelectorAll('.ladder');
var ladderFloor2XCenter = ladders[0].offsetLeft+ladders[0].offsetWidth;
var ladderFloor1XCenter = ladders[1].offsetLeft+ladders[1].offsetWidth;
var ladderFloor0XCenter = ladders[2].offsetLeft+ladders[2].offsetWidth;

console.log(ladderFloor2XCenter)
console.log(ladderFloor1XCenter)
console.log(ladderFloor0XCenter)
console.log(ladders[0].offsetHeight)
console.log(ladders);

//Startowa pozycja Huga
var hugoRect = hugo.getBoundingClientRect();
console.log(hugoRect);
var hugoYBottomStart = hugoRect.bottom; //404
var hugoXCenterStart = hugoRect.x + hugoRect.width / 2; //381
// var positionX = hugoXCenterStart;
console.log(hugoYBottomStart);
console.log(hugoXCenterStart);

//Ruch Huga
// var positionX = 0;
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

//Ruch Huga - obliczenia
setInterval(function () {
    if (isLeftArrowPressed && rightOffset <= 359 && (bottomOffset === 0 || bottomOffset === 101 || bottomOffset === 202 || bottomOffset === 303)) {
        velocity = 0.1;
        rightOffset = rightOffset + velocity * dTime;
        hugo.style.right = rightOffset + 'px';
    } else {
        if (isRightArrowPressed && rightOffset >= 1 && (bottomOffset === 0 || bottomOffset === 101 || bottomOffset === 202 || bottomOffset === 303)) {
            velocity = 0.1;
            rightOffset = rightOffset - velocity * dTime;
            hugo.style.right = rightOffset + 'px';
        } else {
            if (isUpArrowPressed && bottomOffset >= 0 && bottomOffset <= 302) {
                velocity = 0.1;
                bottomOffset = bottomOffset + velocity * dTime;
                hugo.style.bottom = bottomOffset + 'px';
            } else {
                if (isDownArrowPressed && bottomOffset >= 1 && bottomOffset <= 303) {
                    velocity = 0.1;
                    bottomOffset = bottomOffset - velocity * dTime;
                    hugo.style.bottom = bottomOffset + 'px';
                } else {
                    velocity = 0;
            }
        }
    }
}
console.log(rightOffset);
console.log(bottomOffset);
}, dTime)