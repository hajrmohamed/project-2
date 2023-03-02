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



const mallControl = require("../controllers/malls");


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
router.get("/mall/add", mallControl.mall_create_get);
router.post("/mall/add",upload.single("image"), mallControl.mall_create_post);
router.get("/mall/index", mallControl.mall_index_get);
router.get("/mall/details", mallControl.mall_show_get);
router.get("/mall/delete", mallControl.mall_delete_get);

//default in every route
module.exports = router;
