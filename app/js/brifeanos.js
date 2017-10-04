$("#boton-comentario").click(function(event) {
    event.preventDefault();
    var form = event.target;
    var nombre = "";
    var mail = "";
    var asunto = "";
    var comentario = "";
    nombre = $("#contacto-nombre").val();
    mail = $("#contacto-email").val();
    asunto = $("#contacto-asunto").val();
    comentario = $("#contacto-comentario").val();
    if(nombre!=""&&mail!=""&&asunto!=""&&comentario!=""){
      var data = {
        "nombre": nombre,
        "email": mail,
        "asunto": asunto,
        "comentario": comentario
      };
      $('#boton-comentario').html('Enviando... <i class="fa fa-paper-plane" aria-hidden="true"></i>');
      $.ajax({
          type: "POST",
          url: "vendor/email/contacto.php",
          data: data,
          success: function(){
            $("#contacto-error-message").addClass("hidden");
            $("#contacto-info-message").addClass("hidden");
            $("#contacto-success-message").removeClass("hidden");
            $('#boton-comentario').html('Enviar <i class="fa fa-paper-plane" aria-hidden="true"></i>');
          },
          error:function () {
            $("#contacto-success-message").addClass("hidden");
            $("#contacto-info-message").addClass("hidden");
            $("#contacto-error-message").removeClass("hidden");
            $('#boton-comentario').html('Enviar <i class="fa fa-paper-plane" aria-hidden="true"></i>');
          }
      });
    }
    else {
      $("#contacto-error-message").addClass("hidden");
      $("#contacto-success-message").addClass("hidden");
      $("#contacto-info-message").removeClass("hidden");
    }

});
