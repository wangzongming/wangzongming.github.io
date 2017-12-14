$(".navBox>ul>li").hover(function () {
	$(this).find(".down-menu").stop().slideDown(100);
}, function () {
	$(this).find(".down-menu").stop().slideUp(100);
})


//侧边栏一级菜单点击出现或者消失事件
$(".left-slide-li").click(function () {
	var me = this
	$(".left-slide-li").removeClass("on")
	$(me).addClass("on").next(".slide-down-menu").slideDown(300);
	$(".left-slide>ul>li .left-slide-li:not(.on)").next(".slide-down-menu").slideUp(300);
})














