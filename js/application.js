$(document).ready(function () {
      $(window).on("scroll",function(){ 
      var scroll = $(window).scrollTop();
      if(scroll>=240){
        $(".sticky-header").addClass('active');
      }else {
        $(".sticky-header").removeClass('active');  
      }
      if(scroll>=280){
        $(".secondary-nav-fixed").addClass('active');
      }else {
        $(".secondary-nav-fixed").removeClass('active');  
      }
    });  
   });

$(document).ready(function(){
 
  var $sections = $('section.section');
  
  $(window).scroll(function(){
    
    var currentScroll = $(this).scrollTop();
    
    var $currentSection;
    
    $sections.each(function(){
      var divPosition = $(this).offset().top;
      console.log(divPosition);
      
      if( divPosition - 80 < currentScroll ){
        $currentSection = $(this);
        
      }
      
      var id = $currentSection.attr('id');
   	 $('a').removeClass('active');
   	 $("[href='#"+id+"']").addClass('active');
      
    })

  });
});