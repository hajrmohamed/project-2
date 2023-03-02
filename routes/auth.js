
const express = require('express')
const router = express.Router()

const authCntrl = require('../controllers/auth')
router.use(express.urlencoded({extended: true}))
router.get('/auth/signup', authCntrl.auth_signup_get)
router.post('/auth/signup', authCntrl.auth_signup_post)
router.get('/auth/signin', authCntrl.auth_signin_get)
router.post('/auth/signin', authCntrl.auth_signin_post)
router.post("/profile/index", authCntrl.profile_update_post);
router.get('/auth/signout', authCntrl.auth_signout_get)

module.exports = router
