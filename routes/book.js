



const express = require('express')
const router = express.Router()

const bookCntrl = require('../controllers/book')
router.use(express.urlencoded({extended: true}))
router.get('/book/index', bookCntrl.book_index_get)
router.post('/book/add', bookCntrl.book_index_post)


module.exports = router
