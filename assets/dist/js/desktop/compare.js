$(document).ready(function(){
    //switch url
    function CheckWindow(){
        if (screen.width <= 1024) {
            document.location = "../mobile/compare.html";
        }
    }
    CheckWindow();
    $( window ).resize(function() {
        CheckWindow();
    });
    //end switch url
    
    //show all Review
    $('.readFull').on('click', function(){
        $(this).parent().addClass('show');
        $(this).css('display', 'none');
    });
});