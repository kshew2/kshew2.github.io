$(document).ready(function () {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        pause: 3000,
        captions: true,
        pager: true,
        pagerType: 'short',
        pagerSelector: '#id_pager'
    });
});