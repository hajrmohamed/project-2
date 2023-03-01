//default in every route
const express = require("express");
const path = require("path")

//default in every route
const router = express.Router();

let methodOverride = require("method-override");
const multer = require("multer");
router.use(methodOverride("_method"));
//body parser
router.use(express.urlencoded({ extended: true }));



const EventControl = require("../controllers/events");


const Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage:Storage
})


//calling API
router.get("/event/add", EventControl.event_create_get);
router.post("/event/add",upload.single("image"), EventControl.event_create_post);
router.get("/event/index", EventControl.event_index_get);
router.get("/event/details", EventControl.event_show_get);
router.get("/event/edit", EventControl.event_update_get);
router.post("/event/edit", EventControl.event_update_post);
router.get("/event/delete", EventControl.event_delete_get );



//default in every route
module.exports = router;
