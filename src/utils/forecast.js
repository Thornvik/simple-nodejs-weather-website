const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c9907a9750a478157a5b180e51390145&query=$${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}&units=m`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("unable to get weather, check location", undefined);
    } else {
      callback(
        undefined,
        "The current temprature is " +
          body.current.temperature +
          " but it feels like " +
          body.current.feelslike +
          ". is it day? " +
          body.current.is_day
      );
    }
  });
};

module.exports = forecast;
