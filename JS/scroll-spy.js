(function () {
    var menu = document.querySelectorAll('.menu li a[href^="#"]');
    
    var targets = [];

    menu.forEach(function (item) {
        var href = item.getAttribute('href');
        var target = document.querySelector(href);
        targets.push(target);
        
        item.addEventListener('click', function (event) {
            event.preventDefault();
            window.scroll({
                top: target.offsetTop - 60,
                behavior: "smooth"
            })
        })
    })
    window.addEventListener('scroll', function () {
        
        var scroll = window.scrollY + 100;

        targets.forEach(function (target, index) {
            var offset = target.offsetTop;

            if (scroll > offset) {
                menu[index].classList.add('active');
            } else {
                menu[index].classList.remove('active');
            }

            if (document.body.clientHeight - window.innerHeight < scroll) {
                menu[menu.length - 1].classList.add('active');
            } else {
                menu[menu.length - 1].classList.remove('active');
            }
        })
    })
})() 