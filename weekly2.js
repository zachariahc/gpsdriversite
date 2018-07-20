function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width="0";
}

//map markers and info start here

 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.915988, lng: 151.235948},
          zoom: 15
        });
          
          var iconBase = 'https://maps.google.com/mapfiles/kml/paddle/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          pickup: {
            icon: iconBase + 'red-circle.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(-33.91721, 151.22630),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91539, 151.22820),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91910, 151.22907),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91725, 151.23011),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91784, 151.23094),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91682, 151.23149),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91790, 151.23463),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91666, 151.23468),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.916988, 151.233640),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'pickup'
          }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'pickup'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
      }