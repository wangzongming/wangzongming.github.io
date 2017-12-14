//导航
$(".nav_tabOne").hover(function () {
    $(this).children(".nav_tabOne_ul").stop(true, true).slideToggle("fast")
})

//首页banner
var swiper = new Swiper('#s1', {
	pagination: '.swiper-pagination',
    nextButton: '#swiper-button-next1',
    prevButton: '#swiper-button-prev1',
    autoHeight: true, //enable auto height
    autoplay: 5000,
    speed: 1000,
    loop: true,
    paginationClickable: true,
	 spaceBetween: 30
});

//首页最新活动
 var swiper = new Swiper('#s2', {
        pagination: '.swiper-pagination',
		 nextButton: '#swiper-button-next2',
         prevButton: '#swiper-button-prev2',
        slidesPerView: 4,
        slidesPerColumn: 3,
        paginationClickable: true,
       
    });
//遮罩 
$(".imgbox , .imgbox_find").hover(function () {
    $(this).find(".mask").stop(true, true).fadeIn();
}, function () {
    $(this).find(".mask").stop(true, true).fadeOut();
})
//产品展示切换
$(".small_div img").click(function(){
	$("#big_div").attr("src",$(this).attr("big"));
	$(this).parent().addClass("checked").siblings().removeClass("checked");
	})


//顶部二维码
$(".top_icon").hover(function () {
	
    $(this).find(".code_alert").stop(true, true).fadeIn();
}, function () {
    $(this).find(".code_alert").stop(true, true).hide();
})

//返回顶部
window.onload = function(){
  var oTop = document.getElementById("to_top");
  var screenw = document.documentElement.clientWidth || document.body.clientWidth;
  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
  oTop.style.left = screenw - oTop.offsetWidth +"px";
  oTop.style.top = screenh - oTop.offsetHeight + "px";
  window.onscroll = function(){
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
  }
  oTop.onclick = function(){
    document.documentElement.scrollTop = document.body.scrollTop =0;
  }
}  
//二级菜单
$(".nav_right li").hover(function () {
  $(this).find(".second").stop(true, true).show().addClass("on");
}, function () {
    $(this).find(".second").stop(true, true).hide();
});
  /* $(".second").mouseover(function () {
    $(this).stop(true, true).show();
	$(this).parent().addClass("checked");
})
 $(".second").mouseout(function () {
    $(this).stop(true, true).hide();
	$(this).parent().removeClass("checked");
})*/
/* $(".second").hover(function () {
    $(this).stop(true, true).show();
}, function () {
	
    $("this").stop(true, true).hide();
})*/