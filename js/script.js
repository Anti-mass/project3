var map;

function initMap(){
	// alert('it works');
	var mapElement = document.getElementById('map');
	var mapOptions = {
		center: google.maps.LatLng(-37.83024850895685, 144.98011740975244),
		zoom: 8
	};
	map = new google.maps.Map(mapElement, mapOptions);
}

