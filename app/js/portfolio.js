var pa = 0;
var link = document.getElementById('portfolioDL');

$( document ).ready(function() {   
    $("#portfolioDL").click(function(event) {
        if(pa == 0){
            $.getJSON( "vendor/portfolio/portfolio.json", function( data ) {
                if(data.pass == $("#portfolio").val()){
                    link.href = 'vendor/portfolio/PRESENTACION SOMOS NEWS.pdf';
                    link.download = 'PRESENTACION SOMOS NEWS.pdf';
                    pa = 1;
                    link.click();
                    alert("codigo autorizado");
                }
                else{
                    alert("codigo incorrecto");
                }
            });
        }
    });
});