const EventEmitter = require("events");
// const emitter = new EventEmitter();

console.log(__filename);
console.log(__dirname);
var url = "https://www.google.com";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // emitter.emit("messageLogged", { id: 1, url: "http://" });
    this.emit("messageLogged", { id: 1, url: "http://" });
  }

  check(input) {
    if (input === "success") return "yes";
    else return "no";
  }
}

module.exports = Logger;
