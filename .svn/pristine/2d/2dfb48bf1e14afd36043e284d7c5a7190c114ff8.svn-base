/*
function addSpeakMask(num) {

	var speakCtl = document.getElementById("speak" + num);

	speakCtl.addEventListener("touchstart", function() {
		
		event.preventDefault();
		
		document.getElementById("speakMask" + num).style.display = "block";
		
		var textObj = $("#speakMask" + num).parent().find("textarea");
		
        recordVoice(textObj);
        
	}, false);
	
	speakCtl.addEventListener("touchend", function() {
		
		event.preventDefault();
		
		document.getElementById("speakMask" + num).style.display = "none";
		
		var textObj = $("#speakMask" + num).parent().find("textarea");
		
        endRecord(textObj);
        
	}, false);

}
*/
var path = "";

function setPath(_path){
	
	path = _path;
	
}

function showPopup(id) {

	var offsetHeight = $(".popup").height();

	var topOffset = ($(document.body).height() - offsetHeight + $(document).scrollTop()) / 2;

	$(".popup").css("top", topOffset);

	$("#pop-mask").addClass("pop-mask");

	$("#pop-mask").css("height", $(document).height());

	$("#pop-mask").show();

	$("#"+id).show();


}

function hidPopup() {

	$("#pop-mask").hide();

	$(".popup").hide();
	
}
function singleChosen(pid,id){
	
	var chosenId = "";
	
	var pobj = $("#"+pid);
	
	var obj = $(pobj).find("#"+id);	
	
	if($(obj).hasClass("current")){	
		
		//$(obj).removeClass("current");
		
	}else{
		
		$(pobj).find(".current").removeClass("current");
		
		$(obj).addClass("current");
		
		chosenId = id;
		
	}
	
	return chosenId;
}

function multiChosen(pid,id){
	
	var chosenId = "";
	
	var pobj = $("#"+pid);
	
	var obj = $(pobj).find("#"+id);	
	
	if($(obj).hasClass("current")){	
		
		$(obj).removeClass("current");
		
	}else{
		
		$(obj).addClass("current");
		
		chosenId = id;
	}
	
	return chosenId;
}

function openLoading(){
	
	$("html").css("overflow","hidden");
	
	$("body").css("overflow","hidden");
	
	//var top = ($(document.body).height() - 50 +$(document).scrollTop()) / 2;
	
//	var left = ($(document.body).width() - 50)/2;
	
	
	var loadDiv = "<div class=\"loading1\" id=\"loadingDIV\" \">"+
	             "<img src=\""+path+"/www/client/style1/img/loading.gif\"/></div>";
	
	$("body").append(loadDiv);
	
	$("#loadingDIV").css("top",$(document).scrollTop());
	
	document.ontouchstart=function(){
		return false;
		}
		
}

function closeLoading(){
	
	$("body").css("overflow","auto");
	
	$("#loadingDIV").remove();
	
	document.ontouchstart=function(){
		return true;
		}
}
