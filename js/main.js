// Created by Koketso Dithipe

//Credits to ChessMaster for helping me with this code ^_^
onload = function() {
    var date = new Date(); 
    var current = date.getHours() * 60 + date.getMinutes();
    var time;
    if (current >= 7 * 60 + 30 && current < 9 * 60 + 30)
        time = "730";
    else if (current >= 9 * 60 + 30 && current < 10 * 60 + 45)
        time = "930";
    else if (current >= 11 * 60 + 30 && current < 12 * 60 + 30)
        time = "110";
    else if (current >= 13 * 60 + 30 && current < 14 * 60 + 15)
        time = "130";
    else if (current >= 14 * 60 + 30 && current < 15 * 60 + 45)
        time = "143";
    else if (current >= 16 * 60 + 30 && current < 17 * 60 + 45)
        time = "160";
            
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