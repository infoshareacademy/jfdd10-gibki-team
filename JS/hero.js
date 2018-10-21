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


let i = 0;
function toggleClasses(){
    
    if (!i){
        document.getElementById("more").style.
        display="inline";
        document.getElementById("dots").style.
        display="none";
        document.getElementById("read").innerHTML=
        "Read less";
        i=1;
    }
    else{
            document.getElementById("more").style.
            display="none";
            document.getElementById("dots").style.
            display="inline";
            document.getElementById("read").innerHTML=
            "Read more";
            i=0;
    }
}