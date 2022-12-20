
let objeto = document.body.contenedorcar;
let elemento = document.getElementById('hello');
function myFunction1() {
    document.body.style.backgroundColor = 'je';}

elemento.addEventListener('wheel', myFunction1);

$(window).scroll(function() {
    const browserZoomLevel = (window.outerWidth - 8) / window.innerWidth;;
    var scroll = $(window).scrollTop() * browserZoomLevel;
    var scale = (100 + scroll/5)/96;
    if (scale < 3.5) {
      $(".contenedorcar").css({
        
          transform: ' scale('+scale+')'
        
      })} else {$(".contenedorcar").css({
        
        transform: ' scale(3.5)'
      
    })

      };
  });
  $(window).scroll(function(){
    var sPos = $(this).scrollTop();
    a = 90;
    if (sPos < 390){
    $(".texto").css({
      'right' : (a - sPos/4) + '%'
    })} else {
        $(".texto").css({
            'right' : (a - 390/4) + '%'
          })
    };
  });
  $(window).scroll(function(){
    var sPos = $(this).scrollTop();
    a = 90;
    if (sPos < 390){
    $(".imagenes").css({
      'padding-left' : (a - sPos/4) + '%'
    })}else {
    $(".imagenes").css({
        'padding-left' : (0) + '%'
    })
    };
  });
  $(window).scroll(function(){
    var sPos = $(this).scrollTop();
    a = 90;
    if (sPos < 1776){
    $(".recentproject").css({
      'right' : (a - sPos/4) + '%'
    })} else {
        $(".recentproject").css({
            'right' : (a - 1776/4) + '%'
          })
    };
  });
  var scroll = $(window).scrollTop();
  var scale = (100 + scroll/5)/100;
  const browserZoomLevel = (window.outerWidth - 8) / window.innerWidth;;
