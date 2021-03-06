'use strict';

const endAnimation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function setLoaderDisplay(display) {
	$('#loader-wrapper').css({'display': display});
}

function animationLoader() {
	$('#loader-wrapper').addClass('loaded');
	$('.loader-section').one('transitionend', function() {
		setLoaderDisplay('none');
		$('#loader-wrapper').removeClass('loaded');
	});
}

function animationNavbar() {
	$('nav.navbar').addClass('fadeInDown').one(endAnimation, function() {
		$(this).removeClass('fadeInDown');
	});
}

function animationBtn() {
	$('#animateBtn').addClass('fadeIn').one(endAnimation, function() {
		$(this).removeClass('fadeIn');
	});
}

function animationLogo() {
	$('#logo').addClass('zoomInDown').one(endAnimation, function() {
		$(this).removeClass('zoomInDown');
	});
}

$(window).on('load', function(){
	animationLoader();
	animationNavbar();
	animationBtn();
});
