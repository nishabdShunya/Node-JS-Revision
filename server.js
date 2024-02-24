const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: "Albert Einstein" },
  { id: 1, name: "Issac Newton" },
  { id: 2, name: "Nikola Tesla" },
];

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:id", (req, res) => {
  const { id } = req.params;
  const friend = friends.find((friend) => friend.id === +id);
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
});

app.get("/messages", (req, res) => {
  res.status(200).send("<ul><li>List Item One</li><li>List Item Two</li></ul>");
});

app.listen(PORT, () => console.log(`listening on ${PORT}...`));
