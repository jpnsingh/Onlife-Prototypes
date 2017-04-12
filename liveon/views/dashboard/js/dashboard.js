$(document).ready(function () {

    $('.description').each(function () {
        $(this).on('mouseenter', function () {
            $(this).next().addClass('hovered');
        });
        $(this).on('mouseleave', function () {
            $(this).next().removeClass('hovered');
        });
    });

    $('.health-assessment').popover({
        placement: 'top',
        trigger: 'hover',
        html: true,
        container: 'body',
        content: function () {
            return $('.content-ha').html();
        }
    });

    $('.call-coach').popover({
        placement: 'top',
        trigger: 'hover',
        html: true,
        content: function () {
            return $('.call-a-coach').html();
        }
    });

    $('.ha-not-now').click(function () {
        $('.next-recommendation.first').hide();

        $('.next-recommendation.second').show();
    });
    $('.remind-later').click(function () {
        $('.ha-wrapper').hide();
        $('.points-btm').hide();
        $('.next-recommendation.second').show();
    });
    $('.remind-not-now').click(function () {
        $('.next-recommendation.second').hide();
        $('.next-recommendation.third').show();
    });
    $('.device-not-now').click(function () {
        $('.next-recommendation.third').hide();
        $('.next-recommendation.forth').show();
    });
    $('.app-btn').click(function () {
        $('.next-recommendation.forth').hide();
        $('.next-recommendation.fifth').show();
    });
    $('.cp-btn').click(function () {
        $('.next-recommendation.fifth').hide();
        $('.next-recommendation.sixth').show();
    });
    $('.recommend-btn').click(function () {
        $('.next-recommendation.sixth').hide();
        $('.ha-wrapper').show();
        $('.points-btm').show();
    });
    $('.more-info-app').click(function () {
        $('.next-recommendation.forth').hide();
        $('.next-recommendation.seventh').show();
    });
    $('.back-to-app').click(function () {
        $('.next-recommendation.seventh').hide();
        $('.next-recommendation.forth').show();
    });
    $('.more-info-challenge').click(function () {
        $('.next-recommendation.fifth').hide();
        $('.next-recommendation.eigth').show();
    });
    $('.back-to-challenges').click(function () {
        $('.next-recommendation.eigth').hide();
        $('.next-recommendation.fifth').show();
    });

});

$(window).on('load', function (e) {
    windowResize();
    slideWidth();
});
$(window).on('resize', function (e) {
    windowResize();
    slideWidth();
});

function windowResize() {
    $('.view-second-box, .view-third-box').css('height', ($('.most-big-box').height() / 2) - (29 / 2));
}

function slideWidth() {
    $('.flexslider .slides li').css('width', ($('.slide-display').width() / 3));
}