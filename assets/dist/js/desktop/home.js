$(document).ready(function(){

    //sliders
    var fullPageBanner = new Swiper('.swiper-fullPage', {
        loop: true,
        disableOnInteraction: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
          },
    });

    var offerSlider = new Swiper('.offer_slider', {
        slidesPerView:7,
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var brendsSlider = new Swiper('.brends_slider', {
        slidesPerView: 4,
        spaceBetween: 18,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var productsSlider = new Swiper('.products_slider', {
        slidesPerView:'auto',
        spaceBetween: 55,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    var productsSlider = new Swiper('.products_slider2', {
        slidesPerView:'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //end sliders

    //countdown
    setInterval(function time(){
        var d = new Date();
        var hours = 24 - d.getHours();
        var min = 60 - d.getMinutes();
        if((min + '').length == 1){
          min = '0' + min;
        }
        var sec = 60 - d.getSeconds();
        if((sec + '').length == 1){
              sec = '0' + sec;
        }
        $('#countdown span').html(hours+'ч '+min+'м осталось')
      }, 1000);
    //end countdown

    //active wish button
    $('.whishBtn').on('click', function(){
        $(this).toggleClass('active');
    });

});