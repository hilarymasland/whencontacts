var mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
  }
);
mongoose.model("Student", StudentSchema);
mongoose.connect("mongodb://localhost/whencontacts");

module.exports = mongoose;
