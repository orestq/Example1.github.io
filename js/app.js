let mobileIcon = document.querySelector('.mobile-menu');
let menu = document.querySelector('.header-nav');

const toggleMenu = () => {
    menu.classList.toggle('d-block');
}

mobileIcon.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target == menu || menu.contains(e.target) || e.target == menu;
    let menu_active = menu.classList.contains('d-block');
    if (!target && menu_active) {
        toggleMenu();
    }
})