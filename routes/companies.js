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



const companyControl = require("../controllers/companies");


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
router.get("/company/add", companyControl.company_create_get);
router.post("/company/add",upload.single("image"), companyControl.company_create_post);
router.get("/company/index", companyControl.company_index_get);
router.get("/company/details", companyControl.company_show_get);
router.get("/company/delete", companyControl.company_delete_get);

//default in every route
module.exports = router;
