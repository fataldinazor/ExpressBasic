const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");

// routes
const messageRouter= require("./routes/router")

//stylesheets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//reading form values
app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter)

app.listen(PORT, () => {
  console.log(`The server is listening at PORT ${PORT}`);
});
