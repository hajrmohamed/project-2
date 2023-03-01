const mongoose = require("mongoose");

const mallSchema = mongoose.Schema(
  {
    name: {type: String, required:true},
    location:{type: String, required:true},
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
