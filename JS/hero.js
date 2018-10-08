var left = document.querySelector ('.image-hand-left')
var right = document.querySelector ('.image-hand-right');

window.addEventListener('scroll',function(){
    var screenOffset = window.scrollY;
    var heroOffset = screenOffset *0.3; //predkosc przesuwania

    left.style.marginLeft = '-'+(heroOffset) + 'px';
    left.style.bottom = (0 - screenOffset*0.5) + 'px';
    right.style.marginRight = '-' + (heroOffset) + 'px';
    right.style.bottom = (0 - screenOffset*0.5) + 'px';
})

document.querySelector('.read-more').addEventListener('click', function () {
    console.log('wat?')
    document.querySelector('.toggle').style.display = 'block';
})