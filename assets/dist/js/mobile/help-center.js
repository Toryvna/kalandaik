$(document).ready(function(){
    //switch url
      function CheckWindow(){
          if (screen.width > 1024) {
              document.location = "../desktop/help-center.html";
          }
      }
      CheckWindow();
      $( window ).resize(function() {
          CheckWindow();
      });
      //end switch url
      
      $('.accordion__heading').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

});