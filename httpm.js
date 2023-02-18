const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("Hi Hi");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
  }
});

server.on("connection", (socket) => {
  console.log("New Connection.....");
});

server.listen(3000);

console.log("listening in port 3000");
