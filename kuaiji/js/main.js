var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '#swiper-button-next',
    prevButton: '#swiper-button-prev',
    autoplay:5000,
	speed:1500,
	paginationClickable: true
});


$(".nav_li").hover(function(){
	$(this).children(".second_nav_con").show();
	
	},function(){
	 $(this).children(".second_nav_con").hide();
	})

