$(document).ready(function(){
    
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