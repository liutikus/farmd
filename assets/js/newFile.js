(function ($) {
  "use strict";
  /*=================================
      JS Index Here
  ==================================*/
  /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu Active
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image
    07. Hero Slider Active
    08. Global Slider
    09. Ajax Contact Form
    10. Popup Sidemenu
    11. Magnific Popup
    12. Section Position
    13. Filter
    14. One Page Nav
    15. WOW.js Animation
  */
  /*=================================
      JS Index End
  ==================================*/
  /*
 
  $(document).ready(function() {
  // Get reference to the audio element
  var audio = document.querySelector('.my-audio');
 
  /*---------- 01. On Load Function ----------*/
  $(window).on("load", function () {
    // Hide preloader when window is loaded
    $(".preloader").fadeOut();

    // Play audio when preloader is hidden
    if (!$(".preloader").is(":visible")) {
      audio.play();
    }
  });

  /*---------- 02. Preloader ----------*/
  $(".preloaderCls").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      // Hide preloader when cancel button is clicked
      $(".preloader").css("display", "none");

      // Stop audio when preloader is hidden
      audio.pause();
    });
  });
});
