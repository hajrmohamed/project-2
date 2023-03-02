const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    name: {type: String, required:true},
    location: {type: String, required:true},
    image:String,

  },

  {
    timestamps: true,
  }
);


//Model
const Company = mongoose.model("Company", companySchema);

//export
module.exports = Company;
