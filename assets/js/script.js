/*
    ===================================
    Travel Agency Template - Script
    ===================================
    Author: Yasoo
    Version: 1.0
    Description: Custom scripts for the Travel Agency Template.
    ===================================
*/

// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing function
    once: true, // Whether animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
});


/* 
    =====================
    Initialize Slick Carousel
    =====================
*/
$(document).ready(function(){
  
    $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.customer-testimonials-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.off-slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });


    /* 
        =====================
        Language Switch
        =====================
    */
    $('#home-language-switch').on('click', function() {
        var $languageText = $('#home-language-text');
        if ($languageText.text() === 'EN') {
            $languageText.text('AR');
            // Here you can also add code to actually change the language of the page
        } else {
            $languageText.text('EN');
            // Here you can also add code to actually change the language of the page
        }
    });
});

// Set the current year in the copyright section
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});