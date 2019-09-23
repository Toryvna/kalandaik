$(document).ready(function(){
    
    //show all Review
    $('.readFull').on('click', function(){
        $(this).parent().addClass('show');
        $(this).css('display', 'none');
    });
});  