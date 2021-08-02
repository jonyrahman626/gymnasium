$(function () {
    'use strict';
    // banner slider start
    $('#banner').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 1000,
    });
    // vanobox about video

    $('.venobox').venobox({

        spinner: 'cube-grid',
        spinColor: 'red',
        arrows: false,


    });
    //   testimonial slider
    $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 1000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right next-ar"></i>',
        prevArrow: '<i class="fas fa-angle-left prev-ar"></i>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

    //   sticky manu
    var navOff = $('.navigation').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > navOff) {
            $('.navigation').addClass('manu-fix');
        } else {
            $('.navigation').removeClass('manu-fix');
        }
    });


    // back to top

    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
    });

    $(window).scroll(function () {
        var scrolling2 = $(this).scrollTop();

        if (scrolling2 > 150) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut()
        }
    });
});