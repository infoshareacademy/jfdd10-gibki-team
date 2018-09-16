//WYGENEROWANIE PLANSZY

//główny kontener planszy
var boardContainer = document.querySelector('#board-wrapper');

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
    row.style.borderBottom = '1px solid black'; //hack na nakładanie się borderów

    grid.appendChild(row); //przypięcie wygenerowanego wiersza do grida

    var rowData = boardData[j];
    var size = rowData.length;

    //stworzenie komórek (cells) w obrębie wiersza (row) wg schematu planszy
    for (var i = 0; i < size; i += 1) {
        var cell = document.createElement('div');
        cell.classList.add('emptyCell'); //nadanie komórce (cell) klasy domyślnej .emptyCell
        if (rowData[i] === 's') {
            cell.classList.add('start-doors');
        }
        if (rowData[i] === 'e') {
            cell.classList.add('end-doors');
        }
        if (rowData[i] === 'l') {
            cell.classList.add('ladder');
        }
        if (rowData[i] === 'd') {
            cell.classList.add('diamond');
        }
        row.appendChild(cell); //przypięcie pojedynczej komórki (cell) do wiersza (row)
    }
}

//wygenrowanie Huga i ustawienie na pozycji startowej
var hugo = document.createElement('div');
hugo.classList.add('hugoFront');
