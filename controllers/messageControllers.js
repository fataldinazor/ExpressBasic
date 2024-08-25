const db = require("../db/queries")

async function getAllMessages(req,res){
    const messages=await db.getMessages();
    res.render("index",{
        messages:messages
    })
}

async function getIndividualMsg(req,res){
    const id=req.params.id;
    const message=await db.getMessage(id);
    res.render("individualMessage", {
        message:message
    })
}

async function createNewGet(req, res){
    res.render('form')
}

async function createNewPost(req, res){
    const info=req.body;
    const date= new Date();
    await db.insertNewPost(info, date);
    res.redirect("/")
}

module.exports={
    getAllMessages,
    getIndividualMsg,
    createNewGet,
    createNewPost
}