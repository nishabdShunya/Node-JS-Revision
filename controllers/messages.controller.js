function getMessages(req, res) {
  res.status(200).send("<ul><li>List Item One</li><li>List Item Two</li></ul>");
}

function addMessage(req, res) {
  console.log("Adding Message...");
}

module.exports = { getMessages, addMessage };
