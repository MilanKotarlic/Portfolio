//preloader
$(window).on("load", function () {
    $(".holder").fadeOut(3000, 'swing')
});

//slider
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