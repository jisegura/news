$.getJSON( "vendor/portfolio/portfolio.json", function( data ) {
    console.log(data.pass);
});

var link = document.getElementById('portfolioDL');
link.href = 'vendor/portfolio/PRESENTACION SOMOS NEWS.pdf';
link.download = 'PRESENTACION SOMOS NEWS.pdf';