$(function(){ 
　 var swiper = new Swiper('#banner', {
        pagination: '#banner-pagination',
        paginationClickable: true
    });
	 var swiper = new Swiper('#view', {
        pagination: '#view-pagination',
        paginationClickable: true
    });
	
	 var swiper = new Swiper('#nav_index', {
        slidesPerView: 3,
        slidesPerColumn: 2,
		slidesPerGroup : 3,
        paginationClickable: true,
		pagination: '#nav_index-pagination',
        spaceBetween: 5
    });
	 var swiper = new Swiper('#doctor', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        //slidesPerView: 3,
        //slidesPerColumn: 2,
		slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 5
    });
		$(".search").click(function(){
		$(this).toggleClass("on");
		$(".search_input").slideToggle();
	})
}); 