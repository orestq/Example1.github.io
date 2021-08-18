// let mobileIcon = document.querySelector('.mobile-menu');
// let menu = document.querySelector('.header-nav-list');

// const toggleMenu = () => {
//     menu.classList.toggle('d-block');
// }

// mobileIcon.addEventListener('click', e => {
//     e.stopPropagation();
//     toggleMenu();
// });

// document.addEventListener('click', e => {
//     let target = e.target == menu || menu.contains(e.target) || e.target == menu;
//     let menu_active = menu.classList.contains('d-block');
//     if (!target && menu_active) {
//         toggleMenu();
//     }
// })

$(document).ready(function () {
    $("#mobile-menu").click(function () {
        toggleMenuClass("show");
        toggleHamburger();
    });

    function toggleMenuClass(className) {
        $(".header-nav-list").toggleClass(className)
    }

    function toggleHamburger() {
        $(".mobile-menu span:nth-child(1)").toggleClass("line-top");
        $(".mobile-menu span:nth-child(2)").toggleClass("line-middle");
        $(".mobile-menu span:nth-child(3)").toggleClass("line-bottom");
    }
});

$(".toggle-popup-start").on('click', function (e) {
    e.preventDefault();
    $(".popup-start").toggleClass("show-modal");
});

$(".toggle-popup-business").on('click', function (e) {
    e.preventDefault();
    $(".popup-business").toggleClass("show-modal");
});

$(".toggle-popup-professional").on('click', function (e) {
    e.preventDefault();
    $(".popup-professional").toggleClass("show-modal");
});




// $("#mobile-menu").on("click", function () {
//     $(".header-nav-list").toggleClass("show");
// })

// $(function () {
//     var width = 200,
//         height = 44 * 4 + 20,
//         speed = 300,
//         button = $('#menu-button'),
//         overlay = $('#overlay'),
//         menu = $('#hamburger-menu');

//     button.on('click', function (e) {
//         if (overlay.hasClass('open')) {
//             animate_menu('close');
//         } else {
//             animate_menu('open');
//         }
//     });

//     overlay.on('click', function (e) {
//         if (overlay.hasClass('open')) {
//             animate_menu('close');
//         }
//     });

//     $('a[href="#"]').on('click', function (e) {
//         e.preventDefault();
//     });

//     function animate_menu(menu_toggle) {
//         if (menu_toggle == 'open') {
//             overlay.addClass('open');
//             button.addClass('on');
//             overlay.animate({ opacity: 1 }, speed);
//             menu.animate({ width: width, height: height }, speed);
//         }

//         if (menu_toggle == 'close') {
//             button.removeClass('on');
//             overlay.animate({ opacity: 0 }, speed);
//             overlay.removeClass('open');
//             menu.animate({ width: "0", height: 0 }, speed);
//         }
//     }
// });



// mobile - menu
// $(function () {
//     $("h2").css("color", "red");
//     $(".header-nav-list-item:nth-child(4) a").css("color", "red")
// });