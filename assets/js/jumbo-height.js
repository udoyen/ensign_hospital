$(document).ready(function(){
    // makes the jumbo element same height as wviewport
    function windowH() {
        var wH = $(window).height();
    
        $('#header-jumbo').css({height: wH});
    }
    windowH();
    
});