// Created by Sleepy Koala

$(document).ready(function(){
    function rain(){
            /* Randomize horizontal placement of number */
        var randomDigit = (Math.random() * 100) + 1, 
            /* Binary number */
            binary = [0, 1],
            /* Binary Number Randomizer */ 
            randomized = Math.round((Math.random())), 
            rainContainer = $('.rain-container');
        
        /* Prepend binary numbers */
        rainContainer.prepend('<span class="raindrop">'+binary[randomized]+'<span>');
        /* Applying randomized placement of numbers */
        $('.raindrop:first-child').css({left: randomDigit+'px'});
        
        //Variable for raindrop
        var droplet = $('.raindrop');
        /* Raindrop animation */
        droplet.animate({top: '360px'}, 2000);
        
        /* I use remove() rather than fadeOut() because as the animation lasts longer, it becomes laggy with fadeOut() */
        setTimeout(function(){
            $('.raindrop:last-child').remove();
        }, 2000);
    }
    
    /* Adds binary numbers every 100 milliseconds */
    setInterval(rain, 100);
    
    function lightning(){
        var light = $('.lightning'), 
            randomNumber = (Math.random() * 50) + 1;
        
        light.css({
            left: randomNumber+'px', 
            opacity: '1'
        });
        
        setTimeout(function(){
            light.css({
                opacity: '0', 
                transition: '500ms linear'
            })
        }, 2000);
        
        setTimeout(function(){
            light.css({
                transition: ''
            })
        }, 2500);
    }
    setInterval(lightning, 5000);
    
});