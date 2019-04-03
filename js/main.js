// Created by Koketso Dithipe

//Credits to ChessMaster for helping me with this code ^_^

onload = function() {
    var date = new Date(); 
    var current = date.getHours() * 60 + date.getMinutes();
    var time;
    if (current >= 9 * 60 + 01 && current < 10 * 60 + 05)
        time = "001";
    else if (current >= 10 * 60 + 05 && current < 10 * 60 + 55)
        time = "002";
    else if (current >= 10 * 60 + 55 && current < 11 * 60 + 45)
        time = "003";
    else if (current >= 11 * 60 + 45 && current < 12 * 60 + 35)
        time = "004";
    else if (current >= 12 * 60 + 35 && current < 13 * 60 + 25)
        time = "005";
    else if (current >= 13 * 60 + 25 && current < 14 * 60 + 15)
        time = "006";
    else if (current >= 14 * 60 + 15 && current < 15 * 60 + 05)
        time = "007";
    
    
    
   // else if (current >= 24 * 60 + 20 && current < 24 * 60 + 50)
    //    time = "008";
        
        
        
            
    if (!time)
        return;
    var today = date.getDay(); // 3
    console.log(today); 
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


