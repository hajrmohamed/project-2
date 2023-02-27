//default in every route
const express = require("express");

//default in every route
const router = express.Router();

let methodOverride = require("method-override");
router.use(methodOverride("_method"));
//body parser
router.use(express.urlencoded({ extended: true }));

const mallControl = require("../controllers/malls");



//calling API

router.get("/mall/add", mallControl.mall_create_get);
router.post("/mall/add", mallControl.mall_create_post);
router.get("/mall/index", mallControl.mall_index_get);

//default in every route
module.exports = router;
