//win event - hero has drawn under the water
function hugoDrawns(hero) {
    var hero = document.querySelector('.hugo');
    var water = document.querySelector('.waterContainer');
       
    if (hero.getBoundingClientRect().top >= water.getBoundingClientRect().top) {
        return true
    }
    return false
}
