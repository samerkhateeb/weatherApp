const request = require("postman-request");
const chalk = require("chalk");
const success = chalk.bold.green.inverse;
const fail = chalk.bold.red.inverse;

const forcast = (error, data, callback) => {
  if (error) {
    console.log(fail(error));
  } else {
    console.log(
      `long, lat, place ${data.longitude} and ${data.latitude} and ${data.placeName}`
    );
    const url = `http://api.weatherstack.com/current?access_key=a5e77294b0d28bc4bf9b38fd50c7e9ed&query=${encodeURIComponent(
      data.placeName
    )}`;

    // request({ url: url, json: true }, (error, response) => {
    request({ url: url, json: true }, (error, { body }) => {
      if (error || body.error) {
        console.log(
          fail("there's an error happened ... please try again later")
        );
      } else {
        //   const data = JSON.parse(response.body);
        const data = body.current;
        // console.log(data);
        const current_temp = data.temperature;
        const wind_speed = data.wind_speed;
        const percip = data.precip;
        const weather_description = data.weather_descriptions;
        const message = `its currently ${current_temp} degrees out and the wind speed is ${wind_speed} and there's ${percip}% of rain because the weather is ${weather_description}!!!`;

        console.log(
          `${current_temp} ${wind_speed} ${weather_description} ${percip}`
        );
        callback(error, {
          current_temp,
          wind_speed,
          weather_description,
          percip,
          message,
        });

        // console.log(
        //   success(
        //   )
        // );
      }

      //   // console.log(response.body);
    });
  }
};

module.exports = forcast;
