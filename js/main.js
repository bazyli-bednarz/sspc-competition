/**
 * Burger menu toggling
 */

$('.navigation-burger').on('click', function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).html('<i class="fas fa-times"></i>');
        $('.navigation').css('transform', 'translateX(0)');
    }
    else {
        $(this).html('<i class="fas fa-bars"></i>')
        $('.navigation').css('transform', 'translateX(100%)');
    }
});

/**
 * Show heaeder after scrolling past first section
 */

$(window).on('scroll', function() {
    if ($(this).scrollTop() > $('.section-main').height()) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
})