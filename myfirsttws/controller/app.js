var express = require("express");
var app = express();
var user = require("../model/user");
const res = require("express/lib/response");

app.get("/api/user/:userid", function (req, res) {
  var id = req.params.userid;

  user.getUser(id, function (err, result) {
    if (!err) {
      res.send(result);
    } else {
      res.status(500).send("Some error");
    }
  });
});

module.exports = app;
