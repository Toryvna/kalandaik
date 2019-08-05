$(document).ready(function(){
  //switch url
    function CheckWindow(){
        if (screen.width > 1024) {
            document.location = "../desktop/index.html";
        }
    }
    CheckWindow();
    $( window ).resize(function() {
        CheckWindow();
    });
    //end switch url

    //sliders
    var fullPageBanner = new Swiper('.swiper-fullPage', {
        loop: true,
        initialSlide:1,
        spaceBetween: 3,
        slidesPerView:'auto',
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
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


});