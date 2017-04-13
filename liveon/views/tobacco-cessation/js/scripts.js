$(window).load(function () {
    $('.challenges .flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
    //Loading Icon
    setTimeout(function () {
        $('.loading-overlay').hide();
    }, 1000);
});