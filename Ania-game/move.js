var hugo = document.querySelector ('#hugo');
var position = 0;
var velocity = 0;

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

var hugo = document.getElementById ('hugo');
var level = document.getElementById ('level');

// funkcja ponizej sprawdza kod klawiszy - live preview - wcisnij przyiski i poznaj kod
// function anim(e){
//     alert(e.keyCode);
// }

// document.onkeydown = anim;

var hugoLeft = 0;
var hugoTop = 0;


function anim(e){
    if(e.keyCode==39){
        hugoLeft+= 2;
        hugo.style.left = hugoLeft + 'px';


    }


    if(e.keyCode== 37){
        hugoLeft-=2;
        hugo.style.left = hugoLeft + 'px';
    }

    if(e.keyCode== 40){
        hugoTop +=2;
        hugo.style.top = hugoTop + 'px';
    }

    if(e.keyCode== 38){
        hugoTop -=2;
        hugo.style.top = hugoTop + 'px';
    }
}

document.onkeydown = anim;

