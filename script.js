// `L` is an object that represents leaflet
// L.map is a function that returns a new map object
// the first argument ID of the div or whatever that will display (i.e. render) the map
const map = L.map("singaporeMap");
 
// set the center point of the map
// In leaflet, the latlng is represented by an array
// first index is lat
// second index is lng
// second argument is the zoom level
map.setView([1.3521, 103.8198], 13);

// create the tile layer
// layer = one image on the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

