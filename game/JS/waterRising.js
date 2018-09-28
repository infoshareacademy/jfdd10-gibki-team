function waterRising() {
    var startDoors = document.querySelector('.startDoors');
    var waterContainer = document.createElement('div');
    waterContainer.classList.add('waterContainer');
    startDoors.appendChild(waterContainer);
    waterContainerHeight = 10;

    setTimeout(function() {
        waterContainer.style.display = 'block';
        setInterval(function(){
            if (waterContainerHeight <= 500) {
                waterContainerHeight += 2;
                waterContainer.style.height = waterContainerHeight + 'px';
            }
        }, 200)
    }, 5000)
}

