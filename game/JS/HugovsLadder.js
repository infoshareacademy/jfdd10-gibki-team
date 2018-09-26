function hugovsladders(hero) {
    var heroPositionY = hero.getBoundingClientRect().bottom;
    var heroPositionX = hero.getBoundingClientRect().right + hero.getBoundingClientRect().width / 2;
    var ladders = document.querySelectorAll('.ladder'); //nodeList
    var laddersArray = Array.from(ladders); //array from nodeList
    
    console.log(heroPositionX, laddersArray);
    console.log(laddersArray[1].getBoundingClientRect())
    
    return laddersArray.some(function (ladder) {
       return (
           (
               Math.abs(
                   heroPositionX - ladder.getBoundingClientRect().right - ladder.getBoundingClientRect().width / 2
                ) <= 10
            ) &&
            (heroPositionY <= ladder.getBoundingClientRect().bottom) && 
            (heroPositionY >= ladder.getBoundingClientRect().top)
        )
     })


}
