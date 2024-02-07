document.addEventListener("DOMContentLoaded", async function(){
    const map = L.map("map");
    map.setView([1.3521, 103.8198], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

    const cyclingResponse = await axios.get('data/cycling.geojson');
    L.geoJson(cyclingResponse.data, {
        onEachFeature:function(feature, layer){
            const tempElement = document.createElement('div');
            tempElement.innerHTML = feature.properties.Description;
            const tds = tempElement.querySelectorAll('td');
            const pathName = tds[0].innerHTML;
            const agency = tds[1].innerHTML;
            layer.bindPopup(`<h1>${pathName}</h1><h2>Maintain by ${agency}</h2>`);
        }
    }).addTo(map);
})