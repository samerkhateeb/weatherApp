const EventEmitter = require("events");
const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

// emitter.emit("messageLogged", { id: 1, url: "http://" });

logger.log("log this please");
