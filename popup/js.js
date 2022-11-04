$('.login-form .one input').focus(function(){
    $('.login-form .one label').css('color','#010ac2');
    $('.login-form .two label').css('color','#000');
    $('.login-form .three label').css('color','#000');
  });
  $('.login-form .two input').focus(function(){
    $('.login-form .one label').css('color','#000');
    $('.login-form .two label').css('color','#010ac2');
    $('.login-form .three label').css('color','#000');
  });
  $('.login-form .three input').focus(function(){
    $('.login-form .one label').css('color','#000');
    $('.login-form .two label').css('color','#000');
    $('.login-form .three label').css('color','#010ac2');
  });


  $('.login-box').click(function(e){
    e.preventDefault();
    $('.reg').css('transform','translatex(-700px)');
    $('.reg').css('transition','0.5s');
    $('.reg').css('opacity','0');

  });
  $('.regbox').click(function(f){
    f.preventDefault();

    $('.reg').css('transform','translatex(0px)');
    $('.reg').css('transition','0.5s');
    $('.reg').css('opacity','1');

  });
