$(window).on("load", function () {
    $(".holder").fadeOut(3000, 'swing')
});

$(document).ready(function(){
  $('.image-slider__box').slick({
      infinite: true,
      arrows: true,
      centerMode: true,
      centerPadding: '30rem',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'ease-in',
    });
  });