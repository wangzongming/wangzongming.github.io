$(function(){
	$("#myModal").on("shown.bs.modal",function(){
		$("#ewash-video")[0].play();
	})
	$("#myModal").on("hide.bs.modal",function(){
		$("#ewash-video")[0].pause();
	})
	
	$(".cust-menu .dropdown.cust-dropdown").hover(function(e){
		$(".cust-logo-area").addClass("active");
		$("header nav.navbar").addClass("active");
	},function(e){
		$(".cust-logo-area").removeClass("active");
		$("header nav.navbar").removeClass("active");
		
	})
	
	$(".cust-gotop").on("click",function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	})
});
