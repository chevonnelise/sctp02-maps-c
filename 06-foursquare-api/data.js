async function search (lat, lng, searchTerms) {
    const response = await axios.get('https://api.foursquare.com/v3/places/search', {
        params: {
            query:encodeURI(searchTerms), // encodeURI function to convert special characteres to their encoded 
            ll: lat + "," + lng,
            // categories:"13033", //enable use of categories
            sort:"DISTANCE",
            radius: 2000,
            limit: 50
        },
        headers:{
            accept:"application/json",
            Authorization: 'fsq3fCgI4pxZ46odFRivTiN+qWXmlzXCWoMRWImvmkCqINs='
        }
    })
    console.log(response.data);
}