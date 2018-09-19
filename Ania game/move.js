var hugo = document.querySelector ('#hugo');
var position = 0;
var velocity = 0;

window.addEventListener ('keydown', function (event){
    if (event.code === 'Space'){
        velocity = 1;
    }

})

window.addEventListener ('keyup', function (event){
    if (event.code === 'Space'){
        velocity = 0;
    }

})

setInterval(function (){
position += velocity;
hugo.style.marginLeft = position + 'px'

}, 15)
 
// window.addEventListener ('keydown', function (event){
//     if (event.code === 'arrowLeft'){
//         velocity = 1;
//     }

// })