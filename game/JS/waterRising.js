function waterRising() {
    var startDoors = document.querySelector('.startDoors');
    var waterContainer = document.createElement('div');
    waterContainer.classList.add('waterContainer');
    startDoors.appendChild(waterContainer);
    waterContainerHeight = 10;

    setTimeout(function() {
        waterContainer.style.display = 'block';
        waterContainer.style.background = 'red';
        setInterval(function(){
            if (waterContainerHeight <= 500) {
                waterContainerHeight += 2;
                waterContainer.style.height = waterContainerHeight + 'px';
            }
            console.log(waterContainer.getBoundingClientRect().top)
        }, 200)
    }, 5000)
}

