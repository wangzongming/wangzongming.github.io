//banner
var swiper = new Swiper('#s1', {
    autoHeight: true, //enable auto height
    autoplay: 5000,
    speed: 1000,
     pagination: '.swiper-pagination',
        paginationClickable: true,
    loop: true
});

// 评论器向上滚动
$(".news").fadeIn("fast", function () {
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

  var nav_swiper = new Swiper('#nav', {
        pagination: '#nav-pagination',
        paginationClickable: true
    });
 