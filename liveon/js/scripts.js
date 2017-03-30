
//Push Menus
var menuLeft = document.getElementById('cbp-spmenu-s1'),
            showLeft = document.getElementById('showMenus'),
            body = document.body;

showLeft.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuLeft, 'cbp-spmenu-open');
};


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
});


//Nano Scroller
$(function () {
    $(".nano").nanoScroller();

}).call(this);