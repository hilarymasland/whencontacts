var express = require("express");
var parser = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection");

var app     = express();

var Student = mongoose.model("Student");

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/students", function(req, res){
  Student.find({}).then(function(students){
    res.render("students-index", {
      students: students
    });
  });
});

app.get("/students/:name", function(req, res){
  Student.findOne({name: req.params.name}).then(function(student){
    res.render("students-show", {
      student: student
    });
  });
});

app.listen(app.get("port"), function(){
  console.log("It's ALIIIVE");
});
