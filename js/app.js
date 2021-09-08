$(document).ready(function () {
    $(".card-item-btn").click(function () {
        $(this).parent(".card-item").children(".popup").addClass("show-modal");
    });

    $(".close, .popup-overlay").click(function () {
        $(".popup").removeClass("show-modal");
    });

    $(".mobile-menu").click(function () {
        $(this).parent(".menus").children(".header-nav-list").toggleClass("header-nav-list, show");
        $(this).parent(".menus").children(".mobile-menu").toggleClass("active-menu");
    });

    $(".send-form").on('click', function () {
        checkName = (inputName) => {
            $(inputName).blur(function () {
                if ($(this).val() == '') {
                    $(this).css('border', '1px solid red');
                    return false;
                }
                else {
                    $(this).css('border', '1px solid green');
                    $('.nameError').removeClass('showError')
                }
            });
        }

        validateEmail = (email) => {
            var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegex.test(email);
        }

        checkValidEmail = (inputEmail) => {
            $(inputEmail).blur(function () {
                var email = $(inputEmail).val();
                if (validateEmail(email)) {
                    $(this).css('border', '1px solid green');
                    $('.emailError').removeClass('showError')
                }
                else {
                    $(this).css('border', '1px solid red');


                }
            });
        }

        validatePhone = (inputPhone) => {
            var phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
            if (inputPhone.match(phoneRegex)) {
                return true;
            }
            else {
                return false;
            }
        }

        checkPhone = (inputPhone) => {
            $(inputPhone).blur(function () {
                var phone = $(inputPhone).val();
                var getPhone = validatePhone(phone);
                if (getPhone) {
                    $(this).css('border', '1px solid green');
                }
                else {
                    $(this).css('border', '1px solid red');
                }
            });
        }

        checkCountry = (inputCountry) => {
            $(inputCountry).blur(function () {
                if ($(this).val() == '') {
                    $(this).css('border', '1px solid red');

                }
                else {
                    $(this).css('border', '1px solid green');
                    $('.countryError').removeClass('showError')

                }
            });
        }

        checkName(".name");
        checkValidEmail(".email");
        checkPhone(".phone");
        checkCountry(".country");

        if ($(".name").val() == '') {
            $(".name").css('border', '1px solid red');
            $('.nameError').addClass('showError')
        }

        if ($(".email").val() == '') {
            $(".email").css('border', '1px solid red');
            $('.emailError').addClass('showError')
        }

        if ($(".email").val() != '') {
            $('.emailError').removeClass('showError')
            var email = $(".email").val();
            if (!validateEmail(email)) {
                return false;
            }
        }

        if ($(".phone").val() == '') {
            $(".phone").css('border', '1px solid red');
            $('.phoneError').addClass('showError')
        }

        if ($(".phone").val() != '') {
            $('.phoneError').removeClass('showError')
            var getPhone = validatePhone($(".phone").val());
            if (!getPhone) {
                return false;
            }
        }

        if ($(".country").val() == '') {
            $('.countryError').addClass('showError')
            $(".country").css('border', '1px solid red');
        }

        if ($('.form-select').val() == 0) {
            $(".form-select").css('border', '1px solid red');
            $('.selectError').addClass('showError')
            return false;
        } else {
            $(".form-select").css('border', '1px solid green');
            $('.selectError').removeClass('showError')
        }
    });
});

