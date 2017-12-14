function chosenChairman(pid, id) {

	var chsnId = singleChosen(pid, id);

	var chairman = "主席人选：" + $("#" + chsnId).text();

	if(chsnId != "") {

		$("#chosenChairMam").attr("personId", chsnId);

		$("#chosenChairMam").text(chairman);

	}

}

function chosenPartis(pId, id) {

	var csnId = multiChosen(pId, id);

	if(csnId != "") {

		var obj = $("#" + pId).find("#" + id);

		var apdHtml = "<li id='cp_" + id + "'>" +
			"<span>" + $(obj).text() + "</span>" +
			"<span class=\"remove-person\" onclick ='removePer(\"" + pId + "\",\"" + id + "\")'><i></i></span>";

		$("#chosnPartisList").append(apdHtml);

	} else {

		var parentUl = $("#chosnPartisList");

		$(parentUl).find("#cp_" + id).remove();
	}
}

function removePer(pid, id) {

	var parentUl = $("#chosnPartisList");

	$(parentUl).find("#cp_" + id).remove();

	$("#" + pid).find("#" + id).removeClass("current");

}

function initChairMan(chairmanJson) {

	$("#chosenChairMam").text("主席人选：" + chairmanJson.userName);

	$("#chosenChairMam").attr("personId", chairmanJson.userId);

	var objParti = $("#chairmanList").find("#" + chairmanJson.userId);

	if(objParti) {

		objParti.addClass("current");

	}

}

function initPartis(chosenPersonArray) {

	var apdHtml = "";

	for(var i = 0; i < chosenPersonArray.length; i++) {

		var userId = chosenPersonArray[i].userId;

		var userName = chosenPersonArray[i].userName;

		var objParti = $("#particiList").find("#" + userId);

		if(objParti) {

			objParti.addClass("current");

		}

		apdHtml += "<li id='cp_" + userId + "'>" +
			"<span>" +
			userName +
			"</span>" +
			"<span class=\"remove-person\" onclick ='removePer(\"particiList\",\"" +
			userId + "\")'><i></i></span>";

	}

	$("#chosnPartisList").append(apdHtml);

}

function initForm(meetingDes, roomId, pertype, chosenPerson, orgChairMan, orgPartis) {

	if(meetingDes) {

		$("#meetingDesc").val(meetingDes);

	}
	if(roomId) {

		$("#roomUl1").find("span").removeClass("current");

		$("#roomUl1").find("#" + roomId).addClass("current");
		
		if(roomId!="undefined"){
			
			$("#rmidInput1").val(roomId);
			
		}

	}

	if(orgChairMan && orgChairMan.length > 0) {

		chairman = JSON.parse(orgChairMan);
		
		initChairMan(chairman);
			
	}

	if(orgPartis && orgPartis.length > 0) {

		initPartis(JSON.parse(orgPartis));

	}

}

function getPartis() {

	var personArray = new Array();

	$("#chosnPartisList").find("li").each(function(i, obj) {

		var id = $(obj).attr("id");

		personArray[i] = {
			"userId": id.substr(3, id.length),
			"userName": $(obj).find("span:first").text()
		};

	});

	return personArray;
}

function mergePersonArray(personArr1, personArr2) {

	var newPersnArray = new Array();

	if(personArr1.length < 1) {

		newPersnArray = personArr2;

		return newPersnArray;

	}

	if(personArr2.length < 1) {

		newPersnArray = personArr1;

		return newPersnArray;

	}

	newPersnArray = personArr2;

	for(var i = 0; i < personArr1.length; i++) {

		for(var j = 0; j < newPersnArray.length; j++) {

			var flag = 0;

			if(personArr1[i].userId == newPersnArray[j].userId) {

				flag = 1;

				break;
			}

		}

		if(flag == 0) {

			newPersnArray.push(personArr1[i]);

		}

	}
	return newPersnArray;
}

function initChosenPersons(personArray) {

	for(var i = 0; i < personArray.length; i++) {

		$("#personList").find("#" + personArray[i].userId).addClass("current");

	}

}

function clearRoom(pid) {

	$("#" + pid).find(".current").removeClass("current");

}