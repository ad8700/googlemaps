function initMap() {
		var location = {lat: 32.877955, lng: -96.933399};
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 20,
			center: location
		});
/*		var marker = new google.maps.Marker({
			position: location, 
			map: map
			})*/
		var marker = new google.maps.Marker({
    		map: map,
    		position: map.getCenter(),
		    icon: {
		        path: google.maps.SymbolPath.CIRCLE,
		        fillColor: '#00F',
		        fillOpacity: 0.6,
		        strokeColor: '#00A',
		        strokeOpacity: 0.9,
		        strokeWeight: 1,
		        scale: 7
    }
});
			
	var address1 = {
		info: '660 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>',
		lat: 32.877955,
		long: -96.933399
	};

	var address2 = {
		info: '664 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>',
		lat: 32.877979,
		long:-96.933168
	}

/*	var belmont = {
		info: '<strong>Chipotle on Belmont</strong><br>\
					1025 W Belmont Ave<br> Chicago, IL 60657<br>\
					<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
		lat: 41.939670,
		long: -87.655167
	};

	var sheridan = {
		info: '<strong>Chipotle on Sheridan</strong><br>\r\
					6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
		lat: 42.002707,
		long: -87.661236
	};
*/
	var locations = [
      [address1.info, address1.lat, address1.long, 0],
		[address2.info, address2.lat, address2.long, 0]
/*      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],*/
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 20,
		center: new google.maps.LatLng(32.877506, -96.932352),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
