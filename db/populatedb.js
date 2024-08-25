const {Client} = require('pg');
const path= require('path');
require('dotenv').config({
    override:true,
    path:path.resolve(__dirname,"../.env.development")
})

const SQL= `
    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(255),
        message TEXT,
        date_added DATE
    );

    INSERT INTO messages (username, message) 
    VALUES 
    ('Odin', 'Whats up buddy'), 
    ('Amanda','Great Website bro');
    `;

async function main(){
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();