$(document).ready(function () {

    //popups
    //Sorting
    $('#sorting').on("click",function(){
        $('.sorting-popup').addClass('active');
        return false;
    });

    //filtering
    $('#filtering').on("click",function(){
        $('.filtering-popup').addClass('active');
        return false;
    });

    $('.closePopup').on("click",function(){
        $('.overlay').removeClass('active');
    });
    //end popups

    //Добавление актива для открытия фильтров
    $('.popupFilters-row h4').on('click', function(){
        $(this).parent().toggleClass('active');
    });

    //Показать все фильтры
    $('#moreFilters').on('click', function(){
        $('.popupFilters-row').css('display', 'block');
    });


    jcf.replaceAll();

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 0, 10000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val(ui.values[ 0 ]);
          $( "#amount2" ).val(ui.values[ 1 ]);
        }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ) );



});