  $(function () {
     var state=false;
  	 var swiper = new Swiper('#banner', {
      autoHeight: true, //enable auto height
      //autoplay: 5000,
      //speed: 1000,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true
    });
    var swiper = new Swiper('#quality', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 15,
		nextButton: '#swiper-button-next',
        prevButton: '#swiper-button-prev',
        freeMode: true
    });
	var swiper = new Swiper('#example', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
		nextButton: '#swiper-button-next1',
        prevButton: '#swiper-button-prev1',
        freeMode: true
    });
	$(".search").click(function(){
		$(this).toggleClass("on");
		$(".search_input").slideToggle();
	})
	$(".menu,.nav").click(function(){
		if(state){
		$(".menu").removeClass("on");
		state=false;
		$("html").css("overflow-y","auto");
			$(".nav_swift").transition({x:'0'},function(){
				$(".nav").fadeOut('fast');
				});
		 }
		else{ 
		$(".menu").addClass("on");
		state=true;
		$("html").css("overflow","hidden");
		$(".nav").fadeIn( 'fast',function(){
			$(".nav_swift").transition({x:'-19rem'});
			}
			
		);}
		
	})
	
	$(".follow,.nav_code").click(function(){
		if(state){state=false;$(".nav_code").fadeOut();}
		else{state=true;$(".nav_code").fadeIn();}
		
	})
	
  })