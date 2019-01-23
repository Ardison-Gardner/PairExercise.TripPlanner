const mapbox = require("mapbox-gl");

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  let markerType = iconURLs[type];
  console.log(markerType);
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${markerType})`;
  return new mapbox.Marker(markerDomEl).setLngLat([-74.009151, 40.70508]);
};

module.exports = buildMarker;
