var errflag = 0;

function checkForm(vale, req, _length) {

	var err = "";

	if(vale == "" || typeof(vale) == "undefined") {

		if(req == 1) {

			err = "数据不能为空！";

			errflag = 1;

			return err;
		}

	}

	if(typeof(_length) != "undefined") {

		if(vale.length > _length) {

			err = "输入长度不能超过" + _length + "个字!";

			errflag = 2;

			return err;

		}

	}

	return err;
}

function initDocForm(jsonStr){
		
			for(var key in jsonStr){
			
				var obj = $("#"+key);
				
				if(obj.is("textarea")){
					//输入框，意见框
					obj.val(jsonStr[key]);
					
				}else if(obj.is("select")){
					//下拉框
					$(obj).val(jsonStr[key]);
					
				}else if(obj.attr("name")=="checkboxItem"){
					//复选框
					var itemArr = jsonStr[key].split("#");
					
					for(var i=0;i<itemArr.length;i++){
						
						$("#"+itemArr[i]).prop("checked",true);
						
					}
				}else if(obj.attr("name")=="radioItem"){
					//单选框					
					$(obj).find("input[value="+jsonStr[key]+"]").prop("checked",true);
					
				}else if(obj.attr("name")=="timeItem"){
					//日期控件
					dArray = jsonStr[key].split("-");
					
					obj.find("select[name=year]").val(dArray[0]);
					
					obj.find("select[name=month]").val(dArray[1]);
					
					obj.find("select[name=day]").val(dArray[2]);
					
				}
			}
			
}

function getSbmtJsonValue() {

	var jsonInnerStr = "";

	//可编辑的下拉取值
	$("[name='selectItem']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var selOption = $(obj).find("option:selected");

		var vale = selOption.val().trim();

		var req = $(obj).attr("req");

		var err = checkForm(vale, req);

		if($(obj).parent().find(".errInfo").length > 0) {

			$(obj).parent().find(".errInfo").text(err);

		} else {

			$(obj).parent().append("<div class=\"errInfo\">" + err + "</div>");

		}

		vale = vale.replace(new RegExp('(["\"])', 'g'),"\\\""); 
		vale = vale.replace(/(\r\n|\n|\r)/gm, '\\n')
		jsonInnerStr += "\""  + code +  "\"" + ":\"" + vale + "\",";

	});

	//可编辑的文本
	$("[name='textareaItem']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var vale = $(obj).val();

		var req = $(obj).attr("req");

		var rqlen = $(obj).attr("rqLength");

		var err = checkForm(vale, req, rqlen);

		if($(obj).parent().find(".errInfo").length > 0) {

			$(obj).parent().find(".errInfo").text(err);

		} else {

			$(obj).parent().append("<div class=\"errInfo\">" + err + "</div>");

		}
		vale = vale.replace(new RegExp('(["\"])', 'g'),"\\\"");
		vale = vale.replace(/(\r\n|\n|\r)/gm, '\\n')
		jsonInnerStr += "\"" + code + "\"" + ":\"" + vale + "\",";
	});

	//可编辑的复选框
	$("[name='checkboxItem']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var vale = "";

		$(obj).find("input[type='checkbox']:checked").each(function(j, obj1) {

			vale += $(obj1).attr("id") + "#";

		});

		vale = vale.substr(0, vale.length - 1);

		var req = $(obj).attr("req");

		var err = checkForm(vale, req);

		if($(obj).parent().find(".errInfo").length > 0) {

			$(obj).parent().find(".errInfo").text(err);

		} else {

			$(obj).parent().append("<div class=\"errInfo\">" + err + "</div>");

		}

		vale = vale.replace(new RegExp('(["\"])', 'g'),"\\\"");
		vale = vale.replace(/(\r\n|\n|\r)/gm, '\\n')
		jsonInnerStr += "\"" + code + "\"" + ":\"" + vale + "\",";
	});

	//可编辑的单选框
	$("[name='radioItem']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var vale = "";

        var checkedObj = $(obj).find("input[type='radio']:checked");

		vale = checkedObj.val();

		var req = $(obj).attr("req");

		var err = checkForm(vale, req);

		if($(obj).parent().find(".errInfo").length > 0) {

			$(obj).parent().find(".errInfo").text(err);

		} else {

			$(obj).parent().append("<div class=\"errInfo\">" + err + "</div>");

		}

		vale = vale.replace(new RegExp('(["\"])', 'g'),"\\\"");
		vale = vale.replace(/(\r\n|\n|\r)/gm, '\\n')
		jsonInnerStr += "\"" + code + "\"" + ":\"" + vale + "\",";
	});

	//可编辑的意见
	$("[name='opinionItem']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var vale = $(obj).val();

		var req = $(obj).attr("req");

		var rqlen = $(obj).attr("rqLength");

		var err = checkForm(vale, req, rqlen);

		if($(obj).parent().find(".errInfo").length > 0) {

			$(obj).parent().find(".errInfo").text(err);

		} else {

			$(obj).parent().append("<div class=\"errInfo topgap\">" + err + "</div>");

		}

		vale = vale.replace(new RegExp('(["\"])', 'g'),"\\\"");
		vale = vale.replace(/(\r\n|\n|\r)/gm, '\\n')
		jsonInnerStr += "\"" + code + "\"" + ":\"" + vale + "\",";
	});

	//可编辑的时间
	$("[name='timeItem']").each(function(i, obj) {

		var code = $(obj).attr("id");

		var yearobj = $(obj).find("[name='year']")[0];

		var year = $(yearobj).find("option:selected").text();

		var monthobj = $(obj).find("[name='month']")[0];

		var month = $(monthobj).find("option:selected").text();

		var dayobj = $(obj).find("[name='day']")[0];

		var day = $(dayobj).find("option:selected").text();

		var vale = year + "-" + month + "-" + day;

		var req = $(obj).attr("req");

		var err = "";

		if(req == 1 && vale == "年-月-日") {

			err = "数据不能为空！";

			errflag = 1;

		}

		if($(obj).find(".errInfo").length > 0) {

			$(obj).find(".errInfo").text(err);

		} else {

			$(obj).append("<div class=\"errInfo\">" + err + "</div>");

		}

		vale = vale.replace(new RegExp('(["\"])', 'g'),"\\\"");
		vale = vale.replace(/(\r\n|\n|\r)/gm, '\\n')
		jsonInnerStr += "\"" + code + "\"" + ":\"" + vale + "\",";
	});

	if(errflag == 1 || errflag == 2) {

		alert("您填写的表单有问题，请检查表单！");

		errflag = 0;

		return 0;

	}

	jsonInnerStr = jsonInnerStr.substr(0, jsonInnerStr.length - 1);

	var jsonStr = "{" + jsonInnerStr + "}";

	return jsonStr;
}