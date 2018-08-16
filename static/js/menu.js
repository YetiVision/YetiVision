$(function() { var logo = $(".lrg-jimmy"); $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        if(!logo.hasClass("sml-jimmy")) {
            // jimmy.hide();
            logo.removeClass('lrg-jimmy').addClass("sml-jimmy").fadeIn( "slow");
        }
    } else {
        if(!logo.hasClass("lrg-jimmy")) {
            // jimmy.hide();
            logo.removeClass("sml-jimmy").addClass('lrg-jimmy').fadeIn( "slow");
        }
    }

});
});