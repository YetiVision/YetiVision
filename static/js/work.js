var gameHomeOverlay;

/* this has to be one of the last things fired */

$(document).ready(function() {

    gameHomeOverlay = new gameOverlay;

});

/* main function */

function gameOverlay() {
    var self = this;

    /*getting the direction */

    this.getDirection = function(ev, obj) {
        var w = obj.offsetWidth,
            h = obj.offsetHeight,
            x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
            y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
            d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

        return d;
    };

    /* after getting the direction assign the appropriate class */

    this.assignClass = function(ev, obj, state) {
        var direction = self.getDirection(ev, obj),
            class_suffix = "";
        switch (direction) {
            case 0:
                class_suffix = '-top';
                break;
            case 1:
                class_suffix = '-right';
                break;
            case 2:
                class_suffix = '-bottom';
                break;
            case 3:
                class_suffix = '-left';
                break;
        }
        $(obj).removeClass().addClass(state + class_suffix + ' game-tile game-animate');
    };

    /* check to see if its ie8 or 9 and do nothing if it is, ie 8/9 wont support the animation transition */

    if (window.navigator.userAgent.indexOf('MSIE 8.0') > -1 || window.navigator.userAgent.indexOf('MSIE 9.0') > -1) {

    } else {

        /* if not ie, remove the displayNone class */

        $('.game-animate').each(function() {

            $(this).removeClass('displayNone');

            $(this).mouseenter(function(ev) {
                gameHomeOverlay.assignClass(ev, this, 'in');
            });
            $(this).mouseleave(function(ev) {
                gameHomeOverlay.assignClass(ev, this, 'out');
            });

        });

    }

}