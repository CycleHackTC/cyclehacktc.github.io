// Main JS for site

// When dom is ready
$(document).ready(function() {
  // Attach fastclick
  FastClick.attach(document.body);

  // Get width
  var width = $(window).width();

  // Maps
  var hackMap = L.map('map-hack-factory', {
    attributionControl: false,
    zoomControl: false,
    scrollWheelZoom: false,
    touchZoom: false,
    dragging: false
  });
  hackMap.setView([44.955389, -93.226018], 14);
  L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {

  }).addTo(hackMap);

  var hackMarker = L.marker([44.955389, -93.226018]).addTo(hackMap);

  hackMap.panBy([width / 4, 0]);
});
