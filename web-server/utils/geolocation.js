const request = require("postman-request");

const geolocation = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2FtZXJrIiwiYSI6ImNsYmljZTR3NjBra2szb2xjdWE1cmE5Y3oifQ.RyzyRf46Y6B6ovnkXLxMtw&limit=1&language=en`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to the service", {});
    } else if (response.body.error) {
      callback(response.body.error, {});
    } else if (response.body.features.length === 0) {
      callback("the location you've used is not valid", {});
    } else {
      debugger;
      // console.log(response.body.features[]);
      const data = response.body.features[0];
      const longitude = data.center[0];
      const latitude = data.center[1];
      const placeName = data.text;

      callback(error, {
        longitude: longitude,
        latitude: latitude,
        placeName: placeName,
      });
    }
  });
};

module.exports = geolocation;
