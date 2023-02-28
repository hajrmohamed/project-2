const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    name: String,
    location: String,
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
