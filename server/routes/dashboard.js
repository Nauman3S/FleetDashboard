const express = require("express")

const router = express.Router()

const dashboardControllers = require('../controllers/dashboard')

router.post("/admin/dashboard", dashboardControllers.changeValue)

module.exports = router
