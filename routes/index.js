//default in every route
const express = require("express");
//default in every route
const router = express.Router();
const indexControl = require("../controllers/index");

//calling API
router.get("/", indexControl.index_get);

//default in every route
module.exports = router;