const pool = require("./pool");

async function getMessages(){
    const {rows}= await pool.query(`SELECT * FROM messages`)
    return rows;
}

async function insertNewPost(info, date){
    return await pool.query(`INSERT INTO messages(username, message, date_added) VALUES ($1, $2, $3)`,[info.userName, info.userMessage, date])
}

async function getMessage(id){
    const {rows}= await pool.query("SELECT * FROM messages WHERE id=$1",[id]);
    return rows[0];
}

module.exports={
    getMessages, getMessage, insertNewPost
}