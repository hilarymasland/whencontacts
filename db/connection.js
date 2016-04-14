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
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
}else{
  mongoose.connect("mongodb://localhost/whencontacts");
}

module.exports = mongoose;
