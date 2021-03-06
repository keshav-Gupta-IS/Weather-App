const request = require('request')
const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2VzaGF2OTUiLCJhIjoiY2ttMTZvdDdkMHN0bjJ2cXN3anBmNGJscSJ9.KMLEb1Vh9wy8wK4iCNIs4g'
    request({url: url, json: true}, (error, response) => {
        if(error){
           callback('Unable to connect to location services!') 
        }else if(response.body.features.length === 0){
            callback('Unable to find location, Try another search')
        } else {
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location: response.body.features[0].place_name

            })
        }
    })
}

module.exports = geocode