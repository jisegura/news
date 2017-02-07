'use strict';

$(document).ready(function() {
	$('.navbar-toggle').click(function() {
		if (!$('.navbar-collapse').hasClass('collapsing')) {
			$('nav.navbar').toggleClass('open').one('transitionend', function(){
				$('.navbar-toggle').toggleClass('closeNav');
			});
		}
	});

	$('.nav-item').click(function() {
		$('.navbar-toggle').click();
	});
});
