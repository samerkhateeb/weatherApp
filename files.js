const fs = require("fs");

// const files = fs.readdirSync("./");

const files = fs.readdir("#", function (err, files) {
  if (err) console.log("Error", err);
  else console.log(files);
});
