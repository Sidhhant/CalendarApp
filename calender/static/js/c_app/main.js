// Display calendar of any month

var rightLargeTable = "";
rightLargeTable += '<tr class="monthNameRow">'+
				"<th>Sunday</th>"+
				"<th>Monday</th>"+
				"<th>Tuesday</th>"+
				"<th>Wednesday</th>"+
				"<th>Thursday</th>"+
				"<th>Friday</th>"+
				"<th>Saturday</th>"+
			"</tr>"+
			"<tr>";
//console.log(weekDayMonth);

weekDayMonth = weekDayMonth +1;

if(weekDayMonth != 7)
{
	var i=0;
	var x = prmonthRange-(weekDayMonth-i)+1
	while(x<=prmonthRange)
	{
		rightLargeTable += '<td style="background-color: #f8f8f8; ">'+x+'</td>';
		x = x+1;
		i = i+1;
	}
	var j;
	for(j=1;j<=monthRange;j++)
	{
		if (j == day)
		{
			rightLargeTable += '<td class="today_date">' + j + "</td>";	
		}
		else
		{
			rightLargeTable += "<td>" + j + "</td>";	
		}
		
		if((i+1)%7==0)
		{
			rightLargeTable += "</tr><tr>";
		}	
		i = i+1;
	}
	j = 1;
	while(i<35)
	{
		rightLargeTable += '<td style="background-color: #f8f8f8;">' + j + "</td>";
		if((i+1)%7==0 && i!=34)
		{
			rightLargeTable += "</tr><tr>";
		}
		i = i+1;
		j = j+1;
	}
	rightLargeTable += "</tr>";

}
else
{
	var i;
	for(i=1;i<=monthRange;i++)
	{
		if (i == 1 && i == day)
		{
			rightLargeTable += '<td class="today_date ">' + month + "/" + i + "</td>";	
		}
		else if(i==1)
		{
			rightLargeTable += "<td>" + month + "/" + i + "</td>";	
		}
		else if(i==date)
		{
			rightLargeTable += '<td class="today_date">' + i + "</td>";
		}
		else
		{
			rightLargeTable += "<td>" + i + "</td>";	
		}
		if(i%7==0)
		{
			rightLargeTable += "</tr><tr>";
		}	
	}
	var j = 1;
	while(i<=35)
	{
		rightLargeTable += '<td style="background-color: #f8f8f8;">' + j + "</td>";
		if(i%7==0 && i!=35)
		{
			rightLargeTable += "</tr><tr>";
		}
		i = i+1;
		j = j+1;
	}
	rightLargeTable += "</tr>";	
}


//console.log(rightLargeTable);
$(".rightLargeTable").html(rightLargeTable);

if (weekDay == 0)
{
	$(".monthNameRow > th:nth-child(2)").addClass("week_day_name");
}
else if (weekDay == 1)
{
	$(".monthNameRow > th:nth-child(3)").addClass("week_day_name");
}
else if (weekDay == 2)
{
	$(".monthNameRow > th:nth-child(4)").addClass("week_day_name");
}
else if (weekDay == 3)
{
	$(".monthNameRow > th:nth-child(5)").addClass("week_day_name");
}
else if (weekDay == 4)
{
	$(".monthNameRow > th:nth-child(6)").addClass("week_day_name");
}
else if (weekDay == 5)
{
	$(".monthNameRow > th:nth-child(7)").addClass("week_day_name");
}
else if (weekDay == 6)
{
	$(".monthNameRow > th:nth-child(1)").addClass("week_day_name");
}

/*
$(".eventBox").click(function(){
    $(".eventBox").css("background-color", "#ff8787");
});
*/

var dummy = ""+
		'<div class="dummyBox">dummy</div>'

$(".rightLargeTable tr:nth-child(2) > td:nth-child(2)").append(dummy);


var dummy_t = ""+
		'<div class="dummyThere">dummy</div>'

$(".rightLargeTable tr:nth-child(2) > td:nth-child(3)").append(dummy_t);






























