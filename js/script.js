
function initMap() {
  var mapOptions = {
      center: { lat:-37.83024850895685, lng: 144.98011740975244},
      zoom: 30
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}