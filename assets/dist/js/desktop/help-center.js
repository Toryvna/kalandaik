$(document).ready(function(){
    //switch url
    function CheckWindow(){
        if (screen.width <= 1024) {
            document.location = "../mobile/help-center.html";
        }
    }
    CheckWindow();
    $( window ).resize(function() {
        CheckWindow();
    });
    //end switch url
    
    $('.innerTabs .innerTab').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.innerTabs .innerTab').removeClass('active');
        $('.innerTab-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    $('.accordion__heading').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });
});