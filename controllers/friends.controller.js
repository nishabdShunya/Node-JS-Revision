const model = require("../models/friends.model");

function getAllFriends(req, res) {
  res.status(200).json(model);
}

function getOneFriend(req, res) {
  const { id } = req.params;
  const friend = model.find((friend) => friend.id === +id);
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
}

function addFriend(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is missing" });
  }
  const newFriend = { id: model.length, name };
  model.push(newFriend);
  res.status(201).json({ message: "Friend added successfully", newFriend });
}

module.exports = { getAllFriends, getOneFriend, addFriend };
