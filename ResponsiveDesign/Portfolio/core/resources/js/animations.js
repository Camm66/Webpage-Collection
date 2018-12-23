$(document).ready(function() {
    $('.js--name').waypoint(function(direction) {
       $('.js--name').addClass('animated fadeInRight'); 
    }, { 
        offset: '90%'
     });
    
    $('.js--titles').waypoint(function(direction) {
        $('.js--titles').addClass('animated fadeInLeft');
    }, {
        offset:'90%'
    });
    
    $('.js--main-nav').waypoint(function(direction) {
        $('.js--main-nav').addClass('animated fadeInRight');
    }, {
        offset:'90%'
    });
    
    $('.js--logo').waypoint(function(direction) {
        $('.js--logo').addClass('animated fadeInDown');
    }, {
        offset:'90%'
    });
});