'use strict';

function setHTML(seccion,html) {
	$('#'+seccion).html(html);
}

$('.btn-evento').click(function(event){
	event.preventDefault();
	isHome = false;
	$.ajax({
		url: './templates/evento.html',
		dataType: 'html',
		beforeSend: function() {
			$('#VerticalScrollFullPage').css({'display':'none'});
			setLoaderDisplay('block');
		},
		success: function(html) {
			setTimeout(function(){
				setHTML('secondpage',html);
				initSetupMobile();
				animationLoader();
				animationNavbar();
				$('html, body').animate({ scrollTop: 0 }, 0);
			},1000);
		}
	});
});

$('.btn-audiovisual').click(function(event){
	event.preventDefault();
	isHome = false;
	initSetupMobile();
	$.ajax({
		url: './templates/audiovisual.html',
		dataType: 'html',
		beforeSend: function() {
			$('#VerticalScrollFullPage').css({'display':'none'});
			setLoaderDisplay('block');
		},
		success: function(html) {
			setTimeout(function(){
				setHTML('secondpage',html);
				animationLoader();
				animationNavbar();
				$('html, body').animate({ scrollTop: 0 }, 0);
			},1000);
		}
	});
});

$('.btn-comunicacion').click(function(event){
	event.preventDefault();
	isHome = false;
	initSetupMobile();
	$.ajax({
		url: './templates/comunicacion.html',
		dataType: 'html',
		beforeSend: function() {
			$('#VerticalScrollFullPage').css({'display':'none'});
			setLoaderDisplay('block');
		},
		success: function(html) {
			setTimeout(function(){
				setHTML('secondpage',html);
				animationLoader();
				animationNavbar();
				$('html, body').animate({ scrollTop: 0 }, 0);
			},1000);
		}
	});
});

$('.btn-digital').click(function(event){
	event.preventDefault();
	isHome = false;
	initSetupMobile();
	$.ajax({
		url: './templates/digital.html',
		dataType: 'html',
		beforeSend: function() {
			$('#VerticalScrollFullPage').css({'display':'none'});
			setLoaderDisplay('block');
		},
		success: function(html) {
			setTimeout(function(){
				setHTML('secondpage',html);
				animationLoader();
				animationNavbar();
				$('html, body').animate({ scrollTop: 0 }, 0);
			},1000);
		}
	});
});

$('.btn-stand').click(function(event){
	event.preventDefault();
	isHome = false;
	$.ajax({
		url: './templates/stands.html',
		dataType: 'html',
		beforeSend: function() {
			$('#VerticalScrollFullPage').css({'display':'none'});
			setLoaderDisplay('block');
		},
		success: function(html) {
			setTimeout(function(){
				setHTML('secondpage',html);
				initSetupMobile();
				animationLoader();
				animationNavbar();
				$('html, body').animate({ scrollTop: 0 }, 0);
			},1000);
		}
	});
});


/* $('.btn-home').click(function(event){
	event.preventDefault();
	isHome = true;
	$.ajax({
		url: './templates/home.html',
		dataType: 'html',
		beforeSend: function() {
			$('#VerticalScrollFullPage').css({'display':'block'});
			setLoaderDisplay('block');
		},
		success: function(html) {
			setTimeout(function(){
				setHTML('secondpage','');
				initVSOP();
				initMap();
				animationLoader();
				animationNavbar();
			},1000);
		}
	});
}); */
