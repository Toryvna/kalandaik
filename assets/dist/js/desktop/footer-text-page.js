$(document).ready(function(){
    //switch url
    function CheckWindow(){
        if (screen.width <= 1024) {
            document.location = "../mobile/footer-text-page.html";
        }
    }
    CheckWindow();
    $( window ).resize(function() {
        CheckWindow();
    });
});