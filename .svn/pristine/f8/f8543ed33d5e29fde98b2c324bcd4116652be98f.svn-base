
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
        banner_swiper = new Swiper('#banner_swiper', {
            pagination: '#banner_swiper .swiper-pagination',
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

    $(".list-table").on("click", ".list-add", function () {
        if (!ing.side) {
            ing.side = true;
            var me = this;
            var data_id = $(this).attr("data-id");
            console.log("打开ID为" + data_id + "详情")
            $("#side-page").show().stop(true, true).transition({ "opacity": 1 });
            $("#side-page .side-dialog").stop(true, true).transition({ x: "0rem" }, "600", "snap")
        }
    })
    $("#side-page").on("click", ".side-bg", function () {
        if (ing.side) {
            $("#side-page .side-dialog").stop(true, true).transition({ x: "5rem" }, "ease");
            $("#side-page").stop(true, true).transition({ "opacity": 0 }, function () {
                ing.side = false;
                $(this).hide();
            });
        }
    })


})