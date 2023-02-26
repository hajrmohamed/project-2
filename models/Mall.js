const mongoose = require("mongoose");

const mallSchema = mongoose.Schema(
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
const Mall = mongoose.model("Mall", mallSchema);

//export
module.exports = Mall;
