/**
 * Created by george on 9/9/16.
 */

$(document).ready(function(){
    // makes the jumbo element same height as wviewport
    function windowH() {
        var wH = $(window).height();

        $('#home').css({height: wH});
    }
    windowH();

});