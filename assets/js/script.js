var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 18,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 1200,
    autoplayHoverPause: true,
    responsive: {
        0: {
            stagePadding: 0,

        },
        768: {}
    }
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})