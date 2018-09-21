(function () {
    var menu = document.querySelectorAll('.menu li a');

    var targets = [];

    menu.forEach(function (item) {
        var href = item.getAttribute('href');
        var target = document.querySelector(href);
        targets.push(target);

        item.addEventListener('click', function (event) {
            event.preventDefault();
            window.scroll({
                top: target.offsetTop,
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
        })
    })
})() 