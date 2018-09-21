var level = document.getElementById('level');

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
    if (e.keyCode == 39) {
        hugoLeft += 2;
        if (hugoLeft > level.clientWidth - hugo.clientWidth) {
            hugoLeft = level.clientWidth - hugo.clientWidth;
        }
        hugo.style.left = hugoLeft + 'px';


    }
    if (e.keyCode == 37) {
        hugoLeft -= 2;
        if (hugoLeft < 0) {
            hugoLeft = 0;
        }
        hugo.style.left = hugoLeft + 'px';
    }

    if (e.keyCode == 40) {
        hugoTop += 2;
        if (hugoTop > level.clientHeight - hugo.clientHeight) {
            hugoTop = level.clientHeight - hugo.clientHeight;
        }
        hugo.style.top = hugoTop + 'px';
    }

    if (e.keyCode == 38) {
        hugoTop -= 2;

        if (hugoTop < 0) {
            hugoTop = 0;
        }
        hugo.style.top = hugoTop + 'px';
    }
}

// document.onkeydown = anim; //skortowy zapis przypisania f-cji do eventu keydown - to samo moze zrobic addevent listener?
document.addEventListener('keydown', anim);




