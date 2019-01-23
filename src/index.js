const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJkaXNvbi1nYXJkbmVyIiwiYSI6ImNqb2c3dmI5YzBiOW8zcXFyaXFzYzM2N2oifQ.fp0MwQKrt3w1q2wzSkMCbg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

