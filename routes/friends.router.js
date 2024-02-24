const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

// Adding route specific middleware
friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

friendsRouter.get("/", friendsController.getAllFriends);
friendsRouter.get("/:id", friendsController.getOneFriend);
friendsRouter.post("/", friendsController.addFriend);

module.exports = friendsRouter;
