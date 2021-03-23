const request = require('postman-request')

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoidGhvcm52aWsiLCJhIjoiY2ttMTBnd3o5M3J2NzJ2bnc3eGRpMjB1diJ9.pf8Zk2h9U12zIwiUjLyOxw&limit=1`

  request({ url, json: true }, (error, { body }) => {

    if (error) {
      callback('unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      callback('unable to find location, try another', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      })
    }
  })
}

module.exports = geoCode
