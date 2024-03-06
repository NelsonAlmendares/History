$(function() {
    if ($('#stiky').length) {
        var el = $('#stiky');
        var stikyTop = $('#stiky').offset().top;
        var stikyHeight = $('#stiky').height();

        $(window).scroll(function(){
            var limit = $('#footer').offset().top - stikyHeight -20;

            var windowTop = $(window).scrollTop();

            if (stikyTop < windowTop) {
                el.css({
                    position: 'fixed',
                    top: 0
                });
            } else {
                el.css('position', 'static');
            }

            if (limit > windowTop) {
                var diff = limit - windowTop;
                el.css({
                    top: diff
                });
            }
        });
    }
});