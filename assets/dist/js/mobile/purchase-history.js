$(document).ready(function(){

    //scroll
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    //popups
    $('.open-refund').on("click",function(){
        $('.overlay-refund').addClass('active');
        return false;
    });
    $('.close-popup, .close, .closing').on("click",function(){
        $('.overlay-refund').removeClass('active');
    });

    $('.open-thanks').on("click",function(){
        $('.overlay-thanks').addClass('active');
        return false;
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-thanks').removeClass('active');
    });
    //end popups

 
});