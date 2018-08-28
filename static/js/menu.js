$(function() { var logo = $(".lrg-logo"); $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        if(!logo.hasClass("sml-logo")) {
            // jimmy.hide();
            logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
        }
    } else {
        if(!logo.hasClass("lrg-logo")) {
            // jimmy.hide();
            logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
        }
    }
});
});