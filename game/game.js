//WYGENEROWANIE PLANSZY

//główny kontener planszy
var boardContainer = document.querySelector('#boardWrapper');

//przykładowa plansza: _-empty cell,s-startDoors,e-endDoors,l-drabina,d-diamond 
var boardData = [
    '_e__d___d_',
    '_d____l_d_',
    'd__l____d_',
    '_d____l__s',//hugo startuje z pozycji s
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
        if (rowData[i] === 'd') {
            cell.classList.add('diamond');
        }
        row.appendChild(cell); //przypięcie pojedynczej komórki (cell) do wiersza (row) - cała pętla tworzy pojedynczy wiersz
    }
}

//wygenrowanie Huga (pozycja przodem) i ustawienie na pozycji startowej
var hugo = document.createElement('div');
hugo.classList.add('hugoFront');
var startDoors = document.querySelector('.startDoors');
startDoors.appendChild(hugo);

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
var velocity = 0;
var isLeftArrowPressed = false;
var isUpArrowPressed = false;
var isRightArrowPressed = false;
var dTime = 16;

// Listening for user input
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

//Ruch Huga - obliczenia
setInterval(function () {
    if (isLeftArrowPressed && rightOffset <= 360) {
        velocity = 0.05;
        rightOffset = rightOffset + velocity * dTime;
        hugo.style.right = rightOffset + 'px';
    } else {
        if (isRightArrowPressed && rightOffset >= 0) {
            velocity = 0.05;
            rightOffset = rightOffset - velocity * dTime;
            hugo.style.right = rightOffset + 'px';
        } else {
            velocity = 0;
        }
    }
}, dTime)