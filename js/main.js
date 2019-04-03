// Created by Koketso Dithipe

//Credits to ChessMaster for helping me with this code ^_^

onload = function() {
    var date = new Date(); 
    var current = date.getHours() * 60 + date.getMinutes();
    var time;
    if (current >= 9 * 60 + 01 && current < 10 * 60 + 05)
        time = "001";
    else if (current >= 10 * 60 + 06 && current < 10 * 60 + 55)
        time = "002";
    else if (current >= 10 * 60 + 56 && current < 11 * 60 + 45)
        time = "003";
    else if (current >= 11 * 60 + 46 && current < 12 * 60 + 35)
        time = "004";
    else if (current >= 12 * 60 + 36 && current < 13 * 60 + 25)
        time = "005";
    else if (current >= 13 * 60 + 26 && current < 14 * 60 + 15)
        time = "006";
    else if (current >= 14 * 60 + 16 && current < 15 * 60 + 05)
        time = "007";
    
    
    
    else if (current >= 24 * 60 + 20 && current < 24 * 60 + 50)
        time = "008";
        
        
        
            
    if (!time)
        return;
    var today = date.getDay(); 
    var children = document.getElementById(time).childNodes;
    for (var i = 0; i < children.length; i++)  {
        var classes = children[i].classList;
        if (!classes)
            continue;
        for (var j = 0; j < classes.length; j++)  {
            if (classes[j] == "d" + today) {
                var h = document.getElementById("highlight");
                if (h) h.setAttribute("id", "");
                children[i].setAttribute("id", "highlight");
            }
        }
    }
}


//clock script

function showTime(){
var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
var session = "AM";

if(h == 0){
  h = 12;
}

if(h > 12){
  h = h - 12;
  session = "PM";
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementById("MyClockDisplay").innerText = time;
document.getElementById("MyClockDisplay").textContent = time;

setTimeout(showTime, 1000);

}

showTime();

