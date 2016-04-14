var express = require("express");
var hbs     = require("express-handlebars");
var db      = require("./db/connection");
var app     = express();

app.set("port", process.env.PORT || 3001)
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
  var desiredName = req.params.name;
  var studentOutput;
  db.students.forEach(function(student){
    if(desiredName === student.name){
      studentOutput = student;
    }
  });
  res.render("students-show", {
    student: studentOutput
  });
});

app.listen(app.get("port"), function(){
  console.log("It's ALIIIVE");
});
