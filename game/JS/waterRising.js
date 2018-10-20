
function waterRising() {
    var startDoors = document.querySelector('.startDoors');
    var waterContainer = document.createElement('div');
    waterContainer.classList.add('waterContainer');
    startDoors.appendChild(waterContainer);
    waterContainerHeight = 10;

    setTimeout(function() {
        document.querySelector(".infoBox").innerText = "WATER RISING !!!"
        document.querySelector(".infoBox").style.color = "red"
        document.querySelector(".infoBox").style.fontWeight = "bolder"
        waterContainer.style.display = 'block';
        waterContainer.style.background = 'url(Graphics/flooding.png)';
        waterInterval = setInterval(function(){
            if (pauseCounter === 1) {
                return;
            }
            if (waterContainerHeight <= 500) {
                waterContainerHeight += 2;
                waterContainer.style.height = waterContainerHeight + 'px';
            }
        }, 200)
    }, 7000)
    setTimeout(function() {
        document.querySelector(".infoBox").innerText = "?"
        document.querySelector(".infoBox").style.color = "black"
        document.querySelector(".infoBox").style.fontWeight = "normal"
    }, 11000)
}

