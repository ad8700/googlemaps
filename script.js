function initMap() {
		var location = {lat: 32.877955, lng: -96.933399};
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 15,
			center: location
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

	var address3 = {
		info: '668 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>',
		lat: 32.877864,
		long:-96.932996
	}
	
	var address4 = {
		info: '672 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>',
		lat: 32.877853,
		long:-96.932829
	}
	var address5 = {
		info: '676 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>',
		lat: 32.877824,
		long:-96.93259
	}
	var address6 = {
		info: '680 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>',
		lat: 32.877738,
		long:-96.932367
	}
	var address7 = {
		info: '684 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>',
		lat: 32.877702,
		long:-96.932166
	}	
	var address8 = {
		info: '663 Flagstone Dr<br> Irving, TX 75039,<br> Internet Available = N,<br> Max Internet Speed = 0<br> \
		TV Available = N<br> Phone Available = N<br>',
		lat: 32.877702,
		long:-96.932166
	}	

	var locations = [
      [address1.info, address1.lat, address1.long, 0],
		[address2.info, address2.lat, address2.long, 0],
		[address3.info, address3.lat, address3.long, 0],
		[address4.info, address4.lat, address4.long, 0],
		[address5.info, address5.lat, address5.long, 0],
		[address6.info, address6.lat, address6.long, 0],
		[address7.info, address7.lat, address7.long, 0]
    ];

/*	var redLocations = [
		[address8.info, address8.lat, address8.long, 0]	
	]

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: new google.maps.LatLng(32.877506, -96.932352),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});*/

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		    icon: {
		        path: google.maps.SymbolPath.CIRCLE,
		        fillColor: '#00F',
		        fillOpacity: 0.6,
		        strokeColor: '#00A',
		        strokeOpacity: 0.9,
		        strokeWeight: 1,
		        scale: 7},
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
	
/*	var redMarker, i;

	for (i = 0; i < redLocations.length; i++) {
		blueMarker = new google.maps.Marker({
			position: new google.maps.LatLng(redLocations[i][1], redLocations[i][2]),
		    icon: {
		        path: google.maps.SymbolPath.CIRCLE,
		        fillColor: '#FF0000',
		        fillOpacity: 0.6,
		        strokeColor: '#00A',
		        strokeOpacity: 0.9,
		        strokeWeight: 1,
		        scale: 7},
			map: map
		});

		google.maps.event.addListener(redMarker, 'click', (function (redMarker, i) {
			return function () {
				infowindow.setContent(redLocations[i][0]);
				infowindow.open(map, redMarker);
			}
		})(marker, i));
	}*/
}

/*depricated code*/

/*		var marker = new google.maps.Marker({
			position: location, 
			map: map
			})*/
/*		var marker = new google.maps.Marker({
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
});*/

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