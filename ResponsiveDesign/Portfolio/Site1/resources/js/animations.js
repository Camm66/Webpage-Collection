$(document).ready(function(){
     $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated pulse'); 
    }, { 
        offset: '90%'});
    
    $('.js--wp-2').waypoint(function(direction) {
        setTimeout( function(){
             $('.js--wp-2').addClass('animated pulse'); 
        }, 300);
    }, { 
        offset: '90%'});
    
    $('.js--wp-3').waypoint(function(direction) {
        setTimeout( function(){
       $('.js--wp-3').addClass('animated pulse'); 
        }, 500);
    }, { 
        offset: '90%'});
});