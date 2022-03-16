$('.slider').slick({
    speed:1500,
    prevArrow: $('.previos'),
    nextArrow: $('.next'),
});


$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger, .descr').toggleClass('open-menu');
    });
});