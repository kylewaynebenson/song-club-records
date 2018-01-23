$(document).ready(function () {
      $(window).on("scroll",function(){ 
      var scroll = $(window).scrollTop();
        
    
      if(scroll>=240){
        $(".sticky-header").addClass('active');
      }else {
        $(".sticky-header").removeClass('active');  
      }; 
      

    });  
   });