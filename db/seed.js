var mongoose = require("./connection");
var seedData = require("./seeds");

var Student = mongoose.model("Student");

Student.remove({}).then(function(){
  Student.collection.insert(seedData).then(ffunction(){
    process.exit();
  });
});
