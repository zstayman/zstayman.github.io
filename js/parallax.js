$(window).on("scroll", function(){
  $(".fourth").css("top", -1*$(window).scrollTop());
  $(".third").css("top", -.75*$(window).scrollTop());
  $(".second").css("top", -.5*$(window).scrollTop());
  $(".first").css("top", -.25*$(window).scrollTop());
});
