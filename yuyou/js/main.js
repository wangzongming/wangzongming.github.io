$(function () {
    $(".navBtn").hover(function () {
        $(this).children(".subNav").stop(true, true).slideToggle();
    })
    $(".index_method .method_btn").hover(function () {
        var index = $(this).attr("data-index");
        $(".index_method .method_btn[data-index=" + index + "]").addClass("on").siblings().removeClass("on");
        $(".index_method .method_img[data-index=" + index + "]").show().siblings().hide();
        $(".index_method .method_p[data-index=" + index + "]").show().siblings().hide();
    })
	$(".advan_ul li,.latest_ul li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		})
	//弹窗

$("a.fancybox_swf").fancybox({ 'transitionIn': 'fade', 'transitionOut': 'fade', 'speedIn': 600, 'speedOut': 200, 'overlayShow': false, 'padding': 10, 'centerOnScroll': true, 'loop': 0 });

    var index_bannerSwiper = new Swiper('.index_banner .swiper-container', {
        loop: true,
        effect: 'fade',
		autoplay : 5000,
        pagination: '.index_banner .swiper-pagination',
        paginationClickable: true,
    })
    var index_productCenterSwiper = new Swiper('.index_productCenter .swiper-container', {
        prevButton: '.index_productCenter .swiper-mybutton-prev',
        nextButton: '.index_productCenter .swiper-mybutton-next',
        slidesPerView: 6,
    })
    var index_patentedSwiper = new Swiper('.index_patented .swiper-container', {
        prevButton: '.index_patented .swiper-button-prev',
        nextButton: '.index_patented .swiper-button-next',
        slidesPerView: 5,
    });
    var productCenterSwiper = new Swiper('.productCenterSwiper .swiper-container', {
        prevButton: '.productCenterSwiper .swiper-mybutton-prev',
        nextButton: '.productCenterSwiper .swiper-mybutton-next',
        slidesPerView: 4,
        slidesPerColumn: 2,
    })
})