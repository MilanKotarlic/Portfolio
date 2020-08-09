//preloader
$(window).on("load", function () {
    $(".holder").fadeOut(3000, 'swing')
});

//slider
$(document).ready(function(){
  $('.image-slider__box').slick({
      infinite: true,
      arrows: false,
      centerMode: true,
      centerPadding: '30rem',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'ease-in',
      responsive: [
        {
            breakpoint: 1400,
            settings: {
                centerPadding: '25rem',
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

 
 $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.arrow__wrapper').css({
        'opacity': ((0 + scrollTop) / height)
    }); 
});
