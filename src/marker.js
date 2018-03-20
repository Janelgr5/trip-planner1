//import mapbox
const mapboxgl = require("mapbox-gl");
const { map } = require("./index");

//object with all the images for the markers
const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

//
const buildMarker = function (type, coords) {
    // Your Code Here
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (type === "hotels") markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    if (type === "restaurants") markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    if (type === "activities") markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    
    // markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

    return new mapboxgl.Marker(markerDomEl).setLngLat(coords)
};

module.exports = buildMarker;