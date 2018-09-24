var CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}

// level.appendChild(makeLevel(500, 500));

// function makeLevel(width, height) {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     var tr, i;

//     for (i = 0; i < height; i += 1) {
//         tr = document.createElement('tr');
//         if (i % 2 === 0) {
//             tr.classList.add('blueLevel')
//         }
//         tbody.appendChild(tr);
//     }
//     table.appendChild(tbody);

//     return table;


// }



// var position = 0;
// var velocity = 0;

// *moving with MARGIN
// window.addEventListener ('keydown', function (event){
//     if (event.code === 'ArrowRight'){
//         velocity = 1;
//     }

// })

// window.addEventListener ('keyup', function (event){
//     if (event.code === 'ArrowRight'){
//         velocity = 0;
//     }

// })


// setInterval(function (){
// position += velocity;
// hugo.style.marginLeft = position + 'px'

// }, 15)


// window.addEventListener ('keydown', function (event){
//     if (event.code === 'ArrowLeft'){
//         velocity = -1;
//     }

// })

// window.addEventListener ('keyup', function (event){
//     if (event.code === 'ArrowLeft'){
//         velocity = 0;
//     }

// })

// setInterval(function (){
//     position += velocity;
//     hugo.style.marginLeft = position + 'px'
//     }, 15)

// Moving with POSITION

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

function createLadder(){
    for(i=0; i<levels.length; i+=1){

        var ladder = document.createElement('div')
        ladder.classList.add('ladder');
        levels[i].element.appendChild(ladder);
    }
   
   
}

createLadder();

var bottomPosition = level.offsetTop + floor.offsetTop + floor.clientHeight;




var hugo = document.getElementById('hugo');


// funkcja ponizej sprawdza kod klawiszy - live preview - wcisnij przyiski i poznaj kod
// function anim(e){
//     alert(e.keyCode);
// }

// document.onkeydown = anim;

//wyznaczamy pozycje poczatkowe hugo wzgledem rozmiarow planszy
var hugoLeft = level.clientWidth - hugo.clientWidth;
var hugoTop = level.clientHeight - hugo.clientHeight;

hugo.style.left = hugoLeft + 'px'; //tu dodajemy px do stringa bo wartosc musi byc w pixelach
hugo.style.top = hugoTop + 'px';

function anim(e) {
    if (e.keyCode === CONTROLS.RIGHT && isOnFloorBottom()) {
        hugoLeft += 2;
        if (hugoLeft > level.clientWidth - hugo.clientWidth) {
            hugoLeft = level.clientWidth - hugo.clientWidth;
        }
        hugo.style.left = hugoLeft + 'px';


    }
    if (e.keyCode == CONTROLS.LEFT && isOnFloorBottom()) {
        hugoLeft -= 2;
        if (hugoLeft < 0) {
            hugoLeft = 0;
        }
        hugo.style.left = hugoLeft + 'px';
    }

    if (e.keyCode == CONTROLS.DOWN && isNextToLadder()) {
        hugoTop += 2;
        if (hugoTop > level.clientHeight - hugo.clientHeight) {
            hugoTop = level.clientHeight - hugo.clientHeight;
        }
        hugo.style.top = hugoTop + 'px';
    }

    if (e.keyCode == CONTROLS.UP && isNextToLadder()) {
        hugoTop -= 2;

        if (hugoTop < 0) {
            hugoTop = 0;
        }
        hugo.style.top = hugoTop + 'px';
    }
}

function isNextToLadder() {
    var ladder = document.querySelector('.ladder');
    var ladderEdge = ladder.clientWidth + ladder.offsetLeft + 'px'; 
    
    console.log(ladderEdge);

    return hugo.style.left === ladderEdge;
}
function isOnFloorBottom() {
    // array.some na tablicy wezlow mozesz sprwadzic 
    var floor5 = document.querySelector('.floor-5');
    var floor5Bottom = floor5.clientHeight + floor5.offsetTop + 1 + 'px';

    console.log(hugo.style.top, hugo.clientHeight,floor5Bottom)
    
    
    return ((parseInt(hugo.style.top) + hugo.clientHeight) + 'px') === floor5Bottom;

}

// document.onkeydown = anim; //skortowy zapis przypisania f-cji do eventu keydown - to samo moze zrobic addevent listener?
document.addEventListener('keydown', anim);




