// Created by Koketso Dithipe

//Credits to ChessMaster for helping me with this code ^_^

//mohified by misbahedm & jamilxt 

onload = function () {

    showDate();
    showTime();
    generateRoutine();

}


//share js
document.addEventListener("DOMContentLoaded", function(event) { 

    // Uses sharer.js 
    //  https://ellisonleao.github.io/sharer.js/#twitter	
       var url = window.location.href;
       var title = document.title;
       var subject = "Read this good article";
       var via = "yourTwitterUsername";
       //console.log( url );
       //console.log( title );
    
    //facebook
    $('#share-wa').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'whatsapp');
    //facebook
    $('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook');
    //twitter
    $('#share-tw').attr('data-url', url).attr('data-title', title).attr('data-via', via).attr('data-sharer', 'twitter');
    //linkedin
    $('#share-li').attr('data-url', url).attr('data-sharer', 'linkedin');
    // google plus
    $('#share-gp').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
      // email
      $('#share-em').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email');
    
    //Prevent basic click behavior
    $( ".sharer button" ).click(function() {
      event.preventDefault();
    });
      
      
    // only show whatsapp on mobile devices  
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }
    
    if ( isMobile == true ) {
    $("#share-wa").hide();
    }
    
      
      
      
      
    
    
    });


//routine table time function
function generateRoutine() {

    var date = new Date();
    var current = date.getHours() * 60 + date.getMinutes();
    var time;

    if (current >= 9 * 60 + 15 && current < 10 * 60 + 05)
        time = "001";
    else if (current >= 10 * 60 + 05 && current < 10 * 60 + 55)
        time = "002";
    else if (current >= 10 * 60 + 55 && current < 11 * 60 + 45)
        time = "003";
    else if (current >= 11 * 60 + 45 && current < 12 * 60 + 35)
        time = "004";
    else if (current >= 12 * 60 + 35 && current < 13 * 60 + 25)
        time = "005";
    else if (current >= 13 * 60 + 25 && current < 14 * 60 + 30)
        time = "006";
    else if (current >= 14 * 60 + 30 && current < 15 * 60 + 20)
        time = "007";
    else
        time = "000";



    if (time == "000") {

        //document.getElementById("running_class").style.display = "none";

    } else {


        var today = date.getDay(); // 3



        var children = document.getElementById(time).childNodes;

        for (var i = 0; i < children.length; i++) {

            var classes = children[i].classList;

            if (!classes) {

                continue;

            }




            for (var j = 0; j < classes.length; j++) {

                if (classes[j] == "d" + today) {

                    var highlight_id = document.getElementById("highlight");

                    if (highlight_id) {
                        highlight_id.setAttribute("id", "");
                    }

                    children[i].setAttribute("id", "highlight");

                }

            }

        }

    }

    running_class();

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

    date_div = date_div.toLocaleDateString("eng", options);


    document.getElementById("MyDateDisplay").innerText = date_div;





}



//runnging class function
function running_class() {


    var highlighted_text = document.getElementById("highlight").innerText;

    var running_class_div = document.getElementById("running_class");

    if (highlighted_text != "") {
        running_class_div.innerText = "Is going on now \"" + highlighted_text + "\" Class";
    } else {
        running_class_div.innerText = "Now the class is off";
    }

    running_class_div.style.display = "block";


}



google.charts.load('current', {
    'packages': ['map'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyDYlu5vgoYX-OpqviIj8bHhGk_pIxqlDHQ'
    
    });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Population'],
        ['China', 'China: 1,363,800,000'],
        ['India', 'India: 1,242,620,000'],
        ['US', 'US: 317,842,000'],
        ['Indonesia', 'Indonesia: 247,424,598'],
        ['Brazil', 'Brazil: 201,032,714'],
        ['Pakistan', 'Pakistan: 186,134,000'],
        ['Nigeria', 'Nigeria: 173,615,000'],
        ['Bangladesh', 'Bangladesh: 152,518,015'],
        ['Russia', 'Russia: 146,019,512'],
        ['Japan', 'Japan: 127,120,000']
      ]);

    var options = {
      showTooltip: true,
      showInfoWindow: true
    };

    var map = new google.visualization.Map(document.getElementById('chart_div'));

    map.draw(data, options);
  };