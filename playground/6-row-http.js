const http = require("node:http");

const url = `http://api.weatherstack.com/current?access_key=a5e77294b0d28bc4bf9b38fd50c7e9ed&query=amman`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();

    // console.log(chunk);
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error =========>>>>", error);
});

request.end();
