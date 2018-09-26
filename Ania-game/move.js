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

function randomFromRange(min, max) {
    return Math.random() * (max - min) + min
}

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




var hugo = document.getElementById('hugo');


var hugoLeft = level.clientWidth - hugo.clientWidth;
var hugoTop = level.clientHeight - hugo.clientHeight;


hugo.style.left = hugoLeft + 'px'; //tu dodajemy px do stringa bo wartosc musi byc w pixelach
hugo.style.top = hugoTop + 'px';
hugo.style.bottom = hugoTop + 40 + 'px';

function anim(e) {
    var moveFactor = 1;
    var isOnLadder = isOnLadderAnyLadder();
    if (e.keyCode === CONTROLS.RIGHT && !isOnLadder) {
        hugoLeft += moveFactor;
        if (hugoLeft > level.clientWidth - hugo.clientWidth) {
            hugoLeft = level.clientWidth - hugo.clientWidth;
        }
        hugo.style.left = hugoLeft + 'px';
    }
    if (e.keyCode == CONTROLS.LEFT && !isOnLadder) {
        hugoLeft -= moveFactor;
        if (hugoLeft < 0) {
            hugoLeft = 0;
        }
        hugo.style.left = hugoLeft + 'px';
    }

    if (e.keyCode == CONTROLS.DOWN && isOnLadder) {
        hugoTop += moveFactor;
        if (hugoTop > level.clientHeight - hugo.clientHeight) {
            hugoTop = level.clientHeight - hugo.clientHeight;
        }
        hugo.style.top = hugoTop + 'px';
    }

    if (e.keyCode == CONTROLS.UP && isOnLadder) {
        hugoTop -= moveFactor;

        if (hugoTop < 0) {
            hugoTop = 0;
        }
        hugo.style.top = hugoTop + 'px';
    }
}

function isNextToLadder() {
    var ladder = document.querySelector('.ladder');
    var ladderEdge = ladder.clientWidth + ladder.offsetLeft + 'px'; 
    // napisz fcje z if czy jest na ddrabinie czy obok
    console.log(ladderEdge);

    return hugo.style.left === ladderEdge;
}


function isOnLadderAnyLadder(){
    var ladders = document.querySelectorAll('.ladder'); 
    var isOn = false;

    function isOnLeft(ladder) {
        return hugo.offsetLeft + hugo.clientWidth <  ladder.offsetLeft;
    }
    function isOnRight(ladder) {
        return hugo.offsetLeft > ladder.offsetLeft + ladder.clientWidth;
    }
    function isOnLadder(ladder) {

        var hugoBottom = hugo.offsetTop + hugo.clientHeight;
        var ladderBottom = ladder.offsetTop + ladder.clientHeight;
        console.log(hugoBottom, ladderBottom)
        return (hugoBottom <= ladderBottom && hugoBottom > ladder.offsetTop)
       
    }
    ladders.forEach(function(ladder) {

        // if (hugo.offsetTop + hugo.clientHeight !== ladder.offsetTop + ladder.clientHeight) {
        //     return;
        // }
        if (isOnRight(ladder) || isOnLeft(ladder) || !isOnLadder(ladder)) {
            return;
        }

        isOn = true;
    })
    return isOn;
}

function hugoOnTopLadder (){
    if((hugo.clientTop - hugo.clientHeight) === ladder.clientTop)
    
    // ((hugoClientHeight - 100) || (hugoClientHeight - 200) || (hugoClientHeight - 300) || (hugoClientHeight - 300))){
    //     console.log(hugoClientHeight, hugoBottom)
        return;
    }


    

function isOnFloorBottom() {
    // array.some na tablicy wezlow mozesz sprwadzic 
    var floor5 = document.querySelector('.floor-5');
    var floor5Bottom = floor5.clientHeight + floor5.offsetTop + 1;

    // console.log(hugo.style.top, hugo.clientHeight, hugo.style.bottom)
    
    
    return (hugo.offsetTop + hugo.clientHeight) === floor5Bottom;

}

// function isOnFloor4() {
    
//     var floor4 = document.querySelector('.floor-4');
//     var floor4Bottom = floor4.clientHeight + floor4.offsetTop + 1;


//     return ((parseInt(hugo.style.top) + hugo.clientHeight) + 'px') === floor4Bottom;

// }

// function isOnFloor3() {
//     // array.some na tablicy wezlow mozesz sprwadzic 
//     var floor3 = document.querySelector('.floor-3');
//     var floor3Bottom = floor3.clientHeight + floor3.offsetTop + 1 + 'px';


//     return ((parseInt(hugo.style.top) + hugo.clientHeight) + 'px') === floor3Bottom;

// }

// function isOnFloor2() {
//     // array.some na tablicy wezlow mozesz sprwadzic 
//     var floor2 = document.querySelector('.floor-2');
//     var floor2Bottom = floor2.clientHeight + floor2.offsetTop + 1 + 'px';


//     return ((parseInt(hugo.style.top) + hugo.clientHeight) + 'px') === floor2Bottom;

// }

// function isOnFloor1() {
//     // array.some na tablicy wezlow mozesz sprwadzic 
//     var floor1 = document.querySelector('.floor-1');
//     var floor1Bottom = floor1.clientHeight + floor1.offsetTop + 1 + 'px';


//     return ((parseInt(hugo.style.top) + hugo.clientHeight) + 'px') === floor1Bottom;

// }
// function checkFloor(){
//     if (isOnFloor5() || isOnFloor4() || isOnFloor3() || isOnFloor2() || isOnFloor1())  
    
    
//     return true;

// // document.onkeydown = anim; //skortowy zapis przypisania f-cji do eventu keydown - to samo moze zrobic addevent listener?
document.addEventListener('keydown', anim);




