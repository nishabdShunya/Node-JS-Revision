const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/friends", friendsController.getAllFriends);
app.get("/friends/:id", friendsController.getOneFriend);
app.post("/friends", friendsController.addFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.addMessage);

app.listen(PORT, () => console.log(`listening on ${PORT}...`));
