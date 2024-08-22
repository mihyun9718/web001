$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrolltop: 0 }, 1000)
    })
});


$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        // dors: true,
        autoplay: true,
        pauseOnHover: false,
        //useTransTransform: falase
    });

    $('.main_visual_slide').on('.afterChange',function(e,s,c){
        $('main.vusual .lnk li'),removeClass('on');
        $('main vusual .lnk li'),eq(c),addClass('on')
    });

})