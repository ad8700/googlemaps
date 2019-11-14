function initMap() {
		var location = {lat: 32.877955, lng: -96.933399};
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 8,
			center: location
		});
		
	var address1 = {
		info: '660 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br> In Service = Y<br> Account # = 54321<br> Internet product = 1G<br>\
		TV product = None<br> Phone product = None',
		lat: 32.877955,
		long: -96.933399
	};

	var address2 = {
		info: '664 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br> In Service = N',
		lat: 32.877979,
		long:-96.933168
	}

	var address3 = {
		info: '668 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br> In Service = Y<br> Account # = 54320<br> Internet product = 1G<br>\
		TV product = 300 channels<br> Phone product = None',
		lat: 32.877864,
		long:-96.932996
	}
	
	var address4 = {
		info: '672 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>In Service = Y<br> Account # = 54319<br> Internet product = 1G<br>\
		TV product = None<br> Phone product = None',
		lat: 32.877853,
		long:-96.932829
	}
	var address5 = {
		info: '676 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>in Service = N',
		lat: 32.877824,
		long:-96.93259
	}
	var address6 = {
		info: '680 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br> In Service = N',
		lat: 32.877738,
		long:-96.932367
	}
	var address7 = {
		info: '684 Waterbrook Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>In Service = Y<br> Account # = 54318<br> Internet product = 300MB<br>\
		TV product = 100 channels<br> Phone product = None',
		lat: 32.877702,
		long:-96.932166
	}	
	var address8 = {
		info: '663 Flagstone Dr<br> Irving, TX 75039,<br> Internet Available = N,<br> Max Internet Speed = 0<br> \
		TV Available = N<br> Phone Available = N<br>In Service = N',
		lat: 32.877673,
		long:-96.933376
	}	
	var address9 = {
		info: '667 Flagstone Dr<br> Irving, TX 75039,<br> Internet Available = Y,<br> Max Internet Speed = 1000<br> \
		TV Available = Y<br> Phone Available = Y<br>In Service = N',
		lat: 32.877599,
		long:-96.933202
	}	

	var blueLocations = [
		[address2.info, address2.lat, address2.long, 0],
		[address5.info, address5.lat, address5.long, 0],
		[address6.info, address6.lat, address6.long, 0],
		[address7.info, address7.lat, address7.long, 0],
		[address9.info, address9.lat, address9.long, 0]
    ];

	var redLocations = [
		[address8.info, address8.lat, address8.long, 0]	
	]

	var greenLocations = [
		[address1.info, address1.lat, address1.long, 0],
		[address3.info, address3.lat, address3.long, 0],
		[address4.info, address4.lat, address4.long, 0]
	]
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: new google.maps.LatLng(32.877506, -96.932352),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var blueMarker, i;

	for (i = 0; i < blueLocations.length; i++) {
		blueMarker = new google.maps.Marker({
			position: new google.maps.LatLng(blueLocations[i][1], blueLocations[i][2]),
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

		google.maps.event.addListener(blueMarker, 'click', (function (blueMarker, i) {
			return function () {
				infowindow.setContent(blueLocations[i][0]);
				infowindow.open(map, blueMarker);
			}
		})(blueMarker, i));
	}
	
	var redMarker, i;

	for (i = 0; i < redLocations.length; i++) {
		redMarker = new google.maps.Marker({
			position: new google.maps.LatLng(redLocations[i][1], redLocations[i][2]),
		    icon: {
		        path: google.maps.SymbolPath.CIRCLE,
		        fillColor: '#FF0000',
		        fillOpacity: 0.6,
		        strokeColor: '#FF000',
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
		})(redMarker, i));
	}
	
	var greenMarker, i;

	for (i = 0; i < greenLocations.length; i++) {
		greenMarker = new google.maps.Marker({
			position: new google.maps.LatLng(greenLocations[i][1], greenLocations[i][2]),
		    icon: {
		        path: google.maps.SymbolPath.CIRCLE,
		        fillColor: '#008000',
		        fillOpacity: 0.6,
		        strokeColor: '#008000',
		        strokeOpacity: 0.9,
		        strokeWeight: 1,
		        scale: 7},
			map: map
		});

		google.maps.event.addListener(greenMarker, 'click', (function (greenMarker, i) {
			return function () {
				infowindow.setContent(greenLocations[i][0]);
				infowindow.open(map, greenMarker);
			}
		})(greenMarker, i));
	}
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