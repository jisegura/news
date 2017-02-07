'use strict';

$(document).ready(function() {
	$('.navbar-toggle').click(function() {
		if (!$('.navbar-collapse').hasClass('collapsing')) {
			if ($('nav.navbar').hasClass('open')) {
				$('nav.navbar').removeClass('openAnimation').one('transitionend', function(){
					$('.navbar-toggle').toggleClass('closeNav');
					$('nav.navbar').removeClass('open');
				});
			} else {
				$('nav.navbar').addClass('open');
				$('nav.navbar').addClass('openAnimation').one('transitionend', function(){
					$('.navbar-toggle').toggleClass('closeNav');
				});
			}
		}
	});

	$('.nav-item').click(function() {
		$('.navbar-toggle').click();
	});
});
