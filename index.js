const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ id: 1, name: "Issac Newton" }));
});

server.listen(PORT, (err, res) => {
  console.log(`Listening on port ${PORT}`);
});
