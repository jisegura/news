$("#brifeanos-send").click(function(event) {
    event.preventDefault();
    var form = event.target;
    var nombre = "";
    var mail = "";
    var empresa = "";
    var telefono = "";
    var comentario = "";
    nombre = $("#brifeanos-nombre").val();
    mail = $("#brifeanos-email").val();
    empresa = $("#brifeanos-empresa").val();
    telefono = $("#brifeanos-telefono").val();
    comentario = $("#brifeanos-comentario").val();
    if(nombre!=""&&mail!=""&&empresa!=""&&telefono!=""&&comentario!=""){
      var data = {
        "nombre": nombre,
        "empresa": empresa,
        "mail": mail,
        "telefono": telefono,
        "comentario": comentario
      };
      $('#brifeanos-send').html('Enviando... <i class="fa fa-paper-plane" aria-hidden="true"></i>');
      $.ajax({
          type: "POST",
          url: "vendor/email/contacto.php",
          data: data,
          success: function(){
            /* $("#contacto-error-message").addClass("hidden");
            $("#contacto-info-message").addClass("hidden");
            $("#contacto-success-message").removeClass("hidden"); */
            console.log("enviado");
            $('#brifeanos-send').html('Enviado <i class="fa fa-paper-plane" aria-hidden="true"></i>');
          },
          error:function () {
            /* $("#contacto-success-message").addClass("hidden");
            $("#contacto-info-message").addClass("hidden");
            $("#contacto-error-message").removeClass("hidden"); */
            console.log("error");
            $('#brifeanos-send').html('Error <i class="fa fa-paper-plane" aria-hidden="true"></i>');
          }
      });
    }
    else {
      /* $("#contacto-error-message").addClass("hidden");
      $("#contacto-success-message").addClass("hidden");
      $("#contacto-info-message").removeClass("hidden"); */
    }

});
