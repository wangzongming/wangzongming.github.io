//自适应
function rehtmlsize() {
    var width = $(window).width();
    if (width > 1024) {
        width = 640;
    }
    var fontSize = width / 640 * 100;
    $("html").css("font-size", fontSize + "px")
}
//初始化
$(function () {
    rehtmlsize();
    $(".page").fadeIn("fast", function () {
        setInterval(function () {
            $(".newsFlip-li.cur").addClass("ani_1");
            $(".newsFlip-li.cur").next(".newsFlip-li").addClass("ani_2");
            setTimeout(function () {
                var $item = $(".newsFlip-li.cur");
                var $item_next = $item.next(".newsFlip-li");
                $item.removeClass("ani_1").removeClass("cur");
                $item_next.removeClass("ani_2").addClass("cur");
                $item.appendTo($(".newsFlip-ul"));
            },2000)
        }, 4000)     
    });
    var banner_swiper = new Swiper('#banner_swiper', {
        pagination: '#banner_swiper .swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 2000
    });
    var advert_swiper = new Swiper('#advert_swiper', {
        slidesPerView: 'auto'
    });
    var case_swiper = new Swiper('#case_swiper', {
        pagination: '#case_swiper .swiper-pagination',
        slidesPerView: 4,
        slidesPerGroup: 4,
        paginationClickable: true,
    });

    $(window).scroll(function () {//页面滚动控制返回顶部按钮显示
        if ($("body").scrollTop() > 150) {
            $(".return_top").stop(true, true).fadeIn();
        } else {
            $(".return_top").stop(true, true).fadeOut();
        }
    });

    $(".return_top").click(function () {//返回顶部
        $("body").stop(true, true).animate({ "scrollTop": 0 })
    })
    $(window).resize(function () {//窗口改变
        rehtmlsize();//重置页面尺寸
if(banner_swiper){
banner_swiper.update();//更新swiper
}
if(advert_swiper){
    advert_swiper.update();//更新swiper
}
if(case_swiper){
    case_swiper.update();//更新swiper
}       

    })
})
