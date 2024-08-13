const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("node:path");

// routes
const home = require("./routes/index");
const newMessage = require("./routes/new");

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/new", newMessage);

app.listen(PORT, () => {
  console.log(`The server is listening at PORT ${PORT}`);
});
