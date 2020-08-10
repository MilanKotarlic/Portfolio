//preloader
$(window).on("load", function () {
    $(".holder").fadeOut(3000, 'swing')
});

//slider
$(document).ready(function(){
  $('.image-slider__box').slick({
      infinite: true,
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: '45rem',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 1500,
      responsive: [
        {
            breakpoint: 1800,
            settings: {
                centerPadding: '30rem',
            }
        },
        {
            breakpoint: 1400,
            settings: {
                centerPadding: '26rem',
            }
        },
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '22rem',
            }
        },
        {
            breakpoint: 991,
            settings: {
                centerPadding: 0,
            }
        },
    ]
    });
  });

  //checkbox on button 
 var isChecked = false;
function checkAll() {
    var checkboxes = document.getElementsByTagName('input');
     if (isChecked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
  isChecked = !isChecked;
 }

 //Back to top arrow fade-in
 $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.arrow__wrapper').css({
        'opacity': ((0 + scrollTop) / height)
    }); 
});
