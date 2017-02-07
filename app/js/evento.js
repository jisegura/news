$('.btn-evento').click(function(event){
  event.preventDefault();
  isHome = false;
  initSetupMobile();
  $.ajax({
    url: "../templates/evento.html",
    dataType: 'html',
    beforeSend: function() {
      $('#VerticalScrollFullPage').html('');
      $('.spinner').css({'display':'block'});
    },
    success: function(html) {
      setTimeout(function(){
        $('.spinner').css({'display':'none'});
        $('#VerticalScrollFullPage').html(html);},3000);
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
