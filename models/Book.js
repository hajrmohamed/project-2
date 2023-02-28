const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    time:String,
    parkType:String,
    date:Date,
    hours:String,
    price:String,
    mallDetails:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Mall"
    },
    bookedBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },

  {
    timestamps: true,
  }
);


//Model
const Book = mongoose.model("Book", bookSchema);

//export
module.exports = Book;
