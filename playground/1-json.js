const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Hoiday",
};

const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const Buffer = fs.readFileSync("./1-json.json");
// const Buffer_string = Buffer.toString();
// console.log(JSON.parse(Buffer_string));

const Buffer = fs.readFileSync("./1-json.json");
const Buffer_string = Buffer.toString();
const json_data = JSON.parse(Buffer_string);

console.log(json_data.name);

json_data.name = "samer new";
json_data.age = 100;
json_data.planet = "Planet of the earth";

fs.writeFileSync("./1-json.json", JSON.stringify(json_data));

// console.log(bookJSON);
// const parsed_data = JSON.parse(bookJSON);
// console.log(parsed_data.author);
