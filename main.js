$(document).ready(function(){
  $('.header').height($(window).height());
})
$('.parallax-window').parallax({imageSrc: '/images/laptop.jpg'});
/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

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

/* Image slide-in on scroll
Credit goes to Harry Beckwith
on Codepen.io
*/
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {

  // loop over every image
  // figure out where it needs to be shown
  // at least 50% of its height

  sliderImages.forEach(sliderImage => {
    //half way through images
     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // half way in the images
    const isHalfShown = slideInAt > sliderImage.offsetTop;

    const isNoScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNoScrolledPast) {
          sliderImage.classList.add('active');
       } else {
          sliderImage.classList.remove('active');
       }
  })


}

window.addEventListener('scroll', debounce(checkSlide));
