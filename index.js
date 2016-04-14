var express = require("express");
var hbs     = require("express-handlebars");
var db      = require("./db/connection");
var app     = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/students", function(req, res){
  res.render("students-index", {
    students: db.students
  });
});

app.get("/students/:name", function(req, res){
  var data = {
    name: req.params.name,
    phone_number: req.params.phone_number,
    email_address: req.params.email_address
  }
  res.render("students-show", {
    student: data
  });
});

app.listen(3001, function(){
  console.log("It's ALIIIVE");
});
