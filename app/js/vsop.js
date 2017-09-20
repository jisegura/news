'use strict';

const KEY_UP = 38;
const KEY_DOWN = 40;
const WIDTH_MOBILE = 768;
const STATE = {
	Mobile: 'mobile',
	Desktop: 'desktop'
};
var isHome = true;
var currentSection = 0;
var cantidadSecciones = 0;
var enAnimacion = false;
var currentHeight = 0;
var currentState;
var video = document.getElementById('bgvid');
var source = document.createElement('source');

function getWindowHeight() {
	return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function getWindowWidth() {
	return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function isMobile(w) {
	return (w < WIDTH_MOBILE);
}

function enabledEvents(width) {
  if(isHome === false){
    return false;
  }
  else if(isMobile(width)){
    return false;
  }
  else {
    return true;
  }
}

function initMainContainer(of, h, tr) {
	$('html').css({
		'overflow': of,
		'height': h
	});
	$('body').css({
		'overflow': of,
		'height': h
	});
	$('#VerticalScrollFullPage').css({
		'height': h,
		'position': 'relative',
		'transition': 'all 1s ease 0s',
		'transform':' translate(0px,'+tr+'px)'
	});
}

function initSecciones(h) {
	$('.section').each(function(i){
		$(this).attr('id','section'+i);
		$(this).css({
			'height': h
		});
		cantidadSecciones = i;
	});
}

function setIndexNav() {
	$('#vsop-nav ul li a.active').removeClass('active');
	$($('#vsop-nav ul li a')[currentSection]).addClass('active');
}

function initNav() {
	var $nav = $('#vsop-nav');
	var $ul = $('<ul></ul>');
	$('.section').each(function(i){
		var tooltil = $(this).attr('class').split(' ').filter(function(cn) {
	        return cn.indexOf('vsop') === 0;
	    }).pop().split('-')[1];
	    if (i == currentSection) {
	    	var $a = $('<a href="#" class="active"><span></span></a>');
	    } else {
	    	var $a = $('<a href="#"><span></span></a>');
	    }
		var $div = $('<div class="vsop-tooltip vsop-right">'+tooltil+'</div>');
		var $li = $('<li></li>');
		$a.appendTo($li);
		$div.appendTo($li);
		$li.appendTo($ul);
	});
	$ul.appendTo($nav);

	$('#vsop-nav ul li').click(function() {
		if (!$(this).children('a').hasClass('active')) {
			var index = $(this).index();
			transitionScroll(currentSection - index);
		}
	});
}

function removeNav() {
	$('#vsop-nav').empty();
}

function setSecciones() {
	$('.section').each(function(){
		$(this).css({
			'height':getWindowHeight()
		});
	});
	currentHeight = -getWindowHeight() * currentSection;
	$('#VerticalScrollFullPage').css({
		'transform':'translate(0px,'+currentHeight+'px)'
	});
}

function changeVideoSource(element, src, type, action) {
    source.src = src;
    source.type = type;
	element.appendChild(source);
	if(action=='play'){
		video.play();
	}
	else if(action=='pause'){
		video.pause();
	}
}

function initSetupDesktop() {
	initMainContainer('hidden', '100%', 0);
	initSecciones(getWindowHeight());
	initNav();
	changeVideoSource(video, 'videos/NEWS.mp4', 'video/mp4','play');
	currentState = STATE.Desktop;
}

function initSetupMobile() {
	initMainContainer('visible', 'auto', 0);
	initSecciones('auto');
	removeNav();
	changeVideoSource(video, '', 'video/mp4','pause');
	currentState = STATE.Mobile;
}

function transitionScroll(value) {
	if (enAnimacion === false) {
		if (value >= 0) {
			if (currentSection - value >= 0) {
				currentSection = currentSection - value;
				currentHeight = currentHeight + (getWindowHeight() * value);
				enAnimacion = true;
				setIndexNav();
			}
		} else {
			if (currentSection - value <= cantidadSecciones) {
				currentSection = currentSection - value;
				currentHeight = currentHeight + (getWindowHeight() * value);
				enAnimacion = true;
				setIndexNav();
			}
		}
		$('#VerticalScrollFullPage').css({
			'transform':'translate(0px,'+currentHeight+'px)'
		}).one('transitionend', function(){
			enAnimacion = false;
		});
	}
}

function displaywheel(e){
	var evt = window.event || e;
	var delta = evt.detail ? evt.detail*(-120) : evt.wheelDelta;
	if (enabledEvents(getWindowWidth())) {
		if (delta >= 0) {
			transitionScroll(1);
		} else {
			transitionScroll(-1);
		}
	}
}

function initVSOP() {
	currentSection = 0;
	currentHeight = 0;
	if (enabledEvents(getWindowWidth())) {
		initSetupDesktop();
	} else {
		initSetupMobile();
	}
}

$(document).ready(function() {

	initVSOP();

	video.volume = 0.3;

	// KEYS
	$(document).keydown(function(event) {
		if (enabledEvents(getWindowWidth())) {
			switch(event.keyCode) {
				case KEY_UP:
					transitionScroll(1);
					break;
				case KEY_DOWN:
					transitionScroll(-1);
					break;
				default:
					break;
			}
			//event.preventDefault(); /* solo hacer el preventDefault cuando los inputs NO estan en focus*/
		}
	});

	// WHEEL
	var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';

	if (document.attachEvent) {
		document.attachEvent('on'+mousewheelevt, displaywheel);
	}
	else if (document.addEventListener) {
		document.addEventListener(mousewheelevt, displaywheel, false);
	}

	// TOUCH
	var vsop = document.getElementById('VerticalScrollFullPage');
	delete Hammer.defaults.cssProps.userSelect;
	var mc = new Hammer(vsop, { inputClass: Hammer.TouchInput, touchAction: 'auto' });
	mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	mc.on('panup', function() {
		if (enabledEvents(getWindowWidth())) {
			transitionScroll(-1);
		}
	});
	mc.on('pandown', function() {
		if (enabledEvents(getWindowWidth())) {
			transitionScroll(1);
		}
	});

	$(window).resize(function() {
		if (enabledEvents(getWindowWidth())) {
			if (currentState !== STATE.Desktop) {
				initSetupDesktop();
			}
			setSecciones();
		} else {
			if (currentState !== STATE.Mobile) {
				initSetupMobile();
			}
		}
	});
});
