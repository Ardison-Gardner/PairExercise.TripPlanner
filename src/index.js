const mapboxgl = require('mapbox-gl');
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJkaXNvbi1nYXJkbmVyIiwiYSI6ImNqb2c3dmI5YzBiOW8zcXFyaXFzYzM2N2oifQ.fp0MwQKrt3w1q2wzSkMCbg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
