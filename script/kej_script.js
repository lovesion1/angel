$(document).ready(function(){
	$("nav div").hover(function(){
		$(".sub").stop().slideToggle()
		$(".navbg").stop().slideToggle()
	});
	
	/*$(".subm_1_2").click(function(){
   $(".map").addClass("active")
 })*/
  
  
	$(window).scroll(function(){
      if($(this).scrollTop() > 500){
        $('.vid').fadeIn();
        }else{
          $('.vid').fadeOut();
        }
     });
	
/*
	 top버튼 클릭하면 맨 위로 올라가는 구문

  $("탑버튼").click(function(){
      $('html, body').animate({
          scrollTop : 0
         }, speed);
      });
*/
		
//   $(".vid button").click(function(){
//     $(".vid").hide()
//   })
   $(".vid button").click(function(){
     $(".vid *").css({
       display:"none"
     })
   })
  
  
  
  function sub1(){
    $.ajax({url: "html/sub1.html"});
/*
    $(".map").addClass("active").siblings().remove("active");
*/
  }
  
$(".subm1").click(function(){
  $.ajax({url: "demo_test.txt", success: function(result){
    $("#div1").html(result);
  }});
});

  

})





