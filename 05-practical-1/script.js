const HDB_URL = "https://gist.github.com/kunxin-chor/a5f5cab3e8a6ad0868134334c1432d9a"

document.addEventListener("DOMContentLoaded", async function(){
    const map = L.map('map')
    map.setView([1.3521, 103.8198]),
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
    
    const hdbCoordinates = await loadHdbData();

    const markerCluster = L.markerClusterGroup();
    markerCluster.addTo(map);

    drawHdbMarkers(markerCluster, hdbCoordinates);
})

function drawHdbMarkers(layer, coordinates) {
    for (let h of coordinates){
        const marker = L.marker(h.coordinates);
        marker.bindPopup(`<p>${h.title}</>`);
        marker.addTo(layer);
    }
}

async function loadHdbData(){
    const response = await axios.get(HDB_URL);
    let hdbCoordinates = [];
    for (let hdb of response.data.coordinates){
        const lat = hdb.coordinates[0];
        const lng = hdb.coordinates[1];
        const name = hdb.name;
        hdbCoordinates.push({
            "name":name,
            "coordinates":[lat,lng]
        });
    }
    return hdbCoordinates;
}