var pauloMed = {
    init: function () {
        this.initCache();
        this.initEvents();
    },
    initCache: function () {
        this.$body = $('body');
    },
    initEvents: function () {
        var _this = this;
    },
};



$(document).ready(function () {
    pauloMed.init();
    $(window).resize(function () {
    });
    $(window).scroll(function () {
    });



});

window.onload = function() {

    setTimeout(function(){
        setTimeout(function(){
            $('.js-falls-girl').css({
                'opacity' : '0'
            })
            $('.js-girl').addClass('animated').css({
                'opacity' : '1'
            });
        }, 1000)
        $('.js-falls-girl').css({
            'transform' :'translateY(0%)'
        });
        
    }, 5000);
    setTimeout(function(){

        $('.js-girl').css({
            'opacity' : '0'
        });
        $('.js-falls-girl').css({
            'transform':'translateY(100%)',
            'opacity' : '1'
        });
        
        $('.js-swipe').css({'transform':'translateX(100vw)'});
    }, 15000)
    
//     var ww = $(window).width();
//     var wh = $(window).height();
//     var ph = document.getElementById("main");
//     var paper = Raphael(0, 0, ww, wh);

//     var c = paper.image("images/bus.svg", ww/2, wh/2, 30, 30, .2);
//     c.attr({opacity: 0.3});
//     c.animate({
//         opacity: .8,
//         x: ww/2,
//         y: wh/2,
//         width: 100,
//         height: 100
//     }, 2000);


}
