var pa = 0;
var link = document.getElementsByClassName('portfolioDL')[0];

$( document ).ready(function() {
    $(".portfolioDL").click(function(event) {
        event.preventDefault();
        if(pa == 0){
            $.getJSON( "vendor/portfolio/portfolio.json", function( data ) {
                if(data.pass == $(".portfolio").val()){
                    link.href = 'vendor/portfolio/PRESENTACION_SOMOS_NEWS.pdf';
                    link.download = 'PRESENTACION SOMOS NEWS.pdf';
                    pa = 1;
                    var newWin = window.open(link);            
                    if(!newWin || newWin.closed || typeof newWin.closed=='undefined'){
                        console.log('bloqueado papu');
                    }
                }
                else{
                    alert("codigo incorrecto");
                }
            });
        }
        else{
            window.open(link);
        }
    });
});