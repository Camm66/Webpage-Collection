$(document).ready(function() {
    var slideIndex = 1;
    var timer = 0;
    var badges = document.getElementsByClassName("slide-badge");
    
    $('.slide-left').click(function(){plusDivs(-1)});
    $('.slide-right').click(function(){plusDivs(+1)});
    
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        stop();
        var i;
        var x = document.getElementsByClassName("slide");
        if (n > x.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        x[slideIndex-1].style.display = "block"; 
        
        for(var i = 0; i < badges.length; i++){
            badges[i].style.backgroundColor = "";
        }
        badges[slideIndex-1].style.backgroundColor = "green";
        timer = setTimeout(function(){plusDivs(1)}, 7000);
    }
    
    /*Alter slide index buttons*/
    badges[0].style.backgroundColor = "green";
    for(i = 1; i < badges.length + 1; i++){
        badges[i-1].addEventListener('click', 
            (function(i){ 
                var index = i;
                return function(){ currentDiv(index);};
            })(i));
    }
    
    function currentDiv(n){
        slideIndex = n;
        showDivs(n);
    }
    
    function stop() {
        if (timer) {
            clearTimeout(timer);
            timer = 0;
        }
    }
});