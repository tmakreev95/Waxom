$(".search").click(function() {
    $("#search-bar").fadeToggle(1000);
});
/* Hamburger Menu */
$('.hamburger-menu').click(function(){
    $('.menu_').toggleClass('active');
});

/* Scrolls */
$(".nav-link.features_").click(function() {
    $('html, body').animate({
        scrollTop: $(".features").offset().top
    }, 2000);
});
$(".nav-link.about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top
    }, 2000);
});
$(".nav-link.portfolio_").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 2000);
});
$(".nav-link.pricing").click(function() {
    $('html, body').animate({
        scrollTop: $(".pricing-container").offset().top
    }, 2000);
});
$(".nav-link.blog").click(function() {
    $('html, body').animate({
        scrollTop: $(".posts-grid").offset().top
    }, 2000);
});
$(".nav-link.partners").click(function() {
    $('html, body').animate({
        scrollTop: $(".partners-section").offset().top
    }, 2000);
});
$(".nav-link.contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact-section").offset().top
    }, 2000);
});
/* Scrolls */
/* Video */

$( document ).ready(function() {
    $("#controls").click(function() {
        if (video.paused || video.ended) {
            video.play();
            $('#playpause').fadeOut(300);
            $('.headings-container').fadeOut(800);   
        }
         else {
            video.pause();
            $('#playpause').fadeIn(300);
            video.controls = true;
        }
    });
});

/* Video */


