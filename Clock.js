var secOn = 0;

var date = new Date();

var Nowtime = (((+date.getHours() >= 10) ? date.getHours() : ("0" + date.getHours())) + ":"  + ((+date.getMinutes() >= 10) ? date.getMinutes() : ("0" + date.getMinutes())) + ":" + ((+date.getSeconds() >= 10) ? date.getSeconds() : ("0" + date.getSeconds())));

var t = document.getElementById("time");
t.innerHTML = Nowtime;

var timerId = setInterval(
	function refreshTime() {
		var date = new Date();

		var Nowtime = (
			((+date.getHours() >= 10) ? date.getHours() : ("0" + date.getHours()))
			+ ":"  + 
			((+date.getMinutes() >= 10) ? date.getMinutes() : ("0" + date.getMinutes())) 
			+ ":" + 
			((+date.getSeconds() >= 10) ? date.getSeconds() : ("0" + date.getSeconds())));

		var t = document.getElementById("time");
		t.innerHTML = Nowtime;
	}, 1000);