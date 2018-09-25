//put inside move setInterval
var eatenBananasCounter = 0;
function eatBanana(hero) {
    var heroPositionY = hero.getBoundingClientRect().bottom;
    var heroPositionX = hero.getBoundingClientRect().x + hero.getBoundingClientRect().width/2;
    var bananas = document.querySelectorAll('.banana'); //nodeList

    for (var i = 0 ; i < bananas.length ; i++) {
        if ((Math.abs(heroPositionX - bananas[i].getBoundingClientRect().x - bananas[i].getBoundingClientRect().width/2) < 10) && (heroPositionY === bananas[i].getBoundingClientRect().bottom)) {
            bananas[i].classList.remove('banana');
            eatenBananasCounter += 1;
        }
    }
    // return eatenBananasCounter;
}   