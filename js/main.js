/**
 * Hiding or showing menu depending on burger click state
 */

function navState() {
    if ($('.navigation-burger').hasClass('active')) {
        $('.navigation-burger').html('<i class="fas fa-times"></i>');
        $('.navigation').css('transform', 'translateX(0)');
    } else {
        $('.navigation-burger').html('<i class="fas fa-bars"></i>')
        $('.navigation').css('transform', 'translateX(100%)');
    }
}

/**
 * Burger menu toggling
 */

$('.navigation-burger').on('click', function () {
    $(this).toggleClass('active');
    navState();
});

/**
 * Show header after scrolling past first section
 */

$(window).on('scroll', function () {
    if ($(this).scrollTop() > $('.section-main').height()) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
})

/** 
 * Handle timeline dates
 */

const datesArray = ['2021-11-15', '2021-12-1', '2021-12-10', '2021-12-16', '2021-12-20', '2022-01-05', '2022-01-11'];
const today = new Date();
for (let i = 0; i < datesArray.length; i++) {
    if (today > new Date(datesArray[i])) {
        console.log(new Date(datesArray[i]));

        $('.timeline-list li' + ':nth-of-type(' + (i + 1) + ')').addClass('active');
    }
}

/**
 * Handle menu links scroll
 */
const $buttons = $('.navigation-button');

$buttons.on('click', function () {
    $('.navigation-burger').toggleClass('active');
    navState();
    let postfix = '.section-' + $(this)[0].classList[1].substr(1 + $buttons[0].classList[1].indexOf('-'));
    $([document.documentElement, document.body]).animate({
        scrollTop: $(postfix).offset().top - 50
    }, 1000);
})