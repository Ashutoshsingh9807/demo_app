$(document).ready(function(){  
    $(".menu-wrapper").click(function(){  
        $(".menu-wrapper").toggleClass("toggle-me");  
        $(".menu-content-wrapper").toggleClass("toggle-menu");  
        $("body").toggleClass("overflow-hidden");  
    }); 
    $(".section-loader").click(function() {

    }) 
    setTimeout(function() {
        $('.section-loader').addClass('loader-hidden');
    },5000);
});  

