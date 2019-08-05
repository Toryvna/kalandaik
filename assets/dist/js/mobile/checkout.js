$(document).ready(function () {
    //switch url
    function CheckWindow(){
        if (screen.width > 1024) {
            document.location = "../desktop/checkout.html";
        }
    }
    CheckWindow();
    $( window ).resize(function() {
        CheckWindow();
    });
    //end switch url
    
    //increment and decrement buttons
    if($(".inc_dec_btn.dec").val() < 2 ){
        $(".inc_dec_btn.dec").addClass('hide');
    }
    $(".inc_dec_btn").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        $(".inc_dec_btn").removeClass('hide');

        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 2) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                $(this).addClass('hide');
                newVal = 1;
            }
        }

        $button.parent().find("input").val(newVal);
    });

    $( "select" ).selectmenu();


    //показать/скрыть шаги
     $('.step2 .nextStep').on('click', function(){
        $('.step2').removeClass('active').addClass('done');
        $('.step3').addClass('active');
     });
     $('.step2 .change').on('click', function(){
        $('.step').removeClass('active');
        $('.step2').removeClass('done').addClass('active');
     });

     $('.step3 .nextStep').on('click', function(){
        $('.step3').removeClass('active').addClass('done');
        $('.step4').addClass('active');
     });
     $('.step3 .change').on('click', function(){
        $('.step').removeClass('active');
        $('.step3').removeClass('done').addClass('active');
     });

     $('.step4 .nextStep').on('click', function(){
        $('.step4').removeClass('active').addClass('done');
        $('.step1, .step2, .step3, .step4, .result__details, .cart-banner').hide();
        $('.step5').addClass('active');
     });

});