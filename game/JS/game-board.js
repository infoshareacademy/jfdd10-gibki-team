var mainBoard = document.getElementById('boardWrapper');


    var board = document.createElement('div')
    board.classList.add('grid')
    mainBoard.appendChild(board);

    for(var i = 0; i<5; i +=1){
        var row = document.createElement('div');
        row.classList.add('gridRow')
        
        for (var j = 0; j< 20; j+=1){
            var cell = document.createElement('div')
            cell.classList.add('emptyCell')
            row.appendChild(cell)
        }
       
        board.appendChild(row)

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
   