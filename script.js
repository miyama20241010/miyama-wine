$(function(){
    
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('main-nav');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

});
