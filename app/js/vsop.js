'use strict';

var WHeight = 0;
var WWidth = 0;
var currentSection = 0;
var cantidadSecciones = 0;
var enAnimacion = false;
var currentHeight = 0;

function getWindowHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function getWindowBoundaries(height,width) {
  height = getWindowHeight();
  width = getWindowWidth();
}

function initMainContainer() {
  $('html').css({
    'overflow':'hidden',
    'height': '100%'
  });
  $('body').css({
    'overflow':'hidden',
    'height': '100%'
  });
  $('#VerticalScrollFullPage').css({
    'height':'100%',
    'position':'relative',
    'transition':'all 1s ease 0s',
    'transform':'translate(0px,0px)'
  });
}

function initSecciones() {
  $('.section').each(function(i){
    $(this).attr('id','section'+i);
    $(this).css({
      'height':getWindowHeight()
    });
    cantidadSecciones = i;
  });
}

$(document).ready(function() {
  initMainContainer();
  initSecciones();

  $(window).bind('mousewheel', function(event) {
    if(enAnimacion === false){
      if(event.originalEvent.wheelDelta >=0){
        //up
        if(currentSection >0){
          currentSection--;
          currentHeight = currentHeight+getWindowHeight();
          enAnimacion = true;
        }
      }
      else {
        //down
        if(currentSection < cantidadSecciones){
          currentSection++;
          currentHeight = currentHeight-getWindowHeight();
          enAnimacion = true;
        }
      }
      $('#VerticalScrollFullPage').css({
        'transform':'translate(0px,'+currentHeight+'px)'
      });
      $('#VerticalScrollFullPage').one('transitionend', function(){
        enAnimacion = false;
      });
      event.preventDefault();
    }
  });

  $(window).resize(function() {
    getWindowBoundaries(WHeight,WWidth);
  });
});
