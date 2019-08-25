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
    /*circlular text function */
    // function circularText(txt, radius, classIndex) {
    //     txt = txt.split(""),
    //       classIndex = document.getElementsByClassName("circTxt")[classIndex];
      
    //     var deg = 360 / txt.length,
    //       origin = 0;
      
    //     txt.forEach((ea) => {
    //       ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    //       classIndex.innerHTML += ea;
    //       origin += deg;
    //     });
    //   }
      
    //   circularText("this text is in a circle  with name and function ", 270, 0);
});  

