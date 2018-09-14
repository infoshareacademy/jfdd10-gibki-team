var left = document.querySelector ('.image-hand-left')
var left = document.querySelector ('.image-hand-left')


window.addEventListener('scroll',function(){
    var screenOffset = window.scrollY;
    var heroOffset = screenOffset *0.3; //predkosc przesuwania

    left.style.marginLeft = '-'+(heroOffset) + 'px';
    left.style.bottom = (0 - heroOffset) + 'px';
})

var right = document.querySelector ('.image-hand-right');
var right = document.querySelector ('.image-hand-right');

window.addEventListener('scroll',function(){
    var screenOffset = window.scrollY;
    var heroOffset = screenOffset *0.3; //predkosc przesuwania

    right.style.marginRight = '-' + (heroOffset) + 'px';
    right.style.bottom = (0 - heroOffset) + 'px';
})