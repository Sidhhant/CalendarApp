var eventBox = ""
eventBox += '<div class="today_eventBox">'+
					'<span class="eventNameToday">Event 1</span>'+
					'<span class="eventTimeToday">2p</span>'+
				'</div>'

function addDiv() {
	$(".today_date").append(eventBox);
	var pos = $(".today_date").position();
	var width = $(".createEventBox").outerWidth();
	var wid = $(".today_date").outerWidth();
	var height = $(".createEventBox").outerHeight();
	var l = pos.left;

	if(l>=670)
	{
		var left = (pos.left - width) + "px";
	}
	else {var left = (pos.left + wid) + "px";}

	var t = pos.top;
	
	if(t<430)
	{
		var top = (pos.top - 70) + "px";
	}
	else{var top = (pos.top + 200 - height) + "px";}

	$(".createEventBox").css({
		position: "absolute",
		top: top,
		left: left
	}).show();
}


$(".today_date").on('click', function(e){
   if(e.target == this){
   		addDiv();
   }
});



function createEv(){
	if($(".createEventBox").hasClass("update"))
	{
		updateEvent();
	}
	else
	{
	var data = {
		'name': $('input[name=name]').val(),
		'location': $('input[name=location]').val(),
		'start_date': $('input[name=start_date]').val(),
		'start_time': $('input[name=start_time]').val(),
		'end_date': $('input[name=end_date]').val(),
		'end_time': $('input[name=end_time]').val(),
		'description': $('input[name=description]').val(),
	};

	$.ajax({
		url: 'CreateEvent/',
		type: "GET",
		data: data,
		success:function(data) {
      		//console.log(data);
      		afterSubmit(data);
      	},

	});

	}
}

function hide_Event() {
	if($(".createEventBox").hasClass("update"))
	{
		$(".createEventBox").hide();
		$(".createEventBox").removeClass("update")	
	}
	else{
		$(".createEventBox").hide();
		$(".today_date > .today_eventBox:last-child").remove();	
	}
	
}

function hide_viewEvent() {
	$(".showEventBox").hide();
	//$(".today_date > .today_eventBox:last-child").remove();
}

function afterSubmit(data){
	$(".createEventBox").hide();
	console.log(data.name);
	$(".today_eventBox:last-child > .eventNameToday").html(data.name);
	$(".today_eventBox:last-child > .eventTimeToday").html(data.start_time);
	$(".eventNameInput").val("");
	$(".locationInput").val("");
	$(".descriptionInput").val("");
	$(".today_eventBox:last-child").attr('id', 'event'+data.id);
	$("#event"+data.id).on('click',function(){ viewEvent(data.id) });
}

function viewEvent(event_id){
	//console.log(event_id);
	var pos = $(".today_date").position();
	var width = $(".showEventBox").outerWidth();
	var wid = $(".today_date").outerWidth();
	var height = $(".showEventBox").outerHeight();
	var l = pos.left;

	if(l>=670)
	{
		var left = (pos.left - width) + "px";
	}
	else {var left = (pos.left + wid) + "px";}

	var t = pos.top;
	
	if(t<430)
	{
		var top = (pos.top - 70) + "px";
	}
	else{var top = (pos.top + 200 - height) + "px";}

	$(".showEventBox").css({
		position: "absolute",
		top: top,
		left: left
	}).show();


	$.ajax({
		url: 'ShowEvent/',
		type: "GET",
		data: {'event_id':event_id,},
		success:function(data) {
      		//console.log(data);
      		console.log(data);
      		afterShow(data,event_id);
      	},

	});


}

function afterShow(data,event_id){
	$(".dateEvent").html(data.name);
	$(".shLocation").html(data.location);
	$(".shTime").html(data.start_time +" "+ data.start_date);
	$(".shDesc").html(data.description);
	$(".eventId").val(event_id);
}

function editEvent(){
	hide_viewEvent();

	var pos = $(".today_date").position();
	var width = $(".createEventBox").outerWidth();
	var wid = $(".today_date").outerWidth();
	var height = $(".createEventBox").outerHeight();
	var l = pos.left;

	if(l>=670)
	{
		var left = (pos.left - width) + "px";
	}
	else {var left = (pos.left + wid) + "px";}

	var t = pos.top;
	
	if(t<430)
	{
		var top = (pos.top - 70) + "px";
	}
	else{var top = (pos.top + 200 - height) + "px";}

	$(".createEventBox").css({
		position: "absolute",
		top: top,
		left: left
	}).show();
	//console.log($(".shLocation").text());
	
	$(".eventNameInput").val($(".EventN").text());
	$(".locationInput").val($(".shLocation").text());
	$(".descriptionInput").val($(".shDesc").text());

	$(".createEventBox").addClass("update");
}

function updateEvent(){
	var event_id = $(".eventId").val();
	console.log(event_id);
	var data = {
		'event_id':event_id,
		'name': $('input[name=name]').val(),
		'location': $('input[name=location]').val(),
		'start_date': $('input[name=start_date]').val(),
		'start_time': $('input[name=start_time]').val(),
		'end_date': $('input[name=end_date]').val(),
		'end_time': $('input[name=end_time]').val(),
		'description': $('input[name=description]').val(),
	};
	$.ajax({
		url: 'UpdateEvent/',
		type: "GET",
		data: data,
		success:function(data) {
      		//console.log(data);
      		$(".createEventBox").hide();
      		$("#event"+event_id+" > .eventNameToday").html(data.name);
      		$("#event"+event_id+" > .eventTimeToday").html(data.start_time);
      		$(".eventNameInput").val("");
	        $(".locationInput").val("");
	        $(".descriptionInput").val("");

      		//console.log("aaaa");
      		//afterShow(data,event_id);
      	},

	});

}


function deleteEvent(){
	var event_id = $(".eventId").val();
	
	$.ajax({
		url: 'DeleteEvent/',
		type: "GET",
		data: {'event_id':event_id,},
		success:function(data) {
      		console.log(data);
      		$(".showEventBox").hide();
      		$("#event"+event_id).remove();
      		//$(".createEventBox").hide();
      		//$("#event"+event_id+" > .eventNameToday").html(data.name);
      		//$("#event"+event_id+" > .eventTimeToday").html(data.start_time);
      		//console.log("aaaa");
      		//afterShow(data,event_id);
      	},

	});	
}