var menuBtn = document.getElementById('menu-btn');
var menuItems = document.querySelectorAll('.header .menu li')

menuItems.forEach(function(element) {
    element.addEventListener('click', function() {
        menuBtn.click();
    })
})
