function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', function () {
    let levels = document.querySelectorAll('.level-bar-inner');
    levels.forEach(function (item) {
        item.style.width = '0';
    });
    levels.forEach(function (item) {
        let itemWidth = item.getAttribute('data-level');
        item.animate({
            width: itemWidth
        }, 800);

        setInterval(function () {
            item.style.width = itemWidth;
        }, 790)
    });
});