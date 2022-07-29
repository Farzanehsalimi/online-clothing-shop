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


$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    rtl: true,
    margin: 18,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 1200,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            stagePadding: 0,

        },
        768: {}
    }
});
// $('.play').on('click', function() {
//     owl.trigger('play.owl.autoplay', [1000])
// })
// $('.stop').on('click', function() {
//     owl.trigger('stop.owl.autoplay')
// })