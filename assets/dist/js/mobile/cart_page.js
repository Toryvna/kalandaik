$(document).ready(function(){
  //switch url
    function CheckWindow(){
        if (screen.width > 1024) {
            document.location = "../desktop/cart.html";
        }
    }
    CheckWindow();
    $( window ).resize(function() {
        CheckWindow();
    });
    //end switch url

    //scroll
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

 
});