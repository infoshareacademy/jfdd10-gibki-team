var hero = document.querySelector ('.image-hand-left')
var hero = document.querySelector ('.image-hand-left')


window.addEventListener('scroll',function(){
    var screenOffset = window.scrollY;
    var heroOffset = screenOffset *0.5; //predkosc przesuwania

    hero.style.marginLeft = '-'+(heroOffset) + 'px';
    hero.style.bottom = (0 - heroOffset) + 'px';
})