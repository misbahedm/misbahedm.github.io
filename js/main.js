// Created by Koketso Dithipe

//Credits to ChessMaster for helping me with this code ^_^

//mohified by misbahedm & jamilxt 

onload = function () {

    showDate();
    showTime();
    generateRoutine();

}







//routine table time function
function generateRoutine() {

    var date = new Date();
    var current = date.getHours() * 60 + date.getMinutes();
    var time, next_time;

    if (current >= 9 * 60 + 15 && current < 10 * 60 + 05) {
        time = "001";
        next_time = "002";
    }
    else if (current >= 10 * 60 + 05 && current < 10 * 60 + 55) {
        time = "002";
        next_time = "003";
    }
    else if (current >= 10 * 60 + 55 && current < 11 * 60 + 45) {
        time = "003";
        next_time = "004";
    }
    else if (current >= 11 * 60 + 45 && current < 12 * 60 + 35) {
        time = "004";
        next_time = "005";
    }
    else if (current >= 12 * 60 + 35 && current < 13 * 60 + 25) {
        time = "005";
        next_time = "006";
    }
    else if (current >= 13 * 60 + 25 && current < 14 * 60 + 30) {
        time = "006";
        next_time = "007";
    }
    else if (current >= 14 * 60 + 30 && current < 15 * 60 + 20) {
        time = "007"; //
        next_time = "000";
    }
    else
        time = "000"; // 




    if (time == "000") {

        // max = 7th period
        //document.getElementById("running_class").style.display = "none";

    } else {


        var today = date.getDay(); // 3




        // children
        var children = document.getElementById(time).childNodes;
        for (var i = 0; i < children.length; i++) {

            var classes = children[i].classList;

            if (!classes) {

                continue;

            }




            for (var j = 0; j < classes.length; j++) {

                // Today class highlight
                if (classes[j] == "d" + today) {

                    var highlight_id = document.getElementById("highlight");

                    if (highlight_id) {
                        highlight_id.setAttribute("id", "");
                    }

                    children[i].setAttribute("id", "highlight");

                }



            }

        }



        if (!next_time == "000") {
            // it is last period
            document.getElementById("nextclass_card").style.display = "none";
        } else {
            // next class available

            // next_children
            var next_children = document.getElementById(next_time).childNodes;
            for (var i = 0; i < next_children.length; i++) {

                var next_classes = next_children[i].classList;

                if (!next_classes) {

                    continue;

                }




                for (var j = 0; j < next_classes.length; j++) {

                    // Today class highlight
                    if (next_classes[j] == "d" + today) {

                        var next_highlight_id = document.getElementById("next_highlight");

                        if (next_highlight_id) {
                            next_highlight_id.setAttribute("id", "");
                        }

                        next_children[i].setAttribute("id", "next_highlight");

                    }



                }

            }
        }

    }

    running_class();
    next_class();

}



//clock script
function showTime() {
    var date_clock = new Date();
    var h = date_clock.getHours(); // 0 - 23
    var m = date_clock.getMinutes(); // 0 - 59
    var s = date_clock.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time_clock = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyClockDisplay").innerText = time_clock;

    setTimeout(showTime, 1000);

}



//bangla date fucntion  
function showDate() {

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date_div = new Date();

    date_div = date_div.toLocaleDateString("bn-BD", options);


    document.getElementById("MyDateDisplay").innerText = date_div;





}



//runnging class function
function running_class() {


    var highlighted_text = document.getElementById("highlight").innerText;

    var running_class_div = document.getElementById("running_class");

    if (highlighted_text != "") {
        running_class_div.innerText = highlighted_text;
    } else {
        running_class_div.innerText = "এখন ক্লাস বন্ধ";
    }

    running_class_div.style.display = "block";


}

//next class function
function next_class() {


    var highlighted_text = document.getElementById("next_highlight").innerText;

    var running_class_div = document.getElementById("next_class");

    if (highlighted_text != "") {
        running_class_div.innerText = highlighted_text;
    } else {
        running_class_div.innerText = "এখন ক্লাস বন্ধ";
    }

    running_class_div.style.display = "block";


}