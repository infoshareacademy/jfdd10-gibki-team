function boardGenerator() {

var mainBoard = document.getElementById('boardWrapper');


    var board = document.createElement('div')
    board.classList.add('grid')
    mainBoard.appendChild(board);

    for(var i = 0; i<5; i +=1){
        var row = document.createElement('div');
        row.classList.add('gridRow')
        
        for (var j = 0; j< 20; j+=1){
            
            var cell = document.createElement('div')
            if (i === 0 && j === 0) {
                cell.classList.add('endDoors')
            }
            if (i === 4 && j === 19) {
                cell.classList.add('startDoors')
            }
            cell.classList.add('emptyCell')
            
            row.appendChild(cell)
        }
       
       if( i !== 0){

           var randomNumber = Math.floor(Math.random()*20)
           row.children[randomNumber].classList.add('ladder')
           randomNumber = Math.floor(Math.random()*20)
           row.children[randomNumber].classList.add('ladder')
           
        }
        
        board.appendChild(row)
    }

    var howManyBananas = 10
        for (var n = 0; n < howManyBananas; n += 1) {
            var freeCells = board.querySelectorAll('.emptyCell:not(.startDoors):not(.endDoors):not(.ladder):not(.banana)');
            freeCells[Math.floor(Math.random() * freeCells.length)].classList.add('banana')
        }
       
    
    function randomFromRange(min, max) {
        return Math.random() * (max - min) + min
    }
    
    // tworzenie drabin
    function createLadder(){
        for(i=0; i<levels.length; i+=1){
    
            var ladder = document.querySelectorAll('')
            ladder.style.marginLeft = randomFromRange(0, 100) + '%';
            levels[i].element.appendChild(ladder);
        }
    }
   
}