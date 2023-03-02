const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    name: {type: String, required:true},
    location: {type: String, required:true},
    date:{type: String, required:true},
    image:String,
  },

  {
    timestamps: true,
  }
);


//Model
const Event = mongoose.model("Event", EventSchema);

//export
module.exports = Event;
