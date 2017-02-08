$('.btn-evento').click(function(event){
  event.preventDefault();
  isHome = false;
  initSetupMobile();
  $.ajax({
    url: "../templates/evento.html",
    dataType: 'html',
    beforeSend: function() {
      $('#MainBody').html('');
      $('#loader-wrapper').css({'display':'block'});
    },
    success: function(html) {
      setTimeout(function(){
        $('#MainBody').html(html);
        $('#loader-wrapper').addClass('loaded');
        $('.loader-section').one('transitionend', function() {
          $('#loader-wrapper').css({'display':'none'});
          $('#loader-wrapper').removeClass('loaded');
        });
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
