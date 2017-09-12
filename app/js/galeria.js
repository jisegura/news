var $item; 
var $wHeight;

$(document).ready(function(){
  $item = $('.carousel .item'); 
  $wHeight = $(window).height();
  $item.height($wHeight); 
  $item.addClass('full-screen');
  $item.eq(Math.floor(Math.random() * $item.length)).addClass('active');

  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });

  $('.carousel-control').click(function(){
    $('.carousel').carousel('pause');
  });
});