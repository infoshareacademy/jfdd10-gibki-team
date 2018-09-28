function hugovsladdersbot(hero) {
    var heroPositionY = hero.getBoundingClientRect().bottom;
    var heroPositionX = hero.getBoundingClientRect().x + hero.getBoundingClientRect().width / 2;
    var ladders = document.querySelectorAll('.ladder'); //nodeList
    var laddersArray = Array.from(ladders); //array from nodeList
    
    //console.log(heroPositionX, laddersArray);
    //console.log(laddersArray[1].getBoundingClientRect())
    
    return laddersArray.some(function (ladder) {
       return (
           (
               Math.abs(
                   heroPositionX - ladder.getBoundingClientRect().x - ladder.getBoundingClientRect().width / 2
                ) < 5
            ) &&
            (heroPositionY < ladder.getBoundingClientRect().bottom) && 
            (heroPositionY >= ladder.getBoundingClientRect().top - 4)
        )
     })


}