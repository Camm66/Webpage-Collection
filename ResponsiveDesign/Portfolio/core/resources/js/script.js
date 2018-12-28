 $(document).ready(function(){
     
     
/*-----------------Use waypoint to implement sticky nav---------------------*/
    $('.portfolio-section').waypoint(function(direction){
        if(direction == "down"){
            $("#nav").addClass("sticky").appendTo("#js--sticky-nav");
           }
        else {
            $("#nav").removeClass('sticky').appendTo("#js--home-nav");
        }
    }, {
        offset: '60px;'
    });
     
/*-------------------Cross current section in the nav-----------------------*/
        $('.home-content').waypoint(function(direction){
            $(".js--scroll-to-portfolio").removeClass("current-page-nav");
       });
     
       $('.portfolio-section').waypoint(function(direction){
           if(direction =="down"){
               $(".js--scroll-to-portfolio").addClass("current-page-nav");
           }
       });
     
        $('.about-section').waypoint(function(direction){
           if(direction =="down"){
               $(".js--scroll-to-about").addClass("current-page-nav");
                $(".js--scroll-to-portfolio").removeClass("current-page-nav");
           }
           else {
               $(".js--scroll-to-portfolio").addClass("current-page-nav");
               $(".js--scroll-to-about").removeClass("current-page-nav");
           }
       });
     
/*----------------------Scroll to selected section---------------------------*/
    $('.js--scroll-to-portfolio').click(function(){
        $('html, body').animate({scrollTop: $('.portfolio-section').offset().top}, 1000);
    });
    
        $('.js--scroll-to-about').click(function(){
        $('html, body').animate({scrollTop: $('.about-section').offset().top}, 1000);
    });

/*----------------------Move Social icons to the About Me section---------------------------*/
    $('.about-section').waypoint(function(direction){
           if(direction =="down"){
               $("#social").appendTo("#social-bottom");
           }
           else {
               $("#social").appendTo("#social-top");
           }
       }, {
        offset: "50%"
    });  
     
/*----------------------Circle text animation---------------------------*/
     const circleType = new CircleType(document.getElementById('circle-text'));
});