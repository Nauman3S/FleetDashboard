const express = require("express")

const router = express.Router()

const messageControllers = require('../controllers/message')

router.post("/admin/message", messageControllers.sendMessage)

module.exports = router
