// Main JS for site

// When dom is ready
$(document).ready(function() {
  // Stellar
  $(window).stellar();

  // Attach fastclick
  FastClick.attach(document.body);

  // Get width
  var width = $(window).width();

  // Hack factory map
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

  // Ideation map
  var rideMap = L.map('map-ideation-ride', {
    attributionControl: false,
    zoomControl: true,
    scrollWheelZoom: false,
    touchZoom: true,
    dragging: false
  });
  L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
  }).addTo(rideMap);

  var geoLayer = L.geoJson(getRoute(), {
    onEachFeature: function(feature, layer) {
      if (feature.properties && feature.properties.content) {
        layer.bindPopup(feature.properties.content);
      }
    }
  }).addTo(rideMap);

  rideMap.fitBounds(geoLayer.getBounds());
  rideMap.zoomOut();
  rideMap.panBy([width / 5, 0]);

  // Geojson route
  function getRoute() {
    return {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "content": ""
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -93.23049545288086,
            44.95918024696324
          ],
          [
            -93.23148250579834,
            44.95921061429791
          ],
          [
            -93.24203968048096,
            44.959240981616524
          ],
          [
            -93.24384212493896,
            44.959240981616524
          ],
          [
            -93.24482917785645,
            44.96075932705471
          ],
          [
            -93.24375629425049,
            44.95921061429791
          ],
          [
            -93.24465751647949,
            44.9591498796125
          ],
          [
            -93.24182510375977,
            44.95447311577739
          ],
          [
            -93.2415246963501,
            44.954321266407064
          ],
          [
            -93.24122428894043,
            44.953926456163835
          ],
          [
            -93.24182510375977,
            44.95447311577739
          ],
          [
            -93.2429838180542,
            44.95401756646105
          ],
          [
            -93.24345588684082,
            44.95283312131466
          ],
          [
            -93.24461460113525,
            44.95195236420489
          ],
          [
            -93.2426404953003,
            44.95189162183704
          ],
          [
            -93.24268341064453,
            44.95116270840806
          ],
          [
            -93.24259757995604,
            44.95189162183704
          ],
          [
            -93.24470043182373,
            44.95189162183704
          ],
          [
            -93.24349880218506,
            44.95283312131466
          ],
          [
            -93.2429838180542,
            44.95401756646105
          ],
          [
            -93.24169635772705,
            44.95450348560324
          ],
          [
            -93.24109554290771,
            44.95386571588532
          ],
          [
            -93.240966796875,
            44.952681267604895
          ],
          [
            -93.24045181274414,
            44.952073848747794
          ],
          [
            -93.23774814605713,
            44.953106456979725
          ],
          [
            -93.23671817779541,
            44.952499042622776
          ],
          [
            -93.23594570159912,
            44.953136827528816
          ],
          [
            -93.23504447937012,
            44.953592383836494
          ],
          [
            -93.23388576507568,
            44.95374423513545
          ],
          [
            -93.22912216186523,
            44.953592383836494
          ],
          [
            -93.22659015655518,
            44.953379791342925
          ],
          [
            -93.22062492370605,
            44.95325830956444
          ],
          [
            -93.21779251098633,
            44.95365312440428
          ],
          [
            -93.21444511413574,
            44.95495903106226
          ],
          [
            -93.2135009765625,
            44.954442745935474
          ],
          [
            -93.21410179138184,
            44.95520198716179
          ],
          [
            -93.21654796600342,
            44.95656859605566
          ],
          [
            -93.218092918396,
            44.95754038702383
          ],
          [
            -93.22041034698486,
            44.9593624507302
          ],
          [
            -93.22096824645996,
            44.95918024696324
          ],
          [
            -93.22534561157227,
            44.95918024696324
          ],
          [
            -93.22543144226074,
            44.95559678862967
          ],
          [
            -93.22598934173584,
            44.9555056808397
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "content": "Matthews Park"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.23062419891357,
          44.95933208347591
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "content": "Peace Coffee"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.24221134185791,
          44.95155753766458
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "content": "Brackett Park (via 29th detour)"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.22015285491943,
          44.95309127169915
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "content": "Hack Factory"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.2260537147522,
          44.955475311544234
        ]
      }
    }
  ]
};
  }
});
