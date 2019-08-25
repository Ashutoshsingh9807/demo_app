$(document).ready(function(){  
    $(".menu-wrapper").click(function(){  
        $(".menu-wrapper").toggleClass("toggle-me");  
        $(".menu-content-wrapper").toggleClass("toggle-menu");  
        $("body").toggleClass("overflow-hidden");  
    }); 
    
    setTimeout(function() {
        $('.section-loader').addClass('loader-hidden');
        $("body").removeClass("overflow-hidden"); 
    },3000);
   
});  

