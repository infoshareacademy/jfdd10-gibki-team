//okreslenie w zmiennej kodu strzalek ruchu
var CONTROLS = {
    LEFT: ArrowLeft,
    UP: ArrowUp,
    RIGHT: ArrowRight,
    DOWN: ArrowDown
}

// var grid = document.getElementById('grid');

// var grids = [];
// for(i=0; i < 5; i += 1){
//     var row = document.createElement('div');
//     row.classList.add('row-' + (i + 1));
//     grid.appendChild(row);

//     grids.push({
//         element: row,
//         bottomPosition: grid.offsetTop + row.offsetTop + row.clientHeight
//     })
// }

// console.log(grids)

// // // randomowe tworzenie drabin na planszy
// // function randomFromRange(min, max) {
// //     return Math.random() * (max - min) + min
// // }

// // tworzenie drabin
// function createLadder(){
//     for(i=0; i<grids.length; i+=1){

//         var ladder = document.createElement('div')
//         ladder.classList.add('ladder');
//         ladder.style.marginLeft = randomFromRange(0, 100) + '%';
//         grids[i].element.appendChild(ladder);
//     }
// }

// createLadder();

// var bottomPosition = grid.offsetTop + row.offsetTop + row.clientHeight;


// pozycja startowa hugo

var hugo = document.getElementById('hugo');


var hugoLeft = grid.clientWidth - hugo.clientWidth;
var hugoTop = grid.clientHeight - hugo.clientHeight;
var row = document.querySelector('.row');
var ladder = document.querySelector('ladder');

hugo.style.left = hugoLeft + 'px'; //tu dodajemy px do stringa bo wartosc musi byc w pixelach
hugo.style.top = hugoTop + 'px';
hugo.style.bottom = hugoTop + 40 + 'px';

// hugo porusza sie w 2 stanach - on row i on ladder
var state = 'row'


function isStateLadder() {
    return state === 'ladder';
}
function isStaterow() {
    return state === 'row';
}

// funckje odpowiadajace za ruch hugo wzgl darbin i brzegow planszy
function isOnLeft(ladder) {
    return hugo.offsetLeft + hugo.clientWidth <  ladder.offsetLeft;
}
function isOnRight(ladder) {
    return hugo.offsetLeft > ladder.offsetLeft + ladder.clientWidth;
}
function isOnSamegrid(ladder) {
    var hugoBottom = hugo.offsetTop + hugo.clientHeight;
    var ladderBottom = ladder.offsetTop + ladder.clientHeight;
    return hugoBottom === ladderBottom;
}
function isInCollisionWithLadders(ladders) {
    var inCollision = false
    ladders.forEach(function(ladder) {
        if (isOnSamegrid(ladder) && !isOnRight(ladder) && !isOnLeft(ladder)) {
            inCollision = true;
        } 
    })
    return inCollision;

}
function isAboveLadders(ladders) {
    var isAbove = false;
    ladders.forEach(function(ladder) {
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
    return hugo.offsetLeft + hugo.clientWidth < grid.clientWidth;
}
function staysOnrow(ladders) {
    var stays = false;
    ladders.forEach(function(ladder) {
        if (isOnSamegrid(ladder)){
            stays = true;
        }
    });
    return stays;
}

// okreslenie ruchow Hugo gora, dol, prawo, lewo wzgl row i drabin
function availableMoves() {
    var moves = [];
    var ladders = document.querySelectorAll('.ladder'); 

    if (isStaterow()) {
        console.log('row');
        if (canMoveLeft()) {
            moves.push(CONTROLS.LEFT);
            // L
        }
        if (canMoveRight()) {
            moves.push(CONTROLS.RIGHT);
            // R
        }
        if (isAboveLadders(ladders)) {
            moves.push(CONTROLS.DOWN);
            // D
        }
        if (isInCollisionWithLadders(ladders)) {
            moves.push(CONTROLS.UP);
            // U
        }
    }
    if (isStateLadder()) {
        console.log('ladder');
        if (!staysOnrow(ladders)) {
            moves.push(CONTROLS.UP);
            moves.push(CONTROLS.DOWN);
            // U D
        } 
        if (staysOnrow(ladders) && !isAboveLadders(ladders)) {
            moves.push(CONTROLS.UP);
            moves.push(CONTROLS.LEFT);
            moves.push(CONTROLS.RIGHT);
            // U R L 
        }
        if (staysOnrow(ladders) && isAboveLadders(ladders)) {
            moves.push(CONTROLS.DOWN);
            moves.push(CONTROLS.LEFT);
            moves.push(CONTROLS.RIGHT);
            // D L R
        }
    }
    return moves;
}

// poruszanie hugo
function anim(e) {
    var moveSpeed = 1;
    var avMoves = availableMoves();
    function isAvailableMove(move){ 
        // return true;
        return avMoves.find(function(m) {
            return m === move;
        })
    }
    console.log(avMoves);

    if (evenet.code === CONTROLS.RIGHT && isAvailableMove(CONTROLS.RIGHT)) {
        hugoLeft += moveSpeed;
        hugo.style.left = hugoLeft + 'px';
        state = 'row';
    }
    if (evenet.code == CONTROLS.LEFT && isAvailableMove(CONTROLS.LEFT)) {
        hugoLeft -= moveSpeed;
        hugo.style.left = hugoLeft + 'px';
        state = 'row';
    }

    if (evenet.code == CONTROLS.DOWN && isAvailableMove(CONTROLS.DOWN)) {
        hugoTop += moveSpeed;
        hugo.style.top = hugoTop + 'px';
        state = 'ladder';
    }

    if (evenet.code == CONTROLS.UP && isAvailableMove(CONTROLS.UP)) {
        hugoTop -= moveSpeed;
        hugo.style.top = hugoTop + 'px';
        state = 'ladder';
    }
}

document.addEventListener('keydown', anim);
