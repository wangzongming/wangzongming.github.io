//banner
var swiper = new Swiper('#s1', {
    autoHeight: true, //enable auto height
    autoplay: 5000,
    speed: 1000,
     pagination: '.swiper-pagination',
        paginationClickable: true,
    loop: true
});

//搜索框
$(".search").click(function(){
	$(".search_input").show();
	$(".search").addClass("on").siblings().removeClass("on");
	
	})
$(".search_btn").click(function(){
	$(".search_input").hide();
	$(".home").addClass("on").siblings().removeClass("on");
	})
	
//项目详情
var $div_li = $('div.tab-menu ul li');
$div_li.click(function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	var index = $div_li.index(this);
	$('div.tab-box > div').eq(index).show().siblings().hide();
})
	
//导航
$(".city").click(function(){
	$(".home_nav").show();
	$(".home_content").css("right","-70%").stop("true","true").animate({right:"0"},500);
	})
$(".home_bg,.hide_btn").click(function(){	
	$(".home_content").css("right","0").stop("true","true").animate({right:"-70%"},500,function(){$(".home_nav").hide();});
	})