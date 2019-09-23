$(document).ready(function(){

    jcf.replaceAll();

    //check input   
    $('#checkPincode-btn').on('click', function(e) {
        e.preventDefault();
        if ($('#checkPincode-input').val() =="") {
            $(this).parent().addClass('error');
        }else{
            $(this).parent().removeClass('error');
        }
    })

    //устанавливаем значение для рейтинка
    $('.single-chart').each(function( index ){
        var value = $(this).find('.percentage').text() / 0.05;
        $(this).find('.circular-chart .circle').attr('stroke-dasharray',value)
    });

    //Liki/dislike buttons
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
    });

    //View Details btn
    $('.viewDetails').on('click', function(){
        $(this).css('display', 'none');
        $('.detailsList').addClass('active');
    });

    //Show "Display" text
    $('.show-hiddenText').on('click', function(){
        $('.hiddenText').addClass('show');
        $(this).parent().hide();
    });
 
    //Show all comment text
    $('.showComments').on('click', function(){
        $(this).parent().addClass('show');
    });

    //Show all specifications
    $('.allSpecifications').on('click', function(){
        $('.hideSpecifications').addClass('show');
    });

    //load more comments
    $(function() {
        $('.comment, .faq-item').hide();
        $('.comment').slice(0,3).show();
        $('.faq-item').slice(0,3).show();
    });
    $('.load-more-reviews').on('click', function(){
        $('.comment').show();
    });
    $('.load-more-faq').on('click', function(){
        $('.faq-item').show();
    });

    

    //whish button
    $('.whishBtn').on('click', function(){
        $(this).toggleClass('active');
    });

    //tabs
    $('.tabgroup > div').addClass('hide').hide();
    $('.tabgroup > div:first-of-type').removeClass('hide').addClass('show').show();
    $('.tabs a').on("click touch", function (e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').removeClass('show').addClass('hide').hide();
        $(target).removeClass('hide').addClass('show').show();

    });

    //open T&C
    $('.show-tc').on('click', function(){
        $('.tc-popup').addClass('active');
    });
    $(document).mouseup(function(e){
        var item = $('.tc-popup.active');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('active');
        }
    });

    //warranty Details
    $('.open-warrantyDetails').on("click",function(){
        $('.overlay-warrantyDetails').addClass('active');
        return false;
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-warrantyDetails').removeClass('active');
    });
    //end warranty Details

    //view plans
    $('.open-viewPlans').on("click",function(){
        $('.overlay-viewPlans').addClass('active');
        return false;
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-viewPlans').removeClass('active');
    });
    //end view plans

    //compare popup
    $('.open-compare').on("click",function(){
        $('.overlay-compare').addClass('active');
        return false;
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-compare').removeClass('active');
    });
    //end compare popup

    //flipkart popup
    $('.open-flipkart').on("click",function(){
        $('.overlay-flipkart').addClass('active');
        return false;
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-flipkart').removeClass('active');
    });
    //end flipkart popup

    //Rate product popup
    $('.open-rate').on("click",function(){
        $('.overlay-rate').addClass('active');
        return false;
    });
    $('.close-popup, .close, .closeBtn').on("click",function(){
        $('.overlay-rate').removeClass('active');
    });
    //end Rate product popup

    //thxs popup
    $('.open-thxs').on("click",function(){
        $('.overlay-thxs').addClass('active');
        return false;
    });
    $('.close-popup, .close').on("click",function(){
        $('.overlay-thxs').removeClass('active');
    });
    //end thxs popup
    

    $('.filter-top .filter-items').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.filter-top .filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        $('.flex-wrap.action').removeClass('action');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
        $('.' + dataTab).find('.flex-wrap').addClass('action');
    });

    $('.innerTabs .innerTab').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.action .innerTabs .innerTab').removeClass('active');
        $('.action .innerTab-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //popup tables
    $('.table__heading').on('click', function(){
        $(this).parent().toggleClass('show');
    });

    //sliders
    var productsSlider = new Swiper('.products_slider', {
        slidesPerView:'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        direction: 'vertical',
        slidesPerView: 7,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    $('.gallery-thumbs .swiper-slide ').on('click', function(){
        $('.gallery-thumbs .swiper-slide').removeClass('swiper-slide-active');
        $(this).addClass('swiper-slide-active');
        $('#topImg').attr('src', $(this).find('img').data('url'));
        $('.topImg').find('#topImg-lens').remove();
        $('#preview1').find('img').remove();
        zoomImg();
        
    });

    function zoomImg(){
        var evt = new Event(),
        m = new Magnifier(evt);
        m.attach({
            thumb: '#topImg',
            largeWrapper: 'preview1',
            zoom: 2,
            zoomable: false,
        });
    }
    zoomImg();
    


});