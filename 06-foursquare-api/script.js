document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);

    document.querySelector("#searchBtn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#searchTerms").value;
        
        const centerPoint = map.getBounds().getCenter();
        const searchLayer = L.layerGroup()
        searchLayer.addTo(map);
        
        console.log(centerPoint);
        
        const data = await search(centerPoint, 1.3521, 103.8198, searchTerms);

       
        addMarkersToMap(data, map);


    })

});