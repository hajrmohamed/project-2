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

const multer  = require('multer')
const upload = multer ({
    storage: multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null, "/images");
        },
        filename:function(req, file, callback){
            callback(null, this.filename + "_"+ Data.row()+path.extnamme(file))
        }

    })
})
//export
module.exports = Mall;
