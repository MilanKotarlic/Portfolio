$(window).on("load", function () {
    $(".holder").fadeOut(3000, 'swing')
});

$(document).ready(function(){
  $('.image-slider__box').slick({
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });