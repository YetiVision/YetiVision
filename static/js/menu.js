$(function() { var logo = $(".lrg-Jimmy"); $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        if(!logo.hasClass("sml-Jimmy")) {
            // Jimmy.hide();
            logo.removeClass('lrg-Jimmy').addClass("sml-Jimmy").fadeIn( "slow");
        }
    } else {
        if(!logo.hasClass("lrg-Jimmy")) {
            // Jimmy.hide();
            logo.removeClass("sml-Jimmy").addClass('lrg-Jimmy').fadeIn( "slow");
        }
    }

});
});