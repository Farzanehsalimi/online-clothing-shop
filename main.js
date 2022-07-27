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

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items: 1,
//     loop: true,
//     margin: 18,
//     stagePadding: 50,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             stagePadding: 0,

//         },
//         768: {}
//     }
// });
// $('.play').on('click', function() {
//     owl.trigger('play.owl.autoplay', [1000])
// })
// $('.stop').on('click', function() {
//     owl.trigger('stop.owl.autoplay')
// })