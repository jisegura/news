function ajaxTest() {
  $.ajax({
    url: "../aTest.html",
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
}

// $(document).ready(function () {
//     $(document).ajaxStart(function () {
//         $("#loading").show();
//     }).ajaxStop(function () {
//         $("#loading").hide();
//     });
// });
