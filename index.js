var express = require("express");

var app     = express();

app.get("/", function(req, res){
  res.send("Hi there!");
});

app.listen(3001, function(){
  console.log("It's ALIIIVE");
});
