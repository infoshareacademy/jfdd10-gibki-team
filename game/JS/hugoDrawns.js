//win event - hero has drawn under the water
function hugoDrawns(hero) {
    var hero = document.querySelector('.hugo');
    var water = document.querySelector('.waterContainer');
    console.log(hero.getBoundingClientRect());
    console.log(water.getBoundingClientRect());
    
    if (hero.getBoundingClientRect().top >= water.getBoundingClientRect().top) {
        youLoose();
    }
}
