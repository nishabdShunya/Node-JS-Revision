const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  { id: 0, name: "Nikola Tesla" },
  { id: 1, name: "Issac Newton" },
  { id: 2, name: "Albert Einstein" },
];

server.on("request", (req, res) => {
  const items = req.url.split("/"); // /friends/1 => ["", "friends", "1"]
  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
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
  } else if (items[1] === "message") {
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
