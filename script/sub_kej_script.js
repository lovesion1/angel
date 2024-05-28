$(document).ready(function(){
	$("nav div").hover(function(){
		$(".sub").stop().slideToggle()
  $(".navbg").stop().slideToggle()
	});
	
  $(function(){
   $('.all>li>a').click(function(){
	$(this).parent().addClass("active").siblings().removeClass("active");
		return false;
	  });
  });
  
	
/*
	$(window).scroll(function(){
      if($(this).scrollTop() > 500){
        $('.vid').fadeIn();
        }else{
          $('.vid').fadeOut();
        }
     });
*/
	
/*
	 top버튼 클릭하면 맨 위로 올라가는 구문

  $("탑버튼").click(function(){
      $('html, body').animate({
          scrollTop : 0
         }, speed);
      });
*/
	
	
	
})