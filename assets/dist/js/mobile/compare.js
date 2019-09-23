$(document).ready(function(){

    //fixed elements
    var topIndex = $('.for-fixed').offset().top + $('.for-fixed').height();
    var sum = 0;
    $( ".for-fixed .cell" ).each(function( index ) {
        sum+= $(this).width();
    });

    $('.table .top-heading').css('width', sum + 40);
    $('.table .heading').css('width', sum + 40);


    
    $(document).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > topIndex) {
            $('.for-fixed').addClass('fixed').css('width', sum + 75);
        } else {
            $('.for-fixed').removeClass('fixed');
        }
    });

    $( ".table" ).scroll(function() {
        $('.for-fixed.fixed').css('left', -($('.table').scrollLeft()));
    });
});