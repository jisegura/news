'use strict';

var map;
var lastInfowindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -38.010865, lng: -57.5378526},
    scrollwheel: false,
    zoom: 15,
    draggable: false,
    styles: [{'featureType':'all','elementType':'all','stylers':[{'visibility':'on'}]},{'featureType':'all','elementType':'labels','stylers':[{'visibility':'on'},{'saturation':'-100'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'saturation':-100},{'color':'#aaaaaa'},{'lightness':20},{'visibility':'on'}]},{'featureType':'all','elementType':'labels.text.stroke','stylers':[{'visibility':'off'},{'color':'#000000'},{'lightness':16}]},{'featureType':'all','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#000000'},{'lightness':17},{'weight':1.2}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':20}]},{'featureType':'landscape','elementType':'geometry.fill','stylers':[{'color':'#4d6059'}]},{'featureType':'landscape','elementType':'geometry.stroke','stylers':[{'color':'#4d6059'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'color':'#4d6059'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'lightness':21}]},{'featureType':'poi','elementType':'geometry.fill','stylers':[{'color':'#4d6059'}]},{'featureType':'poi','elementType':'geometry.stroke','stylers':[{'color':'#4d6059'}]},{'featureType':'road','elementType':'geometry','stylers':[{'visibility':'on'},{'color':'#7f8d89'}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'color':'#7f8d89'}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#7f8d89'},{'lightness':17}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#7f8d89'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':18}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#7f8d89'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'color':'#7f8d89'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':16}]},{'featureType':'road.local','elementType':'geometry.fill','stylers':[{'color':'#7f8d89'}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'color':'#7f8d89'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':19}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#2b3638'},{'visibility':'on'}]},{'featureType':'water','elementType':'geometry','stylers':[{'color':'#2b3638'},{'lightness':17}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'color':'#24282b'}]},{'featureType':'water','elementType':'geometry.stroke','stylers':[{'color':'#24282b'}]},{'featureType':'water','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels.text','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels.text.fill','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels.text.stroke','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels.icon','stylers':[{'visibility':'off'}]}]
  });
  agregarMarker();
}


function agregarMarker(){
  var image = '../images/marker2.png';
  var mHPG = 'News BTL';
  var iHPG = '<a href="https://goo.gl/pBIJYd" target="_blank">Como llegar?</a>';
  myLatLng = {lat: -38.010865, lng: -57.5378526};

  var newsBTL = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: mHPG
  });
  attachMessage(newsBTL, iHPG);
}


function attachMessage(marker, message) {
  var infowindow = new google.maps.InfoWindow({
    content: message
  });
  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}

$(document).ready(function(){
  $('#map').css({'height':getWindowHeight()*0.7,'overflow':'visible'});
  setTimeout(initMap(),2000);
});
