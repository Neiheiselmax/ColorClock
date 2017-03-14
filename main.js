var bgColor = document.querySelector(".bgsquare")
var clock = document.getElementById("demo");
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (sec < 10) {
   	sec = "0" + sec;
}

if (min < 10) {
   	min = "0" + min;
}

if (hours < 10) {
   	sec = "0" + hours;
}

    var color = '#' + hours + min + sec;
    clock.innerHTML = color;

    bgColor.style.backgroundColor = color;
}



