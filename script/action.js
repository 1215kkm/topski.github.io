$(document).ready(function(){
  $(window).scroll(function(){
    let scrT = $(this).scrollTop();
    let winH = $(this).height();
    let winW = $(this).width();
    let sec2Top = $('#section2').offset().top;
    let sec3Top = $('#section3').offset().top;

    if(winW >=1200){
      if(scrT < 1000){
        $('#visual .bg1').css({backgroundPositionY:scrT/3})
        $('#visual .bg3').css({left: (50-scrT/50)+'%', top: (16+scrT/30)+'%'})
      }
      if(scrT >= sec2Top - winH/2){
        $('#section2').addClass('on')
      } 

      if(scrT >= sec3Top - winH/2){
        $('#section3').addClass('on')
      }
    }

  })



  $('#section1 .snb li').click(function(){
    let snbIndex = $(this).index();
    $(this).addClass('on').siblings().removeClass()
    $('#section1 .cont > div').eq(snbIndex).show().siblings().hide();
    return false
  })



  $('.mobile_menu').click(function(){
    $('header nav').fadeToggle().toggleClass('on');
    $(this).toggleClass('on')
  })
})