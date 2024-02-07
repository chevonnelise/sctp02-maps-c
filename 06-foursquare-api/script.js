document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);
    const searchLayer = L.layerGroup();
    searchLayer.addTo(map);

    document.querySelector("#searchBtn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#searchTerms").value;
        
        // find the lat lng of the center of the map
        const centerPoint = map.getBounds().getCenter();
        const data = await search(centerPoint.lat, centerPoint.lng, searchTerms);

        addMarkersToMap(data, searchLayer, map);
    })

    document.querySelector("#toggleSearchBtn").addEventListener("click", function(){
        const searchContainer = document.querySelector("#search-container");
        const style = window.getComputedStyle(searchContainer);
        if (style.display != "none") {
            searchContainer.style.display = "none";
        } else {
            searchContainer.style.display = 'block';
        }
    })
});