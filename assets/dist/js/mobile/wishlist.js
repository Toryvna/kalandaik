$(document).ready(function () {
    //switch url
      function CheckWindow(){
          if (screen.width > 1024) {
              document.location = "../desktop/wishlist.html";
          }
      }
      CheckWindow();
      $( window ).resize(function() {
          CheckWindow();
      });
      //end switch url
});