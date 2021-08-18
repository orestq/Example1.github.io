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

// $(".mobile-menu").click(function (e) {
//     e.preventDefault();
//     toggleHamburger();
// });

// function toggleHamburger() {
//     $(".header-nav-list").toggleClass("show");
//     $(".mobile-menu").toggleClass("active-menu");
// }

$(document).ready(function () {
    $(".card-item-btn").click(function () {
        $(this).parent(".card-item").children(".popup").addClass("show-modal");
    });

    $(".close, .popup-overlay").click(function () {
        $(".popup").removeClass("show-modal");
    })

    $(".mobile-menu").click(function () {
        $(this).parent(".menus").children(".header-nav-list").toggleClass("header-nav-list, show");
        $(this).parent(".menus").children(".mobile-menu").toggleClass("active-menu");
    });
});

    // $(".card-item-btn").click(function () {
    //     if ($(this).attr("data-btn") == '1') {
    //         $(".popup-start").toggleClass("show-modal");
    //     } else if ($(this).attr("data-btn") == '2') {
    //         $(".popup-business").toggleClass("show-modal")
    //     } else if ($(this).attr("data-btn") == '3') {
    //         $(".popup-professional").toggleClass("show-modal");
    //     }
    // });

    // $(".close, .popup-overlay").click(function () {
    //     $(".popup-start").removeClass("show-modal");
    //     $(".popup-business").removeClass("show-modal");
    //     $(".popup-professional").removeClass("show-modal");
    // })

