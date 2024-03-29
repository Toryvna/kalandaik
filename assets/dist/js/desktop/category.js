$(document).ready(function(){

        //show all items
        $(".showAll").on('click', function(){
            $(this).parent().addClass('active');
            $(this).css('display', 'none');
        });

      jcf.replaceAll();

      //При клике, кнопка like становится активной
      $('a.likeBtn').on('click', function(){
          $(this).toggleClass('active');
      });
      
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

      //brends slider
      var offerSlider = new Swiper('.brends_slider', {
        slidesPerView:7,
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
     });
   
     //product
     var productsSlider = new Swiper('.products_slider', {
        slidesPerView:'auto',
        spaceBetween: 13,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
     });

     //show all Review
    $('.readFull').on('click', function(){
        $(this).parent().addClass('show');
        $(this).css('display', 'none');
    });



  });