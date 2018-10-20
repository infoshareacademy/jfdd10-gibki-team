//put inside move setInterval
var eatenBananasCounter = 0;
function eatBanana(hero) {
    var heroPositionY = hero.getBoundingClientRect().bottom;
    var heroPositionX = hero.getBoundingClientRect().x + hero.getBoundingClientRect().width/2;
    var bananas = document.querySelectorAll('.banana'); //nodeList
    for (var i = 0 ; i < bananas.length ; i++) {
        if ((Math.abs(heroPositionX - bananas[i].getBoundingClientRect().x - bananas[i].getBoundingClientRect().width/2) < 10) && (Math.abs(heroPositionY - bananas[i].getBoundingClientRect().bottom)<4)) {
            bananas[i].classList.remove('banana');
            eatenBananasCounter += 1;
            document.querySelector('.bananasCounter').innerText = eatenBananasCounter;
            isTurboOnInfo();
        }
    }
}

function isTurboOn() {
    return eatenBananasCounter >= 6 ? true : false
}
function isTurboOnInfo() {
    if (eatenBananasCounter === 6) {
        document.querySelector(".infoBox").innerText = "TURBO SPEED !!!"
        document.querySelector(".infoBox").style.color = "green"
        document.querySelector(".infoBox").style.fontWeight = "bolder"
        setTimeout(function() {
            document.querySelector(".infoBox").innerText = "?"
            document.querySelector(".infoBox").style.color = "black"
            document.querySelector(".infoBox").style.fontWeight = "normal"
        }, 4000)
        }
}