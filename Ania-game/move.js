//okreslenie w zmiennej kodu strzalek ruchu
var CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}

var level = document.getElementById('level');

var levels = [];
for(i=0; i < 5; i += 1){
    var floor = document.createElement('div');
    floor.classList.add('floor-' + (i + 1));
    level.appendChild(floor);

    levels.push({
        element: floor,
        bottomPosition: level.offsetTop + floor.offsetTop + floor.clientHeight
    })
}

console.log(levels)

// randomowe tworzenie drabin na planszy
function randomFromRange(min, max) {
    return Math.random() * (max - min) + min
}

// tworzenie drabin
function createLadder(){
    for(i=0; i<levels.length; i+=1){

        var ladder = document.createElement('div')
        ladder.classList.add('ladder');
        ladder.style.marginLeft = randomFromRange(0, 100) + '%';
        levels[i].element.appendChild(ladder);
    }
}

createLadder();

var bottomPosition = level.offsetTop + floor.offsetTop + floor.clientHeight;


// pozycja startowa hugo

var hugo = document.getElementById('hugo');


var hugoLeft = level.clientWidth - hugo.clientWidth;
var hugoTop = level.clientHeight - hugo.clientHeight;


hugo.style.left = hugoLeft + 'px'; //tu dodajemy px do stringa bo wartosc musi byc w pixelach
hugo.style.top = hugoTop + 'px';
hugo.style.bottom = hugoTop + 40 + 'px';


// hugo porusza sie w 2 stanach - on floor i on ladder
var state = 'floor'


function isStateLadder() {
    return state === 'ladder';
}
function isStateFloor() {
    return state === 'floor';
}

// funckje odpowiadajace za ruch hugo wzgl darbin i brzegow planszy
function isOnLeft(ladder) {
    return hugo.offsetLeft + hugo.clientWidth <  ladder.offsetLeft;
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
    ladders.forEach(function(ladder) {
        if (isOnSameLevel(ladder) && !isOnRight(ladder) && !isOnLeft(ladder)) {
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
    return hugo.offsetLeft + hugo.clientWidth < level.clientWidth;
}
function staysOnFloor(ladders) {
    var stays = false;
    ladders.forEach(function(ladder) {
        if (isOnSameLevel(ladder)){
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

    if (e.keyCode === CONTROLS.RIGHT && isAvailableMove(CONTROLS.RIGHT)) {
        hugoLeft += moveSpeed*3.5;
        hugo.style.left = hugoLeft + 'px';
        state = 'floor';
    }
    if (e.keyCode == CONTROLS.LEFT && isAvailableMove(CONTROLS.LEFT)) {
        hugoLeft -= moveSpeed*3.5;
        hugo.style.left = hugoLeft + 'px';
        state = 'floor';
    }

    if (e.keyCode == CONTROLS.DOWN && isAvailableMove(CONTROLS.DOWN)) {
        hugoTop += moveSpeed*1.7;
        hugo.style.top = hugoTop + 'px';
        state = 'ladder';
    }

    if (e.keyCode == CONTROLS.UP && isAvailableMove(CONTROLS.UP)) {
        hugoTop -= moveSpeed*1.7;
        hugo.style.top = hugoTop + 'px';
        state = 'ladder';
    }
}

document.addEventListener('keydown', anim);
