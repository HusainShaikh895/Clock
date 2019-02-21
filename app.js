function clock(){
	var date = new Date();

	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();

	if(hours>12){
		hours = hours - 12;
	}

	if(hours<10){
		hours = "0" + hours;
	}

	if(minutes<10){
		minutes = "0" + minutes;
	}

	if(seconds<10){
		seconds = "0" + seconds;
	}

	document.getElementById('hour').innerHTML = hours;
	document.getElementById('minute').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
	
}

setInterval(clock, 1000);