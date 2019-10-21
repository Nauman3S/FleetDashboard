const express = require("express")

const router = express.Router()

const aboutmeController = require('../controllers/aboutme')

router.post("/admin/aboutme", aboutmeController.aboutmeH)

module.exports = router
