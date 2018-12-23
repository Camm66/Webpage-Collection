 $(document).ready(function(){
     
    $('.js--scroll-to-portfolio').click(function(){
        $('html, body').animate({scrollTop: $('.portfolio-section').offset().top}, 1000);
    });
    
        $('.js--scroll-to-about').click(function(){
        $('html, body').animate({scrollTop: $('.about-section').offset().top}, 1000);
    });
});