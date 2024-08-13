var express = require("express");
var router = express.Router();
const messages = require("../utils/messages");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res) => {
  const newMessage = {
    id: uuidv4(),
    text: req.body.author_message,
    user: req.body.author_name,
    added: new Date(),
  };
  messages.unshift(newMessage);
  res.redirect("/");
});

module.exports = router;
