$(document).ready(function(){
  $('.header').height($(window).height());
})

function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}
/* About section image fade transition */

$('img[data-hover]').mouseover(function() {
var $image=$(this);


$image.fadeOut(400, function() {
  $image.attr('original', $image.attr('src'));
  $image.attr('src',$image.attr('data-hover'));
    }).fadeIn(400);

}).mouseout(function() {
var $image=$(this);


$image.fadeOut(400, function() {
  $image.attr('src',$image.attr('original'));
    }).fadeIn(400);

});

/* smooth scroll on anchor click */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
$(document).ready(function(){
  $('.scroll-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
  return false;
    });
});
