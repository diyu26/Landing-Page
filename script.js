document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu button');

    // Toggle the menu when the button is clicked
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('opened');
    });
});
