//win event - hero reaches the endDoors
function hugoWins() {
    var hugo = document.querySelector('.hugo');
    var hugoPositionY = hugo.getBoundingClientRect().bottom;
    var hugoPositionX = hugo.getBoundingClientRect().x + hugo.getBoundingClientRect().width/2;
    var endDoors = document.querySelector('.endDoors');
    
    if ((Math.abs(hugoPositionX - endDoors.getBoundingClientRect().x - endDoors.getBoundingClientRect().width/2) < 10) && (hugoPositionY === endDoors.getBoundingClientRect().bottom)) {
        return true;
    }
    
    return false;
}
