const express= require('express');
const messageRouter = express.Router();
const messageController= require('../controllers/messageControllers.js')

messageRouter.get("/", messageController.getAllMessages);
messageRouter.get("/messages/:id", messageController.getIndividualMsg);
messageRouter.get("/new", messageController.createNewGet);
messageRouter.post("/new", messageController.createNewPost);

module.exports=messageRouter;
