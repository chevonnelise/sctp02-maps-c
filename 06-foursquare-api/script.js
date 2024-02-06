document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);

    document.addEventListener("DOMContentLoaded", async function () {
        const searchTerms = document.querySelector("#searchTerms").value;
        const results = await search(1.3521, 103.8298, searchTerms);
        console.log(data);

        for (let location of data.results) {
            const lat = location.geocodes.main.latitude;
            const lng = location.geocodes.main.longitude;
            const address = location.location.formatted_address;
            const marker = L.marker([lat, lng]);
            marker.bindPopup(`<h1>${address}</h1>`)


            marker.addTo(map);
        }
    })

});