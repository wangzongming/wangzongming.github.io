$(function(){ 
　 var swiper = new Swiper('#banner', {
        pagination: '#banner-pagination',
        paginationClickable: true
    });
	
		$(".more").click(function(){
		$(this).parent().toggleClass("hide");
	})
}); 