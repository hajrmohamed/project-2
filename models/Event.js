const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
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
const Event = mongoose.model("Event", EventSchema);

//export
module.exports = Event;
