var express = require("express");
var router = express.Router();
const messages = require("../utils/messages");

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

router.get("/messages/:id", (req,res)=>{
  const id=req.params.id;
  const message= messages.find(message=>{
    return message.id===id;
  })
  res.render('individualMessage',{message:message} )
})

module.exports = router;
