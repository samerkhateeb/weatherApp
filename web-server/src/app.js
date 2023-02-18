const express = require("express");
const path = require("node:path");
var hbs = require("hbs");
const geolocation = require("../utils/geolocation");
const forcast = require("../utils/forcast");

const app = express();
const public_directory = path.join(__dirname, "../public");
const template_directory = path.join(__dirname, "../templates");
const partial_directory = path.join(__dirname, "../templates/partials");
// console.log("hi......", path.join(__dirname, "../public/index.html"));
// console.log(__dirname);
// console.log(__filename);

// setup handlebars  engine and views location
app.set("view engine", "hbs");
app.set("views", template_directory);
hbs.registerPartials(partial_directory);

// setup static directory
app.use(express.static(public_directory));

app.get("", (req, res) => {
  res.render("index", {
    title: "home title",
    body: "this is the body",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about title2",
    image: "/images/photo-1438761681033-6461ffad8d80.jpeg",
    body: "this is the body",
  });
});

app.get("/weather", (req, res) => {
  // if (!req.query.address) {
  //   return res.send({ error: "You must provide a address term" });
  // }

  const data = [];

  var address = req.query.address;

  console.log(address);
  geolocation(address, (error, data = {}) => {
    if (error) {
      return res.send({ error: "something went wrong.." });
    }

    forcast(error, data, (error, data = {}) => {
      if (error) res.send({ error: "something went wrong.." });
      if (data.length === 0) res.send({ error: "data is empty" });

      // console.log(
      //   `${current_temp} ${wind_speed} ${weather_description} ${percip}`
      // );
      res.send({
        current_temp: data.current_temp,
        wind_speed: data.wind_speed,
        weather_description: data.weather_description,
        percip: data.percip,
        message: data.message,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    console.log(req.query);
    return res.send({ error: "You must provide a search term" });
  }

  res.send({ products: [] });
});

// put it at the last
app.get("*", (req, res) => {
  res.render("404", {
    title: "about title2",
    body: "404  ...  Page is not exist !!!!",
  });
});

// app.get("/help", (req, res) => {
//   app.use(express.static(public_directory + "/help.html"));
//   // res.send(path.join(__dirname, "../public/index.html"));
// });

// app.get("/about", (req, res) => {
//   app.use(express.static(public_directory + "/about.html"));
//   // res.send("about");
// });

app.get("/weather", (req, res) => {
  res.send({
    name: "andrew",
    age: 27,
  });
});

app.listen(3000, () => {
  console.log("Server is up on Port 3000");
});

// app.com
// app.com/help
//app.com/about
