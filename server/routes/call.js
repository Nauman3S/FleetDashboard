const express = require("express")

const router = express.Router()

const callControllers = require('../controllers/call')

router.post("/admin/phone", callControllers.makeCall)

module.exports = router
