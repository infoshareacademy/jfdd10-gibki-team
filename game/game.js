//główny kontener planszy
var boardContainer = document.querySelector('#board-wrapper');

//cztery poziomy planszy, poziom floor-0 - najniższy
var floor3 = document.querySelector('.floor-3');
var floor2 = document.querySelector('.floor-2');
var floor1 = document.querySelector('.floor-1');
var floor0 = document.querySelector('.floor-0');

//drzwi wejściowe (punkt startowy - poziom floor-1) i drzwi wyjściowe (punkt końcowy - poziom floor-3)
var startDoors = document.querySelector('.start-doors');
var endDoors = document.querySelector('.end-doors');

//podział poziomów na części
var floorDivision = 10; //każdy poziom dzielimy na tyle mniejszych

//przykładowa plansza: _-empty cell,s-startDoors,e-endDoors,l-drabina,d-diamond 
var boardData = [
    '_e__d___d_',
    '_d____l_d_',
    'd__l____d_',
    '_d____l__s',
]

var grid = document.createElement('div');
grid.classList.add('grid');

appContainer.appendChild(grid);

for (var j = 0; j < boardData.length; j += 1) {
    var row = document.createElement('div');
    row.classList.add('gridRow');

    grid.appendChild(row);

    var rowData = boardData[j];
    var size = rowData.length;

    for (var i = 0; i < size; i += 1) {
        var cell = document.createElement('div');
        cell.classList.add('gridCell');
        if (rowData[i] === '#') {
            cell.classList.add('wall');
        }
        if (rowData[i] === 'c') {
            cell.classList.add('pacman');
        }
        row.appendChild(cell);
    }
}