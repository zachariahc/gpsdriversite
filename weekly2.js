function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width="0";
}

//map markers and info will start here

 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.776789, lng: -104.972536},
          zoom: 10
        });
          
          var iconBase = 'https://maps.google.com/mapfiles/kml/paddle/';
        var icons = {
          
          pickup: {
            icon: iconBase + 'red-circle.png'
          }
        };

        var features = [
          {// the lab
            position: new google.maps.LatLng(39.790596, -104.848517),
            type: 'pickup'
          }, {// blue kudu
            position: new google.maps.LatLng(39.783736, -104.859345),
            type: 'pickup'
          }, {// cheeba chew
            position: new google.maps.LatLng(39.786521, -104.980401),
            type: 'pickup'
          }, {// lucky
            position: new google.maps.LatLng(39.772637,  -104.968040),
            type: 'pickup'
          }, {// mhs
            position: new google.maps.LatLng(39.709492, -105.001057),
            type: 'pickup'
          }, {// incredibles
            position: new google.maps.LatLng(39.692826,  -104.998734),
            type: 'pickup'
          }
        ];

        // this creates the markers
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
      }