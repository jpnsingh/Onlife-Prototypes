



$(window).load(function () {
    //Loading Icon
    setTimeout(function () {
        $('.loading-overlay').hide();
    }, 1000);
});

//Show Menus
$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('open');
    });
    //Popover
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });
    $('.consult-btn').click(function () {
        $('.ways-contact').show();
    });

    //Push Menus
    var menuLeft = document.getElementById('cbp-spmenu-s1'),
                showLeft = document.getElementById('showMenus');

    showLeft.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(menuLeft, 'cbp-spmenu-open');
    };

    //Chat window
    $('.chat-box-btn').click(function () {
        $('.chat-window').animate({
            'bottom':'0'
        });
    });
    $('.close-chat').click(function () {
        $('.chat-window').animate({
            'bottom': '-100%'
        });
    });
});


$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: $('.slide-display').width() / 3,
        itemMargin: 0,
        controlNav: false,
        animationLoop: true,
        minItems: 3
    });
});
