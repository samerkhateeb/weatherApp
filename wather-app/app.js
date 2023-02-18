const yargs = require("yargs");
const geolocation = require("./utils/geolocation");
const forcast = require("./utils/forcast.js");
// import geolocation from "./utils/geolocation";

yargs.version("1.0.1.1.1");

yargs.command({
  command: "forcast",
  describe: "check forcast",
  builder: {
    city: {
      describe: "requested City",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    geolocation(argv.city, (error, data = {}) => {
      forcast(error, data);
    });
    // console.log(`the title is: ${argv.title} and the body is: ${argv.body}`);
  },
});

yargs.parse();
// geolocation("amman", (error, data) => {
//   forcast(error, data);
// });

// module.exports = {
//   success: success,
//   fail: fail,
// };
