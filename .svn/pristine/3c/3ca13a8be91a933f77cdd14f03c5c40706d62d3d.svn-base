var condstr = "";
function getCondition() {

	var jsonInnerStr = "";

	$("[name='inputTxt']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var val = $(obj).val().trim();
		
		var cName = $(obj).parent().prev().text();
		

		jsonInnerStr += code + ":'" + val + "',";
		
		condstr += cName + "--" + val + " | ";
		
	});

	$("[name='checkboxField']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var vale = "";
		
		var cName = $(obj).prev().text();
		
		var cStr = "";

		$(obj).find(".checked").each(function(j, obj1) {

			vale += $(obj1).attr("id") + "~";

            cStr += $(obj1).text() + ",";
            
		});

		vale = vale.substr(0, vale.length - 1);

		jsonInnerStr += code + ":'" + vale + "',";
		
		cStr = cStr.substr(0, cStr.length - 1);
	
	    condstr += cName + "--" + cStr + " | ";

	});
	if(jsonInnerStr.length > 1) {

		jsonInnerStr = jsonInnerStr.substr(0, jsonInnerStr.length - 1);
       
	}

	jsonInnerStr = "{" + jsonInnerStr + "}";
	
	return jsonInnerStr;

}

function getCondStr(){
	
	if(condstr.length > 1){
		
		condstr = condstr.substr(0, condstr.length - 3);
		
	}
	
	return condstr;
}

function checkOrNot(id) {

	var obj = $("#" + id);

	if(obj.hasClass("checked")) {

		obj.removeClass("checked");

	} else {

		obj.addClass("checked");

	}

}

function configCond(mixCond, condition) {

	if(typeof(mixCond) != "undefined") {

		$("#searchInput").val(mixCond);

		$("#innerSearchInput").val(mixCond);

	}

	if(typeof(condition) != "undefined") {

		var start = condition.indexOf("{");
		var end = condition.lastIndexOf("}");
		var condObj = "";

		if(start > -1 && end > -1 && end > start) {

			condObj = condition.substr(start + 1, end - 1);

		}

		condObjArray = condObj.split(",");

		for(var t = 0; t < condObjArray.length; t++) {

			var idx = condObjArray[t].indexOf(":");

			var reg1 = new RegExp("'", "g");

			var reg2 = new RegExp("\"", "g");

			var key = condObjArray[t].substr(0, idx).replace(reg1, "").replace(reg2, "");

			var value = condObjArray[t].substr(idx + 1, condObjArray[t].length).replace(reg1, "").replace(reg2, "");

			var obj = $("#" + key);

			if(obj.hasClass("control-checkbox")) {

				valArray = value.split("~");

				for(var i = 0; i < valArray.length; i++) {

					$("#" + valArray[i]).addClass("checked");
				}

			} else {

				obj.val(value);

			}
		}

	}

}

function showHidDIV(id) {

	if($("#" + id).css("display") != "none") {

		//	$("body").css("overflow","hidden");
	} else {

		$('html,body').animate({
			scrollTop: 0
		}, 100);

		$('html').addClass('scrollFix');
		
		$("#" + id).show();
	}
}

function hidDIV(id) {
	
	$('html').removeClass('scrollFix');
	
	$("#" + id).hide();
	
}
