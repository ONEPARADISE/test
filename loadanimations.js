var off = "d-none";
var on = "animate__animated";
$(window).on('load', function () {
    $('.loading-window').fadeOut().end().delay(400).fadeOut('slow');
    $('.web-site').removeClass(off);
    $('.loading-window').removeClass(off);

$(function () {

    setTimeout(() => {
        $('.navbar').removeClass(off);
        $('.navbar').addClass(on);
    }, 500);

    setTimeout(() => {
        $('.socials').removeClass(off);
        $('.socials').addClass(on);
    }, 1200);
    setTimeout(() => {
        $('.hometitle').removeClass(off);
        $('.hometitle').addClass(on);
    }, 2000);

    setTimeout(() => {
        $('.start').removeClass(off);
        $('.start').addClass(on);
        $('.download').removeClass(off);
        $('.download').addClass(on);
    }, 2200);

    setTimeout(() => {
        $('.scroll').removeClass(off);
        $('.scroll').addClass(on);
    }, 2600);

    var info = false;
    var gadgets = false;



    $(window).scroll(function () {
        var windowHeight = $(window).innerHeight();

        if (scrollY >= (windowHeight / 2.5) && info === false) {





            info = true;
            setTimeout(() => {
                $('#info .secimg').removeClass(off);
                $('#info .secimg').addClass(on);
                $('.carousel').removeClass(off);
                $('.carousel').removeClass(on);

            }, 0);

            setTimeout(() => {
                $('.block-1').removeClass(off);
                $('.block-1').addClass(on);
                $('.title').removeClass(off);
            }, 500);
            setTimeout(() => {
                $('.sultan').removeClass(off);
                $('.sultan').addClass(on);
                $('.scroll').addClass(off);
            }, 800);
            setTimeout(() => {
                $('.after-text').removeClass(off);
                $('.after-text').addClass(on);
            }, 1000);
            setTimeout(() => {
                $('.carousel-control-prev').removeClass(off);
                $('.carousel-control-prev').addClass(on);
                $('.carousel-control-next').removeClass(off);
                $('.carousel-control-next').addClass(on);
                
            }, 1100);
            setTimeout(() => {
                $('.progress').removeClass(off);
                $('.progress').removeClass(off);
                $('.progress').removeClass(off);
                $('.progress').removeClass(off);
                $('.pprogress').removeClass(off);
                $('.prg0').addClass(on);
                $('.prg25').addClass(on);
                $('.prg50').addClass(on);
                $('.prg75').addClass(on);
                $('.prg100').addClass(on);
            }, 1200);






        }
        if (scrollY >= (windowHeight * 1.3) && gadgets === false) {
            gadgets = true;
            setTimeout(() => {
                $('#gadgets .secimg').removeClass(off);
                $('#gadgets .secimg').addClass(on);
            }, 0);

            setTimeout(() => {
                $('.rawname').removeClass(off);
                $('.rawname').addClass(on);
            }, 200);
      

            setTimeout(() => {
                $('.gr').removeClass(off);
                $('.gr').addClass(on);

            }, 700);
            setTimeout(() => {
                $('footer').removeClass(off);
                $('footer').addClass(on);

            }, 900);

         





        }
    });
})
});


