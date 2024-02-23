const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ id: 1, name: "Issac Newton" }));
  } else if (req.url === "/messages") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
                <body>
                  <ul>
                    <li>Hello, Sir Issac.</li>
                    <li>How are you?</li>
                    <li>Thank you for discovering gravity.</li>
                  </ul>
                </body>
              </html>`);
    res.end();
  } else if (req.url === "/message") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("It was nice talking with Sir Issac Newton.");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, (err, res) => {
  console.log(`Listening on port ${PORT}`);
});
