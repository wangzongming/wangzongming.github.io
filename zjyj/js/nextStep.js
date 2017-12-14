function initPersonAndStep(personType,personArray, stepId) {

	var apdHtml = "";
	
    var parentUl = $("#"+personType+"_PersonList");

	for (var i = 0; i < personArray.length; i++) {

		var personId = personArray[i]["userid"];

		var userOrgId = personArray[i]["userOrgid"];

		apdHtml += "<li id='cp_" +personType+"_"+ personId +"_"+userOrgId+ "' personId='" + personId + "' userOrgid='" + userOrgId + "'>" +
			"<span>" + personArray[i]["userText"] + "</span>" +
			"<span class=\"remove-person\" onclick='removePer(\"" +personType+"\",\""+ personId + "\",\""+userOrgId+"\")'><i></i></span>";
			
		var personObj = parentUl.find("#" + personId+"_"+userOrgId);
		
		if (typeof(personObj)!="undefined"&&!personObj.hasClass("current")) {
			
			personObj.addClass("current");

		}

	}

	$("#"+personType+"_chosnPerList").append(apdHtml);

	if (!$("#" + stepId).hasClass("current")) {

		$("#" + stepId).addClass("current");

	}

}

function choseOrNot(personType,userOrgId, personId) {

   var parentUl = $("#"+personType+"_PersonList");
   
	var obj = parentUl.find("#" + personId+"_"+userOrgId);

	if (obj.hasClass("current")) {

		obj.removeClass("current");

		removePer(personType,personId,userOrgId);

	} else {

		obj.addClass("current");

		var apdHtml = "<li id='cp_"+personType+"_" + personId +"_"+ userOrgId + "' personId='" + personId + "' userOrgid='" + userOrgId + "'>" +
			"<span>" + $(obj).text() + "</span>" +
			"<span class=\"remove-person\" onclick='removePer(\""+personType+"\",\"" + personId + "\",\""+userOrgId+"\")'><i></i></span>";

		$("#"+personType+"_chosnPerList").append(apdHtml);

	}
}

function choseOrNotInner(persnId,userOrgId) {

	if ($("#" + persnId+"_"+userOrgId).hasClass("current")) {

		$("#" + persnId+"_"+userOrgId).removeClass("current");

	} else {

		$("#" + persnId+"_"+userOrgId).addClass("current");

	}
}

function removePer(personType,personId,userOrgId) {
	
	var parentUl = $("#"+personType+"_PersonList");
	
	$("#cp_"+personType+"_" + personId + "_" + userOrgId).remove();
	
	parentUl.find("#" + personId + "_" + userOrgId).removeClass("current");
	
}

function contPerson(personType) {

	var userJsonArray = new Array();

	$("#"+personType+"_chosnPerList").children("li").each(function(i, obj) {
		userOrgid = $(obj).attr("userOrgid");
		personId = $(obj).attr("personId");
		userText = $(obj).text();
		userJsonArray[i] = {
			"userid": personId,
			"userOrgid": userOrgid,
			"userText": userText
		};
	});

	return userJsonArray;
}

function contPersonInner() {

	var personArray = new Array();

	$("#persnUlInner").find("span.current").each(function(i, obj) {

		var personId = $(obj).attr("personId");

		var userOrgid = $(obj).attr("userOrgid");

		var userText = $(obj).text();

		personArray[i] = {
			"userid": personId,
			"userOrgid": userOrgid,
			"userText": userText
		};
	});

	return personArray;

}

function mergePersonArray(personArr1, personArr2) {

	var newPersnArray = new Array();

	if (personArr1.length < 1) {

		newPersnArray = personArr2;

		return newPersnArray;

	}

	if (personArr2.length < 1) {

		newPersnArray = personArr1;

		return newPersnArray;

	}

	newPersnArray = personArr2;

	for (var i = 0; i < personArr1.length; i++) {
		
		for (var j = 0; j < newPersnArray.length; j++) {

			var flag = 0;

			if (personArr1[i].userid == newPersnArray[j].userid&&
			    personArr1[i].userOrgid == newPersnArray[j].userOrgid) {

				flag = 1;
				
				break;
			}
			    
		}
		
			if (flag == 0) {

				newPersnArray.push(personArr1[i]);

			}


	}
	return newPersnArray;
}

function choseOrNotStep(id) {

	var obj = $("#" + id);

	if ($(obj).hasClass("current")) {

	} else {

		$("#newxtStepUl").find("li span.current").removeClass("current");

		$(obj).addClass("current");
		
		if(id=="888"){
			
			$("#chosePersonDiv").hide();
			
		}else{
			
			reDrawMembers();
			
			$("#chosePersonDiv").show();
		}

	}

}

function reDrawMembers(){}

function getNextStep() {

	var chosenStep = $("#newxtStepUl").find("span.current")[0];
	
	if(typeof(chosenStep)=="undefined"){
		
		return 0;
		
	}

	var stepId = $(chosenStep).attr("id");
	
	var stepName = $(chosenStep).text();
	
	return {"stepId":stepId,"stepName":stepName};

}