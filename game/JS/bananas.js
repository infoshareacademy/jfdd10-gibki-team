function eatBanana() {
    var eatenBananasCounter = 0;
    var bananas = document.querySelectorAll('.banana');
    // hugoPositionX, hugoPositionY
    setInterval(function() {
        bananas.forEach(function(banana) {
            if ((hugoPositionX === banana.getBoundingClientRect().x) && (hugoPositionY === banana.getBoundingClientRect().bottom)) {
                banana.classList.remove('banana');
                eatenBananasCounter += 1;
            }
        })
    }, dTime);
}