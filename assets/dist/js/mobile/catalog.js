$(document).ready(function () {

      //При клике, кнопка like становится активной
      $('a.likeBtn').on('click', function(){
        $(this).toggleClass('active');
      });

        //popups
        //Sorting
        $('#sorting').on("click",function(){
            $('.sorting-popup').addClass('active');
            return false;
        });
        //Filtering
        $('#filtering').on("click",function(){
            $('.filtering-popup').addClass('active');
            return false;
        });

        $('.closePopup').on("click",function(){
            $('.overlay').removeClass('active');
        });
        //end popups

        
        jcf.replaceAll();
        //Добавление актива для открытия фильтров
        $('.catalog__filters-title h4').on('click', function(){
            $(this).parent().toggleClass('active');
        });


        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 10000,
            values: [ 575, 7000 ],
            slide: function( event, ui ) {
            $( "#amount" ).val(ui.values[ 0 ]);
            $( "#amount2" ).val(ui.values[ 1 ]);
            }
        });
        $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) );
        $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ) );

});