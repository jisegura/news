'use strict';

function setBodyHTML(html) {
	$('#MainBody').html(html);
}

$('.btn-evento').click(function(event){
	event.preventDefault();
	isHome = false;
	initSetupMobile();
	$.ajax({
		url: '../templates/evento.html',
		dataType: 'html',
		beforeSend: function() {
			setBodyHTML('');
			setLoaderDisplay('block');
		},
		success: function(html) {
			setTimeout(function(){
				setBodyHTML(html);
				animationLoader();
				animationNavbar();
			},3000);
		}
	});
});

// $(document).ready(function () {
//     $(document).ajaxStart(function () {
//         $("#loading").show();
//     }).ajaxStop(function () {
//         $("#loading").hide();
//     });
// });
