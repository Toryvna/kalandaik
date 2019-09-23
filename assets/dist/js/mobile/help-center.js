$(document).ready(function(){
      
      $('.accordion__heading').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

});