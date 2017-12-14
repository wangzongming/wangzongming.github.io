$(document).ready(function () {
	//微信扫码
	weixin();
	//二维码扫码下载
	pr();	
}); 
//二维码扫码下载
function pr(){
	$("#openDown").click(function(){
		$("#payer").load("temp/pr.html",function(responseTxt,statusTxt,xhr){
			if(statusTxt=="success") {
				prCallback();	
			}
			if(statusTxt=="error") {
				alert("加载失败");
			}
		});
	});
}
function prCallback(){
			$("#payer").show();
			$("#prImg em").removeClass();
			$(".down_list").removeClass("animation_close");
			$(".down_list").addClass("animation_open");
        	$("#closePayer").click(function(){
				
				$(".down_list").removeClass("animation_open");
				$(".down_list").addClass("animation_close");
				setTimeout("$('#payer').hide()",700 )
			});
	
			$("#downList li").mousemove(function(){
				var index = $(this).attr("index");
				if (index){
					$("#prImg em").removeClass();
					$("#prImg em").addClass("index_" + index);
				}
				
			})	
}
//微信扫码
function weixin(){
	$("#weixin").mouseover(function(){
		$(this).addClass("current");
		$("#weixin_code").show();
			
	});
	$("#weixin").mouseout(function(){
		$(this).removeClass("current");
		$("#weixin_code").hide();
	});
}

//首页loading加载
function loading(){
		$("#loading").hide();
}



// 加入收藏
function shoucang(sTitle,sURL) 	{ 
	try 
		{ 
		window.external.addFavorite(sURL, sTitle); 
		} 
	catch (e) 
		{ 
		try 
		{ 
	window.sidebar.addPanel(sTitle, sURL, ""); 
		} 
		catch (e) 
		{ 
		alert("加入收藏失败，请使用Ctrl+D进行添加"); 
		} 
	} 
} 
