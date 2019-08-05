$(document).ready(function(){

    //mobile menu
    $('.toggle-menu').on('click', function () {
        $('#sidebar_menu').toggleClass('show');
    });
    $(document).mouseup(function(e){
        var menu = $('#sidebar_menu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show'); 
        }
    });
    //end mobile menu

    //fixed menu
    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('.header_search').addClass('fixed');
        }
        else {
            $('.header_search').removeClass('fixed');
        }
    });
    //End

    //mobile aacount menu
    $('.open-profile').on('click', function(){
        $('.accountMenu').toggleClass('active');
    });
    $('.close_accountMenu').on('click', function(){
        $('.accountMenu').removeClass('active');
    });
    
    //show/hide search
    $('.mobileSearch').on('click', function(){
        $('.header_top-line').addClass('show');
    });
    $('.searchLine-close').on('click', function(){
        $('.header_top-line').removeClass('show');
    });
    
    //registration popup
    $('.open-registration, .registration, #registration').on("click",function(){
        $('.overlay-registration').addClass('active');
        $('#sidebar_menu.show').removeClass('show');
        $.lockBody();
    });
    $('.close-popup, .close, .closeButton').on("click",function(){
       $('.overlay-registration').removeClass('active');
       $.unlockBody();
   });
   //registration form, next step
   $('.nextStep').on('click', function(){
        $('.step').removeClass('active');
        $('.' + $(this).data('step')).addClass('active');
    });
   //end registration popup

   //login popup
    $('.open-login').on("click",function(){
        $('.overlay-login').addClass('active');
        $.lockBody();
    });
    $('.close-popup, .close, .closeBtn').on("click",function(){
       $('.overlay-login').removeClass('active');
       $.unlockBody();
   });
   //end login popup

   //lock,unlock body на телефоне
   var $docEl = $('html, body'),
   $wrap = $('body'),
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
});


