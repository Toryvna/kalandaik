$(document).ready(function(){
    //popups
    $('.open-login').on("click",function(){
        $('.overlay-login').addClass('active');
        return false;
    });
    $('.close-popup, .close, .closeBtn').on("click",function(){
        $('.overlay-login').removeClass('active');
    });

    $('#registration, .open-registration').on("click",function(){
        $('.overlay-checkIn').addClass('active');
        return false;
    });
    $('.close-popup, .close, .closePopup').on("click",function(){
        $('.overlay-checkIn').removeClass('active');
    });
    //end popups

    //проверка формы
    $("form input, textarea").on("change input keyup paste", function() {
        $(this).parent().find(":invalid").length ? ($(this).parent().removeClass("valid"),
        $(this).parent().addClass("invalid")) : ($(this).parent().removeClass("invalid"),
        $(this).parent().addClass("valid"))
    });
    $("form input, textarea").on("invalid", function(event) {
        event.preventDefault();
        $(this).parent().addClass('invalid');
    });
    
    //registration form, next step
    $('.nextStep').on('click', function(){
        $('.step').removeClass('active');
        $('.' + $(this).data('step')).addClass('active');
    });

});


 