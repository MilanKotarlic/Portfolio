//preloader
$(window).on("load", function () {
    $(".holder").fadeOut(3000, 'swing')
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
