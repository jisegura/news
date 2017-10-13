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
      $('#brifeanos-send').html('Enviando...');
      $.ajax({
          type: "POST",
          url: "vendor/email/contacto.php",
          data: data,
          success: function(){
            $('#brifeanos-alert').find("span").html("Consulta enviada exitosamente, nos comunicaremos a la brevedad.");
            $('#brifeanos-alert').removeClass('bri-error');
            $('#brifeanos-alert').addClass('bri-success');
            $('#brifeanos-send').html('Enviar');
          },
          error:function () {
            $('#brifeanos-alert').find("span").html("Error al enviar consulta, intente nuevamente.");
            $('#brifeanos-alert').removeClass('bri-success');
            $('#brifeanos-alert').addClass('bri-error');
            $('#brifeanos-send').html('Enviar');
          }
      });
    }
    else {
      $('#brifeanos-alert').find("span").html("Complete todos los campos.");
      $('#brifeanos-alert').removeClass('bri-success');
      $('#brifeanos-alert').addClass('bri-error');
    }

});
