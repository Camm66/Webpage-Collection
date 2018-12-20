$(document).ready(function(){
     $('.js--wp-img1').waypoint(function(direction) {
       $('.js--wp-img1').addClass('animated fadeInLeft'); 
    }, { 
        offset: '90%'
     });
    
    $('.js--wp-img2').waypoint(function(direction) {
       $('.js--wp-img2').addClass('animated fadeInRight'); 
    }, { 
        offset: '90%'
     });

    
    $('.js--wp-img3').waypoint(function(direction) {
       $('.js--wp-img3').addClass('animated fadeInLeft'); 
    }, { 
        offset: '90%'
     });

    
    $('.js--wp-img4').waypoint(function(direction) {
       $('.js--wp-img4').addClass('animated fadeInRight'); 
    }, { 
        offset: '90%'
     });

    
    $('.js--wp-img5').waypoint(function(direction) {
       $('.js--wp-img5').addClass('animated fadeInUp'); 
    }, { 
        offset: '90%'
     });
    
    $('.part1').waypoint(function(direction) {
       $('.part1').addClass('animated fadeIn'); 
    }, { 
        offset: '90%'
     });
    
    $('.part2').waypoint(function(direction) {
       $('.part2').addClass('animated fadeIn'); 
    }, { 
        offset: '90%'
     });
    
    $('.part3').waypoint(function(direction) {
       $('.part3').addClass('animated fadeIn'); 
    }, { 
        offset: '90%'
     });
});