
//自适应
"user strict"
//全局变量
var banner_swiper,
    ing = {//正在执行的状态
        resize: false,
        update: false,
        side: false
    }



//重置页面尺寸
function rehtmlsize() {
    ing.resize = true;
    var win_w = $(window).width();
    $("html").css("font-size", Math.min(win_w, 768) / 640 * 100 + "px");

    if (banner_swiper) {
        banner_swiper.update();
    } else {
        banner_swiper = new Swiper('#index_swiper', {
            autoHeight: true,
            paginationClickable: true,
            loop: true,
            autoplay: 2000
        });
    };
    ing.resize = false;
}


$(function () {
    rehtmlsize();
    $(window).resize(function () {//窗口改变
        rehtmlsize();//重置页面尺寸
    });
})