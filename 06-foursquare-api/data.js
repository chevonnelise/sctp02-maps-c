async function search () {
    const response = await axios.get('https://api.foursquare.com/v3/places/search', {
        params: {
            query:"Chicken RIce",
            near:"Singapore"
        },
        headers:(
            accept:"application/json",
            Authorization: 'fsq3fCgI4pxZ46odFRivTiN+qWXmlzXCWoMRWImvmkCqINs='
        )
    })
    console.log(response.data);
}