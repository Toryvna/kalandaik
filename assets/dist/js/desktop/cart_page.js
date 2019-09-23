$(document).ready(function(){
    
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

    //check input   
    $('#checkPincode-btn').on('click', function(e) {
        e.preventDefault();
        if ($('#checkPincode-input').val() =="") {
            $(this).parent().addClass('error');
        }else{
            $(this).parent().removeClass('error');
        }
    })
});