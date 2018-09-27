function hugovsfloor(hero) {
    var ladders = document.querySelectorAll('.ladder');
    var laddersArray = Array.from(ladders);
    var heroPositionY = hero.getBoundingClientRect().bottom;
    return laddersArray.some(function (ladder) {
        return (
            (
                Math.abs(
                    heroPositionY - ladder.getBoundingClientRect().bottom
                ) < 3
            ) ||
            (
                Math.abs(
                    heroPositionY - ladder.getBoundingClientRect().top
                ) < 3
            )
        )


    })
}