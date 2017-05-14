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

    var wh = $(window).height();


    setTimeout(function(){
        $('html').animate( { scrollTop: 100 }, 1100 );
    }, 5000);
    setTimeout(function(){

        $('.js-sprite').removeClass('animated').css({
            'transform':'translateY(100%)',
            'background-image' : "url(images/falls.png)"
        });
        
        $('.js-swipe').css({'transform':'translateX(100vw)'});

        $("html, body").animate({ scrollTop: wh }, 600);

        setTimeout(function(){
            
            $('.js-sprite').css({
                "background-image" : "url(images/is_worth21.png)"
            });
            setInterval(function(){
                step();
            }, 1000);
        }, 1000)
    }, 15000)
}

function step(){
    setTimeout(function(){
        $('.js-sprite').css({
            "background-image" : "url(images/is_worth21.png)"
        })
    }, 500)
    $('.js-sprite').css({
        "background-image" : "url(images/hit1.png)"
    })
}