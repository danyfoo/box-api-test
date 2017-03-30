var express = require("express");
var app = express();

var path = require("path");
var cors = require("cors");

app.use(cors());

app.use("/main", express.static(path.join(__dirname, "/client_app")));
app.use("/vendor", express.static(path.join(__dirname, "/bower_components")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client_app/index.html");
});

app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});