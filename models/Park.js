const mongoose = require("mongoose");

const parkSchema = mongoose.Schema(
  {

    name:String,
    location:String,
    image: String,
    time:String,
    parkType:String,
    hours:String,
    price:String,

  },

  {
    timestamps: true,
  }
);


//Model
const Park = mongoose.model("Park", parkSchema);

//export
module.exports = Park;
