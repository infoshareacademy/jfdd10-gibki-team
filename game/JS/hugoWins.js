//win event - hero reaches the endDoors
function hugoWins() {
    var hugo = document.querySelector('.hugo');
    var hugoPositionY = hugo.getBoundingClientRect().bottom;
    var hugoPositionX = hugo.getBoundingClientRect().x + hugo.getBoundingClientRect().width / 2;
    var endDoors = document.querySelector('.endDoors');

    var horizontalMatch = Math.abs(
        hugoPositionX - endDoors.getBoundingClientRect().x - endDoors.getBoundingClientRect().width / 2
    ) < 10

    var verticalMatch = Math.abs(hugoPositionY - endDoors.getBoundingClientRect().bottom) < 10

    console.log(horizontalMatch, verticalMatch)

    if (
        horizontalMatch && verticalMatch
    ) {
        return true;
    }

    return false;
}
