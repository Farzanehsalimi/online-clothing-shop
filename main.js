// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementsByClassName("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel();
// });

// let owl = $('.owl-carousel');
// owl.owlCarousel({
//     items: 1,
//     loop: true,
//     rtl: true,
//     margin: 18,
//     stagePadding: 50,
//     autoplay: true,
//     autoplayTimeout: 1200,
//     autoplayHoverPause: true,
//     dots: false,
//     responsive: {
//         0: {
//             stagePadding: 14,

//         },
//         768: {}
//     }
// });

$(document).ready(function(){
    $('.owl-one').owlCarousel({
    items: 1,
    loop: true,
    rtl: true,
    margin: 18,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 1200,
    autoplayHoverPause: true,
    dots: false,
    navigation : false ,
    responsive: {
        0: {
            stagePadding: 14,
        },
        768: {}
    }
});

$('.owl-two').owlCarousel({
    items: 1,
    loop: true,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 1400,
    autoplayHoverPause: true,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    margin:0,
    nav: true,
    responsive: {
        // 0: {
        //     stagePadding: 14,

        // },
        // 768: {}
    }
    });

    $('.owl-three').owlCarousel({
        items: 3,
        loop: true,
        rtl: true,
        margin: 18,
        autoplay: true,
        autoplayTimeout: 1400,
        autoplayHoverPause: true,
        dots: false,
        navigation : false ,
        responsive: {
            0: {
                stagePadding: 14,
            },
            768: {}
        }
    });
});