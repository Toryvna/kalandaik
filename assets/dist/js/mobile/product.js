$(document).ready(function () {


    $('.showDetails').on('click', function(){
        $('.description-hide').addClass('show');
    });

    //переключение фото по клику на маленькие картинки
    $('.small-image').on('click', function () {
        var src = $(this).find('img').attr('src');
        $(this).parent().find('.small-image').removeClass('active');
        $(this).addClass('active');
        $('.main-photo').attr('src', src);
    });

    var photoPopup = $('.photo-popup');

    //open gallery by clicking big-image
    $('.js-gallery-trigger').on('click', function () {
        var currentImage = $(this).parent().find('img').attr('src');
        photoPopup.find('.gallery-active-photo').attr('src', currentImage);
        photoPopup.addClass('active');
        setTimeout(function () {
            $('.gallery-active-photo').addClass('visible');
        }, 100);
    });

    //allow clicking on poopup buttons
    $('.photo-popup-button').on('click', function (e) {
        e.stopPropagation();
    });
    //slide photo in photo-popup by clicking left-arrow
    $('.photo-popup-button-prev').on('click', function () {
        var activeSlide = $('.small-image.active');
        var currentBg;
        if (!activeSlide.is(':first-child')) {
            var prevBg = activeSlide.prev().find('.small-image-photo').attr('src');
            activeSlide.removeClass('active').prev().addClass('active');
            currentBg = prevBg;
        } else {
            var lastBg = $('.small-image:last-child').find('.small-image-photo').attr('src');
            activeSlide.removeClass('active');
            $('.small-image:last-child').addClass('active');
            currentBg = lastBg;
        }
        $('.photo-popup').find('.gallery-active-photo').attr('src', currentBg);
    });

    //slide photo in photo-popup by clicking right-arrow
    $('.photo-popup-button-next').on('click', function () {
        var activeSlide = $('.small-image.active');
        var currentBg;
        if (!activeSlide.is(':last-child')) {
            var nextBg = activeSlide.next().find('.small-image-photo').attr('src');
            activeSlide.removeClass('active').next().addClass('active');
            currentBg = nextBg;
        } else {
            var firstBg = $('.small-image:first-child').find('.small-image-photo').attr('src');
            activeSlide.removeClass('active');
            $('.small-image:first-child').addClass('active');
            currentBg = firstBg;
        }
        $('.photo-popup').find('.gallery-active-photo').attr('src', currentBg);
    });

    //closing photo popup
    photoPopup.on('click', function () {
        $(this).removeClass('active');
        $(this).find('.gallery-active-photo').removeClass('visible').attr('src', '');
        var currentPhoto = $('.small-image.active').find('.small-image-photo').attr('src');
        $('.main-photo').attr('src', currentPhoto);
    });

    //count slides
    var counter = 0;
    $('.small-image').each(function( index ) {
        counter = counter + 1;
    });
    if(counter > 4){
        var setCounter = counter - 4;
        $('.product__card_gallery-preview .small-image:nth-child(4)').append('<span>+' + setCounter + '</span>')
    }

    //open gallery by clicking fourth slide
    $('.product__card_gallery-preview .small-image:nth-child(4)').on('click', function () {
        var currentImage = $(this).find('img').attr('src');
        photoPopup.find('.gallery-active-photo').attr('src', currentImage);
        photoPopup.addClass('active');
        setTimeout(function () {
            $('.gallery-active-photo').addClass('visible');
        }, 100);
    });

    //Like/dislike buttons
    $(function() {
        $('.action-btn').click(function() {
          event.preventDefault();
          if($(this).hasClass('active')){
            $(this).removeClass('active');
          } else{
            $(this).parent().find($('.action-btn')).removeClass('active');
            $(this).addClass('active');
          }
        });
    })
    
    //show/hide search
    $('.faq-searchBtn').on('click', function(){
       $('.product__faq-header').addClass('show');
    });
    $('.faq-searchLine_close').on('click', function(){
        $('.product__faq-header').removeClass('show');
    });

    //show all answer
    $('.show-allAnswer').on('click', function(){
        $(this).parent().addClass('show');
        $(this).css('display', 'none');
    });

    //Adding items to the purchase
    $(function() {
        var sumItem = 1;
        $('.product__buyTogether-content-item').each(function( index ) {
            sumItem = sumItem + 1;
        });
        $('#resultItems span').text(sumItem);
        $('.addItem-cart').change(function(){
            if(this.checked){
                sumItem = sumItem + 1;
            }else{
                sumItem = sumItem - 1;
            }
            $('#resultItems span').text(sumItem);
        });
    });

    //Fixed buy buttons
    var topIndex = $('#product__buyButtons').offset().top;
    // var heightIndex = $('#product__buyButtons').height();
    // console.log(topIndex);
    $('#product__buyButtons').addClass('fixed');
    jQuery(document).scroll(function() {
        var scroll = jQuery(this).scrollTop();
        if (scroll < (topIndex - 500)) {
            jQuery('#product__buyButtons').addClass('fixed');
        } else {
            jQuery('#product__buyButtons').removeClass('fixed');
        }
    });

    //open Product details
    $('.open-prodDetails').on("click",function(){
        $('.overlay-prodDetails').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-prodDetails').removeClass('active');
        $.unlockBody();
    });
    //open price details
    $('.open-price').on("click",function(){
        $('.overlay-price').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-price').removeClass('active');
        $.unlockBody();
    });

    //open price details
    $('.open-share').on("click",function(){
        $('.overlay-share').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-share').removeClass('active');
        $.unlockBody();
    });

    //flipkart popup
    $('.open-flipkart').on("click",function(){
        $('.overlay-flipkart').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-flipkart').removeClass('active');
        $.unlockBody();
    });

    //viewPlan popup
    $('.open-viewPlan').on("click",function(){
        $('.overlay-viewPlan').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-viewPlan').removeClass('active');
        $.unlockBody();
    });

    // t&c popup
    $('.open-terms').on("click",function(){
        $('.overlay-terms').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-terms').removeClass('active');
        $.unlockBody();
    });

    //warranty popup
    $('.open-warranty').on("click",function(){
        $('.overlay-warranty').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-warranty').removeClass('active');
        $.unlockBody();
    });

    //Rate product popup
    $('.open-rate').on("click",function(){
        $('.overlay-rate').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close, .closeBtn').on("click",function(){
        $('.overlay-rate').removeClass('active');
        $.unlockBody();
    });
    //end Rate product popup

    //thxs popup
    $('.open-thxs').on("click",function(){
        $('.overlay-thxs').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-thxs').removeClass('active');
        $.unlockBody();
    });
    //end thxs popup

    
    
    

    $('.detailsTab').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.detailsTab').removeClass('active');
        $('.detail-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    $('.accordion__heading').on('click', function(){
        $(this).parent().toggleClass('active');
    });

    $('.paymentTab').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.paymentTab').removeClass('active');
        $('.payment-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //lock,unlock body на телефоне
    var $docEl = $('html, body'),
    $wrap = $('.main'),
    scrollTop;

    $.lockBody = function() {
        if(window.pageYOffset) {
        scrollTop = window.pageYOffset;
        
        $wrap.css({
            top: - (scrollTop)
        });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function() {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

    //копировать в буфер обмена
    $('#copyLink').on('click', function(){
	    var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val(location.href).select();
	    document.execCommand("copy");
	    $temp.remove();
    });
    


});


