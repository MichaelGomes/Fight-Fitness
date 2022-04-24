const express = require("express");

//Setup Express
const app = express();

//Public folder with HTMl, CSS and JS
app.use(express.static("public"));

//Get
app.get("/", function (req, res) {
  res.sendFile(__dirname + "public/index.html");
});

//Listen
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});