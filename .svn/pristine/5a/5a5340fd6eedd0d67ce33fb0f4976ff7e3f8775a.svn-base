//导航
$(".nav_tabOne").hover(function () {
    $(this).children(".nav_tabOne_ul").stop(true, true).slideToggle("fast")
})

//首页banner
var swiper = new Swiper('#s1', {
    nextButton: '#swiper-button-next1',
    prevButton: '#swiper-button-prev1',
    autoHeight: true, //enable auto height
    // Enable lazy loading
    //lazyLoading: true,
    autoplay: 5000,
    speed: 1000,
    loop: true
});

//首页最新活动
var swiper2 = new Swiper('#s2', {
    effect: 'fade'
});
$(".ul_activity li").hover(function () {
    $(this).addClass("cur").siblings().removeClass("cur")
    swiper2.slideTo($(this).index(), 1000, false);

})

//首页全球旅拍热门城市
var swiper3 = new Swiper('#s3', {
    autoHeight: true, //enable auto height
    effect: 'fade'
});
$(".ul_global li").hover(function () {
    $(this).addClass("cur").siblings().removeClass("cur")
    swiper3.slideTo($(this).index(), 1000, false);
})


//首页新闻资讯
var swiper4 = new Swiper('#s4', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    nextButton: '#swiper-button-next4',
    prevButton: '#swiper-button-prev4',
    autoplay: 5000
});

//首页好评如潮
var swiper5 = new Swiper('#s5', {
    direction: 'vertical',
    scrollbarHide: true,
    slidesPerView: 4,
    nextButton: '#swiper-button-next5',
    prevButton: '#swiper-button-prev5',
    autoplay: 5000,
    loop: true

});
$("#q_linkBox2 a").mouseover(function () {
    $(this).addClass("hov").siblings().removeClass("hov")
})


//遮罩
$(".ul_work li").hover(function () {
    $(this).addClass("hov")
    $(this).find(".mask").stop(true, true).animate({ "opacity": "1", "top": "0" }, "slow")
}, function () {
    $(this).removeClass("hov")
    $(this).find(".mask").stop(true, true).animate({ "opacity": "0", "top": "-442px" }, "slow")
})

$(".detail_work_ul li").hover(function () {
    $(this).find(".mask").stop(true, true).animate({ "opacity": "1", "top": "0" }, "slow")
}, function () {
    $(this).find(".mask").stop(true, true).animate({ "opacity": "0", "top": "-278px" }, "slow")
})
//遮罩
$(".list_news_li").hover(function () {
    $(this).find(".list_news_mask").stop(true, true).animate({ "opacity": "1", "top": "0" }, "slow")
}, function () {
    $(this).find(".list_news_mask").stop(true, true).animate({ "opacity": "0", "top": "-150px" }, "slow")
})



//弹窗
$("a.fancybox_img").fancybox({ 'padding': 10 });
$("a.fancybox_swf").fancybox({ 'transitionIn': 'fade', 'transitionOut': 'fade', 'speedIn': 600, 'speedOut': 200, 'overlayShow': false, 'padding': 10, 'centerOnScroll': true, 'loop': 0 });

//选项卡
var $div_li = $('div.tab-menu ul li');
$div_li.click(function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	var index = $div_li.index(this);
	$('div.tab-box > div').eq(index).show().siblings().hide();
	
	})