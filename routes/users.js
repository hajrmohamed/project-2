const express = require('express');
const router = express.Router();

//Method Override
let methodOverride = require('method-override')
router.use(methodOverride('_method'))


// Body Parser
router.use(express.urlencoded({ extended: true }));

const userCntrl = require("../controllers/user");

// Call API
// router.get("/profile/add", userCntrl.profile_create_get);
router.post("/profile/edit", userCntrl.profile_create_post);
router.get("/profile/index", userCntrl.profile_index_get);
// router.get("/profile/detail", userCntrl.profile_show_get);
// router.delete("/profile/delete", userCntrl.profile_delete_get);

module.exports = router;
<button href="/profile/edit">Edit my profile</button>