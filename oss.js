const os = require("node:os");

var t_mem = os.totalmem();

var t_up = os.uptime();

console.log(`Total Memory is: ${t_mem}`);
console.log(`total up time is: ${t_up}`);
